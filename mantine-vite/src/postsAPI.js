import axios from 'axios'

const URL = 'https://6698b5682069c438cd6f9be6.mockapi.io/lib/books'
export const getBookData = () => {
  return axios.get(URL)
}

export const getBookDataById = id => {
  const respone = axios.get(`${URL}/${id}`)
  return respone.data
}
export const postBookData = book => {
  const response = axios.post(URL, book)
  return response.data
}

export const deleteBookData = id => {
  const respone = axios.delete(`${URL}/${id}`)
  return respone.data
}

export const updateBookData = book => {
  const respone = axios.put(`${URL}/${book.id}`, book)
  return respone.data
}
