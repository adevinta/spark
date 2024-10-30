import { createContext, useContext } from 'react'

export interface SkeletonContextInterface {
  /**
   * Switch between skeleton and its children content during loading stage.
   * @default true
   */
  isLoading?: boolean
}

export const SkeletonContext = createContext<SkeletonContextInterface>({
  isLoading: true,
})

export const useSkeleton = () => {
  const ctx = useContext(SkeletonContext)

  if (!ctx) throw new Error('useSkeleton must be used within a Skeleton provider')

  return ctx
}
