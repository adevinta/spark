import { Button } from '@spark-ui/button'
import React from 'react'

import { DropdownField as PositionField } from './fields/DropdownField'
import { DropdownMultipleField as HobbiesField } from './fields/DropdownMultipleField'
import { InputField as NameField } from './fields/InputField'

export const SparkForm = () => {
  return (
    <form style={{ width: 400 }} className="m-lg mx-auto flex flex-col gap-xl">
      <NameField defaultValue="" />

      <PositionField isRequired defaultValue="" />

      <HobbiesField defaultValue={[]} />

      <Button type="submit" className="mt-lg">
        Submit
      </Button>
    </form>
  )
}
