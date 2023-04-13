import { Meta, StoryFn } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

import { Slot } from '.'

const meta: Meta<typeof Slot> = {
  title: 'Components/Slot',
  component: Slot,
}

export default meta

export const Default: StoryFn = _args => (
  <Slot data-slot="slot" data-collision="slot">
    <a data-child="child" data-collision="child" href="/">
      Link
    </a>
  </Slot>
)

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
export const ClassNames: StoryFn = _args => (
  <Slot className="slotClassName">
    <a href="/" className="childrenClassName">
      Link
    </a>
  </Slot>
)
/* eslint-enable */

export const Style: StoryFn = _args => (
  <Slot style={{ backgroundColor: 'lightgreen', width: '100%' }}>
    <div style={{ backgroundColor: 'lightblue', height: 200 }} />
  </Slot>
)

export const Ref: StoryFn = _args => {
  const [, setRendered] = useState(false)
  const slotRef = useRef<any>(null)
  const childRef = useRef<any>(null)
  useEffect(() => {
    setRendered(true)
  }, [])
  const [{ current: slotCurrent }, { current: childCurrent }] = [slotRef, childRef]

  return (
    <>
      <Slot ref={slotRef}>
        <div ref={childRef}>child inner-text</div>
      </Slot>
      <div className="flex flex-col">
        <div>slotCurrent: {slotCurrent?.innerText}</div>
        <div>childCurrent: {childCurrent?.innerText}</div>
      </div>
    </>
  )
}
