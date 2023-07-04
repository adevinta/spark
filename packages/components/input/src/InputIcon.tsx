import { Icon, type IconProps } from '@spark-ui/icon'
import { cx } from 'class-variance-authority'

export type InputIconProps = IconProps

const InputIcon = ({ className, children, ...others }: InputIconProps) => {
  return (
    <Icon
      className={cx(
        'pointer-events-none absolute top-1/2 -translate-y-1/2 text-neutral peer-focus:text-outline-high',
        className
      )}
      {...others}
    >
      {children}
    </Icon>
  )
}

InputIcon.displayName = 'InputIcon'

export type InputLeadingIconProps = InputIconProps

export const InputLeadingIcon = ({ className, ...others }: InputLeadingIconProps) => (
  <InputIcon className={cx(className, 'left-lg')} {...others} />
)

InputLeadingIcon.displayName = 'InputLeadingIcon'

export type InputTrailingIconProps = InputIconProps

export const InputTrailingIcon = ({ className, ...others }: InputTrailingIconProps) => (
  <InputIcon className={cx(className, 'right-lg')} {...others} />
)

InputTrailingIcon.displayName = 'InputTrailingIcon'
