import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export interface InputClearButtonProps {
  'aria-label': string
}

export const InputClearButton = forwardRef<HTMLDivElement, InputClearButtonProps>(
  ({ 'aria-label': ariaLabel, ...others }, ref) => {
    // const isControlled = true

    // const handleClear = () => {
    //   if (isControlled) {
    //     handleChange('')
    //   } else {

    //   }
    // }

    return (
      <div ref={ref} className={cx('pointer-events-auto')} {...others}>
        <IconButton
          tabIndex={-1}
          intent="neutral"
          design="ghost"
          size="sm"
          aria-label={ariaLabel}
          onClick={e => {
            e.preventDefault()
          }}
        >
          <Icon size="sm">
            <DeleteOutline />
          </Icon>
        </IconButton>
      </div>
    )
  }
)

InputClearButton.displayName = 'InputGroup.ClearButton'
