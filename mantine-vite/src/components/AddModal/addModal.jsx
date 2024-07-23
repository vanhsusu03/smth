import { useState } from 'react'
import { Button, Table, Modal, TextInput, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import './addModal.css'

export default function AddBookForm ({ onAdd, onClose }) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      book_name: '',
      student_name: '',
      start_date: '',
      end_date: '',
      status: 'Chưa trả'
    },
    validate: {
      book_name: value => (value.length == 0 ? 'Chưa nhập tên sách' : null),
      student_name: value =>
        value.length == 0 ? 'Chưa nhập tên sinh viên' : null,
      start_date: value => (value.length == 0 ? 'Chưa nhập ngày mượn' : null),
      end_date: value => (value.length == 0 ? 'Chưa nhập ngày trả' : null)
    }
  })

  const handleSubmit = values => {
    onAdd(values)
    onClose()
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
      <TextInput
        label='Tên sách'
        placeholder='Tên sách'
        key={form.key('book_name')}
        {...form.getInputProps('book_name')}
      />
      <TextInput
        label='Sinh viên mượn'
        placeholder='Sinh viên mượn'
        key={form.key('student_name')}
        {...form.getInputProps('student_name')}
      />
      <TextInput
        label='Ngày mượn'
        placeholder='DD/MM/YY'
        key={form.key('start_date')}
        {...form.getInputProps('start_date')}
      />
      <TextInput
        label='Ngày trả'
        placeholder='DD/MM/YY'
        key={form.key('end_date')}
        {...form.getInputProps('end_date')}
      />
      <Group position='flex-end' mt='md'>
        <Button type='submit'>Thêm</Button>
      </Group>
    </form>
  )
}
