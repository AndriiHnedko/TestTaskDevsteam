import { ToastAndroid } from 'react-native';
import { fetchPosts } from '../../requests/Requests';

const SET_POSTS = 'SET_POSTS';
const SET_PHOTO = 'SET_PHOTO';
const SET_LOADING = 'SET_LOADING';

const initialState = {
  data: [],
  loading: true,
  photo: {},
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        data: [...state.data, ...action.posts],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };
    default:
      return state;
  }
};

const setPosts = (posts) => ({ type: SET_POSTS, posts });
const setLoading = () => ({ type: SET_LOADING });

export const setPhoto = (photo) => ({ type: SET_PHOTO, photo });

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    let data = await fetchPosts();
    dispatch(setPosts(data.data));
  } catch (e) {
    ToastAndroid.show(`${e}`, ToastAndroid.SHORT);
  }
};
