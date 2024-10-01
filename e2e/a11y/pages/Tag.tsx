import { Tag } from '@spark-ui/tag'
import React from 'react'

export const A11yTag = () => (
  <section>
    <div className="flex flex-row gap-md">
      <Tag design="filled">Filled tag</Tag>
      <Tag design="outlined">Outlined tag</Tag>
      <Tag design="tinted">Tinted tag</Tag>
    </div>
  </section>
)
