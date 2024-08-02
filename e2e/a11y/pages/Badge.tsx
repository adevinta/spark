import { Badge } from '@spark-ui/badge'
import { Button } from '@spark-ui/button'
import React from 'react'

export const A11yBadge = () => (
  <section>
    <div>
      <Badge count={1}>
        <div className="size-sz-40 rounded-sm bg-outline" />
      </Badge>
    </div>

    <div>
      <Button design="tinted">
        Standalone <Badge count={100} aria-label="New notification" />
      </Button>
    </div>
  </section>
)
