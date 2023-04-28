import React, { ReactNode } from 'react'

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
  value?: string | number
  isExpanded?: boolean
}

export const InputFieldset = ({ label, mandatory, isExpanded = true }: InputFieldsetProps) => {
  return (
    <fieldset aria-hidden className={inputFieldsetStyles({})}>
      <legend className={inputFieldsetLegendStyles({ isExpanded })}>
        {label}
        {label && mandatory ? <>&nbsp;</> : undefined}
        {mandatory ? (
          <span className={inputFieldsetLegendMandatoryStyles()}>
            {mandatory === true ? '*' : `${mandatory}`}
          </span>
        ) : undefined}
      </legend>
    </fieldset>
  )
}

InputFieldset.displayName = 'InputFieldset'
