import { useState, useEffect } from 'react'
import { Button, Table, Modal, TextInput, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import './updateModal.css'

export default function updateForm ({ inf, onUpdate, onClose }) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: inf,
    validate: {
      book_name: value => (value.length == 0 ? 'Chưa nhập tên sách' : null),
      student_name: value =>
        value.length == 0 ? 'Chưa nhập tên sinh viên' : null,
      start_date: value => (value.length == 0 ? 'Chưa nhập ngày mượn' : null),
      end_date: value => (value.length == 0 ? 'Chưa nhập ngày trả' : null)
    }
  })

  useEffect(() => {
    console.log('VUA TAO RA NE ' + form.getValues())
  })

  const handleSubmit = values => {
    onUpdate(values)
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
        <Button type='submit'>Sửa</Button>
      </Group>
    </form>
  )
}
