import { Unstyled } from '@storybook/addon-docs'
import React, { PropsWithChildren, ReactElement, useState } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

import { useClipboard } from './utils'
import styles from './styles.module.css'

interface ReactLiveBlockProps {
  children: ReactElement | ReactElement[]
  /**
   * For react-live to be aware of external components,
   * each one must be passed into the `scope` property.
   */
  scope?: Record<string, any>
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
        <div className={styles.wrapper}>
          {editable && <p className={styles.label}>Editable Example</p>}
          <div className={styles.actions}>
            {code !== editorCode && (
              <button onClick={reset} className={styles.action}>
                Reset code
              </button>
            )}
            <button onClick={onCopy} className={styles.action}>
              {hasCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <LiveEditor
            disabled={!editable}
            onChange={onChange}
            style={{
              fontSize: '1.6rem',
            }}
          />
        </div>
        {editable && <LiveError />}
      </LiveProvider>
    </UnstyledBlock>
  )
}
