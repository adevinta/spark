import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalRight } from '@spark-ui/icons'

import { useCarouselContext } from './Carousel'

export const CarouselNextButton = ({
  'aria-label': ariaLabel,
  ...buttonProps
}: IconButtonProps) => {
  const ctx = useCarouselContext()

  return (
    <IconButton
      {...ctx.getNextTriggerProps()}
      intent="surface"
      design="filled"
      className="pointer-events-auto cursor-pointer shadow-sm disabled:invisible"
      aria-label={ariaLabel}
      {...buttonProps}
    >
      <Icon>
        <ArrowVerticalRight />
      </Icon>
    </IconButton>
  )
}

CarouselNextButton.displayName = 'Carousel.NextButton'
