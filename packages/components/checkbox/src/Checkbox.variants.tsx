import { cva, VariantProps } from 'class-variance-authority'

export const styles = cva([
  'peer h-[20px] w-[20px] rounded-sm border-md border-outline bg-transparent items-center justify-center',
  'radix-state-checked:bg-primary radix-state-checked:border-primary',
  'radix-state-indeterminate:bg-primary radix-state-indeterminate:border-primary',
  'focus:outline-none focus:ring-2 focus:ring focus:ring-offset-0 focus:ring-[#000000]',
  'hover:outline-none hover:ring-2 hover:ring hover:ring-offset-0',
  'radix-disabled:opacity-50 radix-disabled:cursor-not-allowed radix-disabled:hover:ring-0',
])

export type StylesProps = VariantProps<typeof styles>
