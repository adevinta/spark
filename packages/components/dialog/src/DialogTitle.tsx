import * as RadixDialog from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

export type TitleElement = ElementRef<typeof RadixDialog.Title>
export type TitleProps = RadixDialog.DialogTitleProps

export const Title = forwardRef<TitleElement, TitleProps>((props, ref) => (
  <RadixDialog.Title ref={ref} {...props} />
))

Title.displayName = 'Dialog.Title'
