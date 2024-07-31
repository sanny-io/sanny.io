'use client'

import { publish } from '@/actions/publish'
import '@/styles.css'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

export function PublishButtonForm() {
  return (
    <form
      action={publish}
    >
      <PublishButton />
    </form>
  )
}

function PublishButton() {
  const formStatus = useFormStatus()

  return (
    <button
      disabled={formStatus.pending}
      type='submit'
      className='button'
    >
      Publish
    </button>
  )
}