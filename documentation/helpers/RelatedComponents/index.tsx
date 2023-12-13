import { type PropsWithChildren } from 'react'

export const RelatedComponents = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/* Render children or additional content */}
      {children}
    </div>
  )
}

// Sub Component: RelatedComponents.Component
const Component = () => <div>SUBCOMPONENT</div>

// Attach the sub-component to the root component
Object.assign(RelatedComponents, {
  Component,
})
