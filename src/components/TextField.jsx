import {Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

export default function TextField({label, name,onChange, placeholder,value}) {
  return (
    <div className="w-full max-w-md">
      <Field>
        {label &&  <Label className="text-sm/4 font-medium">{label}</Label>}
        <Input
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className={clsx(
            'mt-2 block w-full rounded-lg border-[1px] bg-white/5 py-1.5 px-3 text-sm/6',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        />
      </Field>
    </div>
  )
}