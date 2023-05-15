'use client'

import { InputHTMLAttributes } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface MessageInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

function MessageInput({ register, errors, ...props }: MessageInput) {
  const { id, required } = props

  return (
    <div className="relative w-full">
      <input
        {...props}
        autoComplete={id}
        {...register(id, { required })}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
      />
    </div>
  )
}

export default MessageInput
