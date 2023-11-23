import { Icon } from '@spark-ui/icon'
import { ReactElement } from 'react'

export const LeadingIcon = ({ children }: { children: ReactElement }) => {
  return <Icon>{children}</Icon>
}

LeadingIcon.id = 'LeadingIcon'
LeadingIcon.displayName = 'Select.LeadingIcon'
