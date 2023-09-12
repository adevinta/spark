import { type ParserOptions } from 'react-docgen-typescript'

export const docgenConfig: ParserOptions = {
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,

  propFilter: prop => {
    const prohibitedPropsRegexesNew = [/\/node_modules\/@types\/react\/.*.d.ts/]

    if (prop.declarations && prop.declarations?.length > 0) {
      const isProhibitedProps = prop.declarations.some(declaration =>
        prohibitedPropsRegexesNew.some(regex => regex.test(declaration.fileName))
      )

      return !isProhibitedProps
    }

    return true
  },
}
