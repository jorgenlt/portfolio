export const aocCode1 = `
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentYear: 2023,
  codeSnippets: null,
  status: "idle",
  error: null,
};

const fetchSnippet = async (filePath) => {
  const apiEndpoint =
    "https://raw.githubusercontent.com/jorgenlt/advent-of-code/master/" +
    filePath;

  try {
    const response = await axios.get(apiEndpoint);
    return response.data;
  } catch (err) {
    console.error("Error fetching " + filePath, err);
  }
};

const fetchSnippetsParallel = async (filePaths, dispatch) => {
  const promises = filePaths.map((filePath) =>
    fetchSnippet(filePath, dispatch)
  );

  try {
    return await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
};

export const fetchCodeSnippetsAsync = createAsyncThunk(
  "data/fetchCodeSnippets",
  async () => {
    const years = [];
    for (let i = 2015; i <= 2023; i++) {
      years.push(i);
    }

    const days = [];
    for (let i = 1; i <= 25; i++) {
      days.push("day-" + i.toString().padStart(2, "0"));
    }

    const filePaths = [];

    years.forEach((year) => {
      days.forEach((day) => {
        filePaths.push(year + "/" + day + "/partOne.js");
        filePaths.push(year + "/" + day + "/partTwo.js");
      });
    });

    try {
      const snippets = await fetchSnippetsParallel(filePaths);

      if (snippets) {
        const codeSnippets = {};

        snippets.forEach((snippet, index) => {
          const filePath = filePaths[index];

          const year = Number(filePath.split("/")[0]);
          const day = filePath.split("/")[1];
          const dayNum = Number(day.match(/\\d+/)[0]);
          const fileName = filePath.split("/")[2];

          if (!codeSnippets[year]) {
            codeSnippets[year] = {};
          }

          if (!codeSnippets[year][dayNum]) {
            codeSnippets[year][dayNum] = {};
          }

          codeSnippets[year][dayNum][fileName] = snippet;
        });

        return codeSnippets;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

const aocSlice = createSlice({
  name: "aoc",
  initialState,
  reducers: {
    setYear(state, action) {
      state.currentYear = action.payload;
    },
    resetState(state) {
      state.currentYear = 2023;
      state.codeSnippets = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodeSnippetsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCodeSnippetsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.codeSnippets = action.payload;
        state.error = null;
      })
      .addCase(fetchCodeSnippetsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setYear, resetState, setLoading } = aocSlice.actions;

export default aocSlice.reducer;
`