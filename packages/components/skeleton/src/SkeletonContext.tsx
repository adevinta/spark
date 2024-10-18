import { createContext, useContext } from 'react'

import type { SkeletonProps } from './Skeleton'

export type SkeletonContextInterface = SkeletonProps

export const SkeletonContext = createContext<SkeletonContextInterface>(
  {} as SkeletonContextInterface
)

export const useSkeletonContext = () => useContext(SkeletonContext)
