import {Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

export default function TextField({label, name,onChange, placeholder,value,width,type, className}) {
  return (
    <div className="w-full max-w-md">
      <Field>
        {label &&  <Label className="text-xs text-gray-600 font-semibold">{label}</Label>}
        <Input
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={{width: width}}
          type={type}
          onClick={type === "date" ? (e) => e.target.showPicker() : null}
          className={clsx(
            'mt-2 block w-full rounded-[4px] border-[1px] border-[#c0c0c0] bg-white/5 py-1.5 px-3 text-sm/6',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            className
          )}
        />
      </Field>
    </div>
  )
}