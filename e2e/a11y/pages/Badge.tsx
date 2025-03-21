import { Badge } from '@spark-ui/ui/badge'
import { Button } from '@spark-ui/ui/button'
import React from 'react'

export const A11yBadge = () => (
  <section>
    <div>
      <Badge count={1}>
        <div className="size-sz-40 bg-outline rounded-sm" />
      </Badge>
    </div>

    <div>
      <Button design="tinted">
        Standalone <Badge count={100} aria-label="New notification" />
      </Button>
    </div>
  </section>
)
