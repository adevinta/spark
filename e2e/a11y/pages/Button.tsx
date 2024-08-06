import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { FavoriteOutline } from '@spark-ui/icons/dist/icons/FavoriteOutline'
import React from 'react'

export const A11yButton = () => (
  <section>
    <div>
      <Button design="outlined">
        Like
        <Icon>
          <FavoriteOutline />
        </Icon>
      </Button>
    </div>

    <div>
      <Button isLoading loadingLabel="Loading...">
        Action
      </Button>
    </div>
  </section>
)
