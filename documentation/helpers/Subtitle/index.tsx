import type { ReactNode } from 'react'

export const Subtitle = ({ children }: { children?: ReactNode }) => (
  <p className="px-md text-caption bg-info-container text-on-info-container mb-md last:mb-none inline-flex rounded-sm font-bold leading-6">
    {children}
  </p>
)
