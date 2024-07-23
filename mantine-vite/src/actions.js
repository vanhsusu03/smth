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

export const getListBook = payload => {
  return {
    type: GET_LIST_BOOK,
    payload
  }
}

export const getListBookSuccess = payload => {
  console.log(">>> chek dât", payload.data )
  return {
    type: GET_LIST_BOOK_SUCCESS,
    payload: payload.data
  }
}

export const getBookById = id => {
  return {
    type: GET_BOOK_ID,
    payload: id
  }
}

export const getBookByIdSuccess = bookInfo => {
  return {
    type: GET_BOOK_ID_SUCCESS,
    payload: bookInfo
  }
}

export const postBookInfo = book => ({
  type: POST_BOOK_INFO,
  payload: book
})

export const postBookInfoSuccess = book => ({
  type: POST_BOOK_INFO_SUCCESS,
  payload: book
})

export const postBookInfoFailure = error => ({
  type: POST_BOOK_INFO_FAILURE,
  payload: error
})
export const deleteBookInfo = id => {
  return {
    type: DELETE_BOOK,
    payload: id
  }
}
export const deleteBookInfoSuccess = id => {
  return {
    type: DELETE_BOOK_SUCCESS,
    payload: id
  }
}
export const updateBookInfo = book => {
  return {
    type: UPDATE_BOOK,
    payload: book
  }
}
export const updateBookInfoSuccess = book => {
  return {
    type: UPDATE_BOOK_SUCCESS,
    payload: book
  }
}
