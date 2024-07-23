import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getListBook as getListBookAction,
  deleteBookInfo as deleteBookInfoAction,
  getBookById as getBookByIdAction,
  postBookInfo as postBookInfoAction,
  updateBookInfo as updateBookInfoAction
} from '../../actions'
import { Button, Table, Modal, Select, Group } from '@mantine/core'
import AddModal from '../AddModal/addModal'
import UpdateModal from '../UpdateModal/updateModal'
import './libManage.css'
import '@mantine/core/styles.css'
import '@mantine/core/styles.layer.css'

const LibManage = () => {
  const [showModalAdd, setshowModalAdd] = useState(false)
  const [showModalUpdate, setshowModalUpdate] = useState(false)
  const [updateInfo, setUpdateInfo] = useState(null)
  const dispatch = useDispatch()

  const posts = useSelector(state => state.posts.posts || [])
  const bookInfo = useSelector(state => state.bookInfo)

  useEffect(() => {
    dispatch(getListBookAction())
  }, [dispatch])

  useEffect(() => {
    if (bookInfo) {
      console.log('Fetched Book Info:', bookInfo)
    }
  }, [bookInfo])

  const handleUpdateAction = book => {
    setUpdateInfo(book)
    setshowModalUpdate(true)
  }

  const handleStatusChange = (book, value) => {
    book.status = value
    handleUpdateBook(book)
  }

  const handleEdit = bookId => {
    console.log(`Edit Book ID: ${bookId}`)
  }

  const handleGetById = id => {
    dispatch(getBookByIdAction(id))
    console.log('Fetching book by ID...')
  }

  const handleAddBook = bookData => {
    dispatch(postBookInfoAction(bookData))
    setTimeout(() => {
      location.reload()
    }, 1000)
  }
  const handleUpdateBook = book => {
    dispatch(updateBookInfoAction(book))
    // setTimeout(() => {
    //   location.reload()
    // }, 1000)
  }

  const handleDelete = bookId => {
    dispatch(deleteBookInfoAction(bookId))
    setTimeout(() => {
      location.reload()
    }, 1000)
  }

  const formatDate = timestamp => {
    const date = new Date(timestamp * 1000)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const statusOptions = [
    { value: 'Chưa trả', label: 'Chưa trả' },
    { value: 'Đã trả', label: 'Đã trả' }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h1>Quản lý mượn trả sách</h1>
        <Button onClick={() => setshowModalAdd(true)}>Thêm thông tin</Button>
      </div>

      <Table className='mantine-table' highlightOnHover>
        <thead>
          <tr>
            <th className='mantine-table-cell'>STT</th>
            <th className='mantine-table-cell'>Tên sách</th>
            <th className='mantine-table-cell'>Sinh viên mượn</th>
            <th className='mantine-table-cell'>Ngày mượn</th>
            <th className='mantine-table-cell'>Ngày trả</th>
            <th className='mantine-table-cell status-column'>Trạng thái</th>
            <th className='mantine-table-cell'>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(posts) &&
            posts.map(book => (
              <tr key={book.id}>
                <td className='mantine-table-cell'>{book.id}</td>
                <td className='mantine-table-cell'>{book.book_name}</td>
                <td className='mantine-table-cell'>{book.student_name}</td>
                <td className='mantine-table-cell'>
                  {formatDate(book.start_date)}
                </td>
                <td className='mantine-table-cell'>
                  {formatDate(book.end_date)}
                </td>
                <td className='mantine-table-cell status'>
                  <Select
                    data={statusOptions}
                    placeholder={book.status}
                    styles={{ input: { borderRadius: '8px' } }}
                    onChange={value => handleStatusChange(book, value)}
                  />
                </td>
                <td className='mantine-table-cell status'>
                  <Group
                    position='center'
                    spacing='xs'
                    style={{ padding: '2px' }}
                  >
                    <Button
                      size='xs'
                      onClick={() => handleUpdateAction(book)}
                      style={{
                        flex: 1,
                        minWidth: '50px',
                        backgroundColor: 'rgb(255,255,238) ',
                        color: 'red',
                        border: '1px solid orange'
                      }}
                      className='edit'
                    >
                      Sửa
                    </Button>
                    <Button
                      className='delete'
                      size='xs'
                      onClick={() => handleDelete(book.id)}
                      style={{
                        flex: 1,
                        minWidth: '50px',
                        backgroundColor: 'rgb(255,246,247) ',
                        color: 'red',
                        border: '1px solid red'
                      }}
                    >
                      Xóa
                    </Button>
                  </Group>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Modal
        opened={showModalAdd}
        onClose={() => setshowModalAdd(false)}
        title='Thêm thông tin sách'
      >
        <AddModal
          onAdd={bookData => handleAddBook(bookData)}
          onClose={() => setshowModalAdd(false)}
        />
      </Modal>

      <Modal
        opened={showModalUpdate}
        onClose={() => setshowModalAdd(false)}
        title='Sửa thông tin sách'
      >
        <UpdateModal
          inf={updateInfo}
          onUpdate={bookData => handleUpdateBook(bookData)}
          onClose={() => setshowModalUpdate(false)}
        />
      </Modal>
    </div>
  )
}

export default LibManage
