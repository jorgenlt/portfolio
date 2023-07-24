export const photoGalleryCode1 = `
// src/features/photos/photosSlice.jsx

import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { photos } from './photosList'
import fetchImageUrls from '../../common/storage/fetchImageUrls'

const initialState = {
  status: 'idle',
  userSignedIn: false,
  error: null,
  loading: true,
  darkMode: false,
  photos: photos,
  filterQuery: '',
  filteredPhotos: []
}

// Asynchronous thunk to fetch image URLs.
export const fetchImageUrlsThunk = createAsyncThunk(
  'photos/fetchImageUrls',
  fetchImageUrls
)

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode
    },
    // Filter the photos based on the category or location that includes 
    // the filter query.
    updateFilterQuery: (state, action) => {
      state.filterQuery = action.payload;
      console.log(\`filterQuery updated with: \${action.payload}\`);
      state.filteredPhotos = state.photos.filter(photo => 
        photo.category.includes(state.filterQuery) || 
        photo.location.includes(state.filterQuery)
      );
    },
    toggleLoading: state => {
      state.loading = false;
    },
    setUserSignedIn: (state, action) => {
      state.userSignedIn = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchImageUrlsThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchImageUrlsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        action.payload.forEach(image => {

           // Check if the photo already exists in the state.
          const exists = state.photos.some(p => p.id === image.id);
        
          // If the photo doesn't exist, add it to the photos array in the state.
          if (!exists) {
            state.photos.push(image);
          }
        
        });
      })
      .addCase(fetchImageUrlsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = \`
          The fetching of images failed with the following 
          error message: "\${action.error.message}"
        \`; 
      });
  },
})

// Selector for all photos
export const selectAllPhotos = createSelector(
  state => state.photos.photos,
  photos => photos
)

// Action creators are generated for each case reducer function
export const { 
  toggleDarkMode, 
  updateFilterQuery, 
  toggleLoading, 
  setUserSignedIn
} = photosSlice.actions

export default photosSlice.reducer
`

export const photoGalleryCode2 = `
// src/common/storage/fetchImageUrls.js

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

// Returns an array of objects containing the image URLs, categories, and locations
const fetchImageUrls = async () => {
  
  const listRef = ref(storage);
  
  const res = await listAll(listRef);
  
  const urls = await Promise.all(
    res.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const tags = item.name.split('--');
      const location = tags[0];
      const category = tags[1];

      return {
        id: item.name,
        src: url,
        category,
        location
      };
    })
  );

  return urls;
}

export default fetchImageUrls;
`

export const photoGalleryCode3 = `
// src/common/storage/uploadImage.js

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { firebaseConfig } from '../../../firebaseConfig';

const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const uploadImage = (image, location, category) => {
  if(image) {
    // Upload file and metadata to the object 'images/\${image.name}'
    const storageRef = ref(storage, \`\${location}--\${category}--\${image.name}\`);
    
    const uploadTask = uploadBytesResumable(storageRef, image);
    
    uploadTask.on('state_changed', 
    (snapshot) => {
      // Get task progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, 
    (error) => {
      // Handle errors
      console.log(error);
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
    );
  }
}

export default uploadImage;
`

export const photoGalleryCode4 = `
├── app
│   └── store.jsx
├── App.jsx
├── assets
├── common
│   ├── storage
│   │   ├── fetchImageUrls.js
│   │   └── uploadImage.js
│   └── utils
│       └── firebase.js
├── components
│   ├── auth
│   │   ├── AuthDetails.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   ├── Dropdown.jsx
│   ├── Footer.jsx
│   ├── Nav.jsx
│   ├── NavMobile.jsx
│   └── UserOptions.jsx
├── features
│   └── photos
│       ├── ImageModal.jsx
│       ├── Photo.jsx
│       ├── Photos.jsx
│       ├── photosList.js
│       ├── photosSlice.jsx
│       └── UploadImage.jsx
├── main.jsx
└── styles
    ├── app.scss
    ├── components
    │   ├── _auth.scss
    │   ├── _dropdown.scss
    │   ├── _footer.scss
    │   ├── _index.scss
    │   ├── _nav-mobile.scss
    │   ├── _nav.scss
    │   └── _user-options.scss
    ├── config
    │   ├── _base.scss
    │   ├── _index.scss
    │   └── _variables.scss
    └── features
        ├── _image-modal.scss
        ├── _index.scss
        ├── _photos.scss
        └── _upload-image.scss
`