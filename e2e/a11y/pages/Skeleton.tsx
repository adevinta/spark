import { Skeleton } from '@spark-ui/skeleton'
import React from 'react'

export const A11ySkeleton = () => (
  <section>
    <Skeleton className="gap-lg">
      <Skeleton.Rectangle height={128} />

      <div className="flex flex-wrap gap-lg">
        <Skeleton.Circle size={64} />
        <Skeleton.Line gap="md" lines={3} />
      </div>
    </Skeleton>
  </section>
)
