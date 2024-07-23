import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import {
  getBookData,
  postBookData,
  deleteBookData,
  getBookDataById,
  updateBookData
} from './postsAPI'
import {
  getListBookSuccess,
  postBookInfoSuccess,
  postBookInfoFailure,
  deleteBookInfoSuccess,
  getBookByIdSuccess,
  updateBookInfoSuccess
} from './actions'
import { POST_BOOK_INFO_SUCCESS } from './constant'
function* getListBookSaga (action) {
  try {
    const data = yield call(getBookData)
    yield put(getListBookSuccess(data))
  } catch (error) {}
}
function* postBookSaga (action) {
  try {
    const book = yield call(postBookData, action.payload)
    yield put(postBookInfoSuccess(book))
  } catch (err) {
    yield put(postBookInfoFailure(err))
  }
}

function* deleteBookSaga (action) {
  try {
    const data = yield call(deleteBookData, action.payload)
    yield put(deleteBookInfoSuccess(data))
  } catch (err) {
    console.log(err)
  }
}
function* getBookDataByIdSaga (action) {
  try {
    const data = yield call(getBookDataById, action.payload)
    yield put(getBookByIdSuccess(data))
  } catch (err) {
    console.log(err)
  }
}
function* updateBookDataSaga (action) {
  try {
    const data = yield call(updateBookData, action.payload)
    yield put(updateBookInfoSuccess(data))
  } catch (err) {
    console.log(err)
  }
}
function* postsSaga () {
  yield takeEvery('GET_LIST_BOOK', getListBookSaga)
  yield takeEvery('POST_BOOK_INFO', postBookSaga)
  yield takeEvery('DELETE_BOOK', deleteBookSaga)
  yield takeEvery('GET_BOOK_ID', getBookDataByIdSaga)
  yield takeEvery('UPDATE_BOOK', updateBookDataSaga)
}

export default postsSaga
