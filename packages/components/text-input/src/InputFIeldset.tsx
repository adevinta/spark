import { ReactNode } from 'react'
import { inputFieldsetStyles, type InputFieldsetStylesProps } from './InputFieldset.styles'

export interface InputFieldsetProps extends InputFieldsetStylesProps {
  mandatory?: boolean | string
  placeholder?: string
  label: ReactNode
  value?: string
}

export const InputFieldset = ({ label, mandatory }: InputFieldsetProps) => {
  return (
    <fieldset aria-hidden className={inputFieldsetStyles({})}>
      <legend>{label}</legend>
      {mandatory ? <span>{mandatory === true ? '*' : mandatory}</span> : undefined}
    </fieldset>
  )
}

InputFieldset.displayName = 'InputElement'
