import { Unstyled } from '@storybook/addon-docs'
import React, { PropsWithChildren, ReactElement, useState } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

import { useClipboard } from './utils'

interface ReactLiveBlockProps {
  children: ReactElement | ReactElement[]
  /**
   * For react-live to be aware of external components,
   * each one must be passed into the `scope` property.
   */
  scope?: Record<string, unknown>
  /** Enable/Disable the editable JSX. */
  editable?: boolean
}

/** Type casting is necessary because original FC type does not allow implicitChildren  */
const UnstyledBlock = Unstyled as (props: PropsWithChildren) => ReactElement

/**
 * Using react-live, ReactLiveBlock displays an interactive example of a JSX code block.
 * This is especially useful for compound components, to offer some playground for the developer to try combining the subcomponents.
 */
export function ReactLiveBlock({ children, editable = true, scope }: ReactLiveBlockProps) {
  const childrenLength = React.Children.toArray(children).length
  const code = reactElementToJSXString(childrenLength > 1 ? <>{children}</> : children, {
    showFunctions: true,
    maxInlineAttributesLineLength: 150,
  })

  const [editorCode, setEditorCode] = useState(code)
  const { hasCopied, onCopy } = useClipboard(editorCode)

  const onChange = (newCode: string) => setEditorCode(newCode)
  const reset = () => setEditorCode(code)

  return (
    <UnstyledBlock>
      <LiveProvider code={editorCode} scope={scope}>
        <LivePreview />
        <div className="mt-md bg-surface-inverse p-md text-body-2 text-on-surface-inverse relative rounded-md outline-hidden">
          {editable && <p className="text-body-2 text-center font-bold">Editable Example</p>}
          <div className="right-md top-sm gap-md absolute flex">
            {code !== editorCode && (
              <button onClick={reset} className="hover:text-on-surface-inverse/dim-1">
                Reset code
              </button>
            )}
            <button onClick={onCopy} className="hover:text-on-surface-inverse/dim-1">
              {hasCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <LiveEditor disabled={!editable} onChange={onChange} className="text-body-1" />
        </div>
        {editable && <LiveError />}
      </LiveProvider>
    </UnstyledBlock>
  )
}

export { useClipboard }
