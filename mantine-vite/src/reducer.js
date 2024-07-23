import {
  GET_LIST_BOOK,
  GET_LIST_BOOK_SUCCESS,
  POST_BOOK_INFO,
  POST_BOOK_INFO_SUCCESS,
  POST_BOOK_INFO_FAILURE,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  GET_BOOK_ID,
  GET_BOOK_ID_SUCCESS,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS
} from './constant'

const INITIAL_STATE = {
  posts: [],
  bookInfo: {},
  load: false,
  error: null
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_BOOK:
      return {
        ...state,
        load: true
      }
    case GET_LIST_BOOK_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        load: false
      }
    case GET_BOOK_ID:
      return {
        ...state,
        load: true,
        bookInfo: null
      }
    case GET_BOOK_ID_SUCCESS:
      return {
        ...state,
        load: false,
        bookInfo: action.payload
      }
    case POST_BOOK_INFO:
      return {
        ...state,
        load: true
      }
    case POST_BOOK_INFO_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        load: false,
        error: null
      }
    case POST_BOOK_INFO_FAILURE:
      return {
        ...state,
        load: false,
        error: action.payload
      }
    case DELETE_BOOK:
      return {
        ...state,
        load: true
      }
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        load: false
      }
    case UPDATE_BOOK:
      return {
        ...state,
        load: true
      }
    case UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        load: false
      }
    default:
      return { ...state }
  }
}

export default postsReducer
