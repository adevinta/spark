import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalLeft } from '@spark-ui/icons'

import { useCarouselContext } from './Carousel'

export const CarouselPrevButton = ({
  'aria-label': ariaLabel,
  ...buttonProps
}: IconButtonProps) => {
  const ctx = useCarouselContext()

  return (
    <IconButton
      {...ctx.getPrevTriggerProps()}
      intent="surface"
      design="filled"
      className="pointer-events-auto cursor-pointer shadow-sm disabled:invisible"
      aria-label={ariaLabel}
      {...buttonProps}
    >
      <Icon>
        <ArrowVerticalLeft />
      </Icon>
    </IconButton>
  )
}

CarouselPrevButton.displayName = 'Carousel.PrevButton'
