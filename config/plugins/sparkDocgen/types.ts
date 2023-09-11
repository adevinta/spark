import reactDocgenTS from 'react-docgen-typescript'

export type PackageDocgen = Omit<reactDocgenTS.ComponentDoc, 'filePath'>
export type SparkDocgen = Record<string, PackageDocgen>
