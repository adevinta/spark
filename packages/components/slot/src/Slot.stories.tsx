import { Meta, StoryFn } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

import { Slot } from '.'

const meta: Meta<typeof Slot> = {
  title: 'Components/Slot',
  component: Slot,
}

export default meta

const useDOMElementString = () => {
  const ref = useRef<undefined | HTMLElement>()
  const [, set] = useState(false)
  useEffect(() => {
    set(true)
  }, [])
  const stringElement = ref.current?.outerHTML

  return [stringElement, ref]
}

export const Default: StoryFn = _args => {
  const [element, ref] = useDOMElementString()

  return (
    <div className="flex flex-col">
      <Slot data-slot="slot" data-collision="slot">
        <a data-child="child" data-collision="child" href="/" ref={ref}>
          Link
        </a>
      </Slot>
      <div>{element}</div>
    </div>
  )
}

export const Handlers: StoryFn = _args => {
  const onSlotClick = () => console.log('slot click')
  const onChildClick = () => console.log('child click')

  return (
    <Slot onClick={onSlotClick}>
      <button onClick={onChildClick}>child button</button>
    </Slot>
  )
}
/* eslint-disable tailwindcss/no-custom-classname */
export const ClassNames: StoryFn = _args => {
  const [element, ref] = useDOMElementString()

  return (
    <div className="flex flex-col">
      <Slot className="slotClassName">
        <a href="/" className="childrenClassName" ref={ref}>
          Link
        </a>
      </Slot>
      <div>{element}</div>
    </div>
  )
}
/* eslint-enable */

export const Style: StoryFn = _args => {
  const [element, ref] = useDOMElementString()

  return (
    <div className="flex flex-col">
      <Slot style={{ backgroundColor: 'lightgreen', width: '100%' }}>
        <div style={{ backgroundColor: 'lightblue', height: 200 }} ref={ref} />
      </Slot>
      <div>{element}</div>
    </div>
  )
}

export const Ref: StoryFn = _args => {
  const [, setRendered] = useState(false)
  const slotRef = useRef<any>(null)
  const childRef = useRef<any>(null)
  useEffect(() => {
    setRendered(true)
  }, [])
  const [{ current: slotCurrent }, { current: childCurrent }] = [slotRef, childRef]

  return (
    <div className="flex flex-col">
      <Slot ref={slotRef}>
        <div ref={childRef}>child inner-text</div>
      </Slot>
      <div className="flex flex-col">
        <div>slotCurrent: {slotCurrent?.outerHTML}</div>
        <div>childCurrent: {childCurrent?.outerHTML}</div>
      </div>
    </div>
  )
}
