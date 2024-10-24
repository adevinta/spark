import { Skeleton } from '@spark-ui/skeleton'
import React from 'react'

export const A11ySkeleton = () => (
  <section>
    <Skeleton gap="lg">
      <Skeleton.Rectangle height={128} />

      <Skeleton.Group gap="lg">
        <Skeleton.Circle size={64} />
        <Skeleton.Line gap="md" lines={3} />
      </Skeleton.Group>
    </Skeleton>
  </section>
)
