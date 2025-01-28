import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { CarouselContext } from './Carousel'

export const CarouselSlidePicker = () => {
  const ctx = useContext(CarouselContext)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowLeft') {
      if (!ctx.loop && !ctx.hasPrevPage) return

      const nextPage = ctx.hasPrevPage ? ctx.activePageIndex - 1 : ctx.pages.length - 1

      event.preventDefault()
      ctx.goTo(nextPage, { behavior: ctx.scrollBehavior })
    }

    if (event.key === 'ArrowRight') {
      if (!ctx.loop && !ctx.hasNextPage) return

      const nextPage = ctx.hasNextPage ? ctx.activePageIndex + 1 : 0

      event.preventDefault()
      ctx.goTo(nextPage, { behavior: ctx.scrollBehavior })
    }
  }

  return (
    <>
      <div
        role="radiogroup"
        className="flex w-full flex-wrap items-center justify-center gap-md"
        aria-hidden
      >
        {Object.keys(ctx.pages).map((page, i) => {
          const isActivePage = ctx.activePageIndex === i
          const accessibleLabel = `Go to page ${i + 1}`

          const handleClick = () => ctx.goTo(i, { behavior: ctx.scrollBehavior })

          return (
            <button
              role="radio"
              key={page}
              aria-label={accessibleLabel}
              aria-checked={isActivePage}
              tabIndex={isActivePage ? 0 : -1}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              className={cx(
                'size-sz-16 rounded-full',
                isActivePage ? 'bg-support' : 'border-sm border-support bg-surface',
                'hover:cursor-pointer',
                'focus-visible:outline-none focus-visible:u-ring'
              )}
            ></button>
          )
        })}
      </div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {ctx.activePageIndex + 1} of {ctx.pages.length}
      </div>
    </>
  )
}

CarouselSlidePicker.displayName = 'Carousel.SlidePicker'
