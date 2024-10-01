import { Label } from '@spark-ui/label'
import React from 'react'

export const A11yLabel = () => (
  <section>
    <div className="flex flex-col gap-md">
      <Label className="flex items-center gap-sm" htmlFor="label-required">
        Title
        <Label.RequiredIndicator />
      </Label>

      <input
        type="text"
        id="label-required"
        placeholder="IPhone 14"
        className="rounded-sm border-md border-neutral p-md active:border-main"
        required
      />
    </div>
  </section>
)
