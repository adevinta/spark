import { Icon } from '@spark-ui/icon'
import { ReactElement } from 'react'

export const LeadingIcon = ({ children }: { children: ReactElement }) => {
  return (
    <Icon size={'sm'} className="shrink-0">
      {children}
    </Icon>
  )
}

LeadingIcon.displayName = 'Dropdown.LeadingIcon'
