export const withingsCode1 = `
├── src
│   ├── app
│   │   └── store.js
│   ├── App.jsx
│   ├── assets
│   │   └── demoFiles.js
│   ├── common
│   │   └── utils
│   │       ├── calculateAge.js
│   │       ├── camelCaseFileName.js
│   │       ├── dateFormat.js
│   │       ├── findMinMax.js
│   │       ├── queryFilters.js
│   │       └── sleepUtils.js
│   ├── components
│   │   ├── Home.jsx
│   │   ├── Loader.jsx
│   │   ├── MobileOverlay.jsx
│   │   └── Nav.jsx
│   ├── features
│   │   └── dataReader
│   │       ├── ChartDateNav.jsx
│   │       ├── dataReaderSlice.js
│   │       ├── HeartRate.jsx
│   │       ├── Instructions.jsx
│   │       ├── Sleep.jsx
│   │       ├── Spo2.jsx
│   │       ├── User.jsx
│   │       └── Weight.jsx
│   ├── main.jsx
│   └── styles
│       ├── app.scss
│       ├── components
│       │   ├── _home.scss
│       │   ├── _index.scss
│       │   ├── _instructions.scss
│       │   ├── _mobile-overlay.scss
│       │   └── _nav.scss
│       ├── config
│       │   ├── _base.scss
│       │   ├── _chart.scss
│       │   ├── _index.scss
│       │   ├── _table.scss
│       │   └── _variables.scss
│       └── features
│           ├── _index.scss
│           ├── _sleep.scss
│           └── _user.scss
└── vite.config.js
`;

export const withingsCode2 = `
// dataReaderSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Papa from "papaparse";
import { camelCaseFileName } from "../../common/utils/camelCaseFileName";
import { demoFiles } from "../../assets/demoFiles";

const initialState = {
  value: 0,
  error: null,
  status: "idle",
  filterDate: null,
  navIsOpen: true,
  files: {},
  demoFiles: demoFiles,
};

// Upload thunk. Accepts files object from file input.
export const uploadFilesThunk = createAsyncThunk(
  "data/uploadFilesThunk",
  async (files) => {
    // Array to store parsed files
    const parsedFiles = [];

    // Files to upload
    const allowedFiles = [
      "account.csv",
      "height.csv",
      "raw_hr_hr.csv",
      "raw_spo2_auto_spo2.csv",
      "raw_tracker_sleep-state.csv",
      "sleep.csv",
      "user.csv",
      "weight.csv",
    ];

    // Loop through files
    for (const file in files) {
      // Check file is valid
      if (allowedFiles.includes(files[file].name)) {
        // Parse CSV with PapaParse
        await new Promise((resolve, reject) => {
          Papa.parse(files[file], {
            skipEmptyLines: true,
            complete: (results) => {
              parsedFiles.push({
                filename: camelCaseFileName(files[file].name),
                data: results,
              });
              resolve(results.data);
            },
            error: (err) => {
              reject(err);
            },
          });
        }).catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });
      }
    }
    return parsedFiles;
  }
);

// Slice
export const dataReader = createSlice({
  name: "dataReader",
  initialState,
  reducers: {
    deleteStoredData: (state) => {
      state.files = {};
      state.error = null;
      state.status = "idle";
    },
    updateFilterDate: (state, action) => {
      state.filterDate = action.payload;
    },
    toggleNavIsOpen: (state) => {
      state.navIsOpen = !state.navIsOpen;
    },
    updateSpo2: (state, action) => {
      state.spo2 = action.payload;
    },
    updateHr: (state, action) => {
      state.hr = action.payload;
    },
    updateSleepState: (state, action) => {
      state.sleepState = action.payload;
    },
    updateSleep: (state, action) => {
      state.sleep = action.payload;
    },
    updateWeight: (state, action) => {
      state.weight = action.payload;
    },
    setDemoFiles: (state) => {
      state.files = state.demoFiles;
    },
  },
  extraReducers: (builder) => {
    builder
      // uploadFilesThunk handling
      .addCase(uploadFilesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadFilesThunk.fulfilled, (state, action) => {
        state.status = "succeded";

        const files = action.payload;

        // Add each file to state
        files.forEach((file) => {
          state.files[file.filename] = file.data.data;
        });

        // Alert user
        alert("Files uploaded successfully.");
      })
      .addCase(uploadFilesThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteStoredData,
  updateFilterDate,
  toggleNavIsOpen,
  updateSpo2,
  updateHr,
  updateSleepState,
  updateSleep,
  setDemoFiles,
  updateWeight,
} = dataReader.actions;

export default dataReader.reducer;
`;

export const withingsCode3 = `
// App.jsx

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  updateHr,
  updateSpo2,
  updateFilterDate,
  updateSleepState,
  updateSleep,
  updateWeight,
} from "./features/dataReader/dataReaderSlice";
import { format, addDays } from "date-fns";
import { isMobile } from "react-device-detect";

import Spo2 from "./features/dataReader/Spo2";
import HeartRate from "./features/dataReader/HeartRate";
import Nav from "./components/Nav";
import Home from "./components/Home";
import User from "./features/dataReader/User";
import Weight from "./features/dataReader/Weight";
import Instructions from "./features/dataReader/Instructions";
import Sleep from "./features/dataReader/Sleep";
import MobileOverlay from "./components/MobileOverlay";

const App = () => {
  const { rawSpo2AutoSpo2, rawHrHr, rawTrackerSleepState, sleep, weight } =
    useSelector((state) => state.dataReader.files);

  const dispatch = useDispatch();

  // Populate sp02 state
  useEffect(() => {
    if (rawSpo2AutoSpo2) {
      // Process raw data
      let rawData = [...rawSpo2AutoSpo2];

      // Remove headers
      rawData.shift();

      // Creating an array of objects
      const data = rawData.map((row) => {
        const start = row[0] ? new Date(row[0]).getTime() : "";
        const value = row[2] ? parseInt(row[2].replace(/[[\\]]/g, "")) : "";

        return {
          start,
          value,
          id: start,
        };
      });

      // Sort by date
      const sortedData = data.sort((a, b) => a.start - b.start);

      // Updating spo2 in state
      dispatch(updateSpo2(sortedData));

      // Set most recent date
      dispatch(updateFilterDate(sortedData[sortedData.length - 1].start));
    }
  }, [rawSpo2AutoSpo2]);

  // Populate hr state
  useEffect(() => {
    if (rawHrHr) {
      // Process raw dataedux DevTools serialization slow and consuming a lot of memor
      let rawData = [...rawHrHr];

      // Remove headersResponsiveContainer
      rawData.shift();

      // Creating an array of objects
      const data = rawData.map((row) => {
        const start = row[0] ? new Date(row[0]).getTime() : "";
        const value = row[2] ? parseInt(row[2].replace(/[[\\]]/g, "")) : "";

        return {
          start,
          value,
          id: start,
        };
      });

      // Sort by date
      const sortedData = data.sort((a, b) => a.start - b.start);

      // Updating hr in state
      dispatch(updateHr(sortedData));
    }
  }, [rawHrHr]);

  // Populate sleep state
  useEffect(() => {
    if (rawTrackerSleepState) {
      const data = [];

      // Sort all entries into groups with one group per day
      // Skip header row (let i = 1)
      for (let i = 1; i < rawTrackerSleepState.length; i++) {
        const item = rawTrackerSleepState[i];

        // Set start time and date
        // If start is later than 12 (noon) add 1 day to date
        const start = new Date(item[0]).getTime();
        const startHour = new Date(item[0]).getHours();
        const date =
          startHour < 12
            ? format(start, "MMMM d y")
            : format(addDays(start, 1), "MMMM d y");

        // Parse the duration and value arrays
        const duration = JSON.parse(item[1]);
        const values = JSON.parse(item[2]);

        // Try to find the item in data array
        const foundItem = data.find((newItem) => newItem.date === date);

        if (foundItem) {
          // If the item exists, append the duration and values
          foundItem.duration = [...foundItem.duration, ...duration];
          foundItem.values = [...foundItem.values, ...values];
        } else {
          // Else, create a new item
          data.push({
            date,
            start,
            duration,
            values,
            id: start,
          });
        }
      }

      dispatch(updateSleepState(data));
    }
  }, [rawTrackerSleepState]);

  // Populate sleep
  useEffect(() => {
    if (sleep) {
      // Process raw data
      let rawData = [...sleep];

      // Remove headers
      rawData.shift();

      // Creating an array of objects
      const data = rawData.map((row) => {
        const start = new Date(row[0]).getTime();
        const startHour = new Date(row[0]).getHours();
        const date =
          startHour < 12
            ? format(start, "MMMM d y")
            : format(addDays(start, 1), "MMMM d y");
        const end = new Date(row[1]).getTime();
        const light = Number(row[2]);
        const deep = Number(row[3]);
        const rem = Number(row[4]);
        const awake = Number(row[5]);
        const avgHr = Number(row[11]);
        const hrMin = Number(row[12]);
        const hrMax = Number(row[13]);

        return {
          date,
          start,
          end,
          light,
          deep,
          rem,
          awake,
          avgHr,
          hrMin,
          hrMax,
          id: start,
        };
      });

      // Sort by date
      const sortedData = data.sort((a, b) => a.start - b.start);

      // // Updating sleep in state
      dispatch(updateSleep(sortedData));
    }
  }, [sleep]);

  // Populate weight
  useEffect(() => {
    if (weight) {
      // Process raw data
      let rawData = [...weight];

      // Remove headers
      rawData.shift();

      // Creating an array of objects
      const data = rawData.map((row) => {
        const date = new Date(row[0]).getTime();
        const weight = Number(row[1]);

        return {
          id: date,
          date,
          weight,
        };
      });

      // Sort by date
      const sortedData = data.sort((a, b) => a.date - b.date);

      // Updating sleep in state
      dispatch(updateWeight(sortedData));
    }
  }, [weight]);

  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spo2" element={<Spo2 />} />
          <Route path="/heartrate" element={<HeartRate />} />
          <Route path="/user" element={<User />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/sleep" element={<Sleep />} />
        </Routes>
        {isMobile && <MobileOverlay />}
      </>
    </Router>
  );
};

export default App;
`;

export const withingsCode4 = `
// Spo2.jsx

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilterDate } from "./dataReaderSlice";
import ChartDateNav from "./ChartDateNav";
import { filterByDate } from "../../common/utils/queryFilters";
import { findMinMax } from "../../common/utils/findMinMax";
import { unixToHours, unixToDateTime } from "../../common/utils/dateFormat";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Spo2 = () => {
  const [filteredSpo2, setFilteredSpo2] = useState(null);
  const [minMaxSpo2, setMinMaxSpo2] = useState({});
  const [showRawData, setShowRawData] = useState(false);

  // Get data from Redux
  const { filterDate, navIsOpen, spo2 } = useSelector(
    (state) => state.dataReader
  );

  // Initializing hooks
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    dispatch(updateFilterDate(new Date(date)));
  };

  const CustomSpo2Tooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { start, value } = payload[0].payload;

      return (
        <div className="custom-tooltip">
          <p>{value} %</p>
          <p>{unixToHours(start)}</p>
        </div>
      );
    }

    return null;
  };

  // Update chart when date changes or when spo2 is populated
  useEffect(() => {
    if (spo2 && filterDate) {
      const filteredSpo2Data = filterByDate(spo2, filterDate);
      setFilteredSpo2(filteredSpo2Data);
      setMinMaxSpo2(findMinMax(filteredSpo2Data));
    }
  }, [filterDate, spo2]);

  return (
    <div
      className="app-wrapper"
      style={navIsOpen ? { marginLeft: "320px" } : { marginLeft: "60px" }}
    >
      <h1>
        Sleep Blood Oxygen Saturation (SpO<sub>2</sub>)
      </h1>
      {filterDate && (
        <>
          <div className="chart-wrapper">
            <ChartDateNav />
            <div>
              {!filteredSpo2?.[0]?.start && <p>No data on chosen date.</p>}
            </div>
            <div className="chart-stats">
              {filteredSpo2?.[0]?.start && (
                <>
                  <p>Min: {minMaxSpo2.min} %</p>
                  <p>Max: {minMaxSpo2.max} %</p>
                </>
              )}
            </div>
            <LineChart
              width={filteredSpo2 ? filteredSpo2.length * 30 : null}
              height={500}
              data={filteredSpo2}
              margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
              style={{ fontFamily: "sans-serif" }}
            >
              <Line
                type="monotone"
                dataKey="value"
                stroke="#C736E7"
                strokeWidth={2}
                dot={{
                  stroke: "#C736E7",
                  strokeWidth: 2,
                  background: "#C736E7",
                }}
              />
              <CartesianGrid stroke="#787E91" strokeDasharray="5 5" />
              <XAxis
                dataKey="start"
                tickFormatter={(start) => unixToHours(start)}
                tickMargin={10}
                angle={0}
                padding={{ left: 0 }}
                stroke="#787E91"
                tick={{ fill: "snow" }}
              />
              <YAxis
                unit={"%"}
                domain={[70, 105]}
                interval="preserveEnd"
                scale={"log"}
                tickMargin={10}
                stroke="#787E91"
                tick={{ fill: "snow" }}
              />
              <Tooltip content={<CustomSpo2Tooltip />} />
            </LineChart>
            <p
              onClick={() => setShowRawData((prev) => !prev)}
              className="show-raw-data"
            >
              Raw data
            </p>
          </div>

          {showRawData && (
            <div className="raw-data">
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Oxygen Saturation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spo2 &&
                      spo2.map((record) => {
                        return (
                          <tr
                            key={record.id}
                            onClick={() =>
                              handleDateChange(new Date(record.start))
                            }
                            className="raw-data-tr"
                          >
                            <td>{unixToDateTime(record.start)}</td>
                            <td>{\`\${record.value} %\`}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Spo2;
`;