import React, { ReactNode } from 'react'

import { type InputProps } from './Input'
import {
  inputFieldsetLegendMandatoryStyles,
  inputFieldsetLegendStyles,
  inputFieldsetStyles,
  type InputFieldsetStylesProps,
} from './InputFieldset.styles'

export interface InputFieldsetProps extends InputFieldsetStylesProps {
  mandatory?: boolean | string
  placeholder?: string
  label: ReactNode
  isExpanded?: boolean
}

export const InputFieldset = ({ label, mandatory, isExpanded = true }: InputFieldsetProps) => {
  return (
    <fieldset aria-hidden="true" className={inputFieldsetStyles({})}>
      <legend className={inputFieldsetLegendStyles({ isExpanded })}>{label}</legend>
    </fieldset>
  )
}

InputFieldset.displayName = 'InputFieldset'
