import { useEffect, useRef } from 'react'

import { useFAQItemContext } from './context'

interface Props {
  label: string
}

export function Question({ label }: Props) {
  const { state, dispatch } = useFAQItemContext()
  const btnRef = useRef<HTMLButtonElement>(null)

  const slugifiedLabel = utils.slugify(label)

  function handleClick() {
    dispatch({ type: 'TOGGLE_OPEN' })

    if (!window.top) return
    window.top.location.hash = slugifiedLabel
  }

  useEffect(() => {
    if (!btnRef.current || window.top?.location.hash !== `#${slugifiedLabel}`) return

    dispatch({ type: 'TOGGLE_OPEN' })
    btnRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [dispatch, slugifiedLabel])

  return (
    <dt className="py-lg">
      <button
        ref={btnRef}
        id={slugifiedLabel}
        className="scroll-mt-lg flex w-full items-start justify-between"
        onClick={handleClick}
      >
        <span className="flex basis-11/12 font-bold">{label}</span>
        <span className="size-sz-20">
          {state.isOpen ? <Components.MinusIcon /> : <Components.PlusIcon />}
        </span>
      </button>
    </dt>
  )
}

const utils = {
  slugify(str: string) {
    return str
      .replace(/[^a-z0-9 ]/gi, '')
      .toLowerCase()
      .replace(/ /g, '-')
  },
}

const Components = {
  MinusIcon: () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"></path>
    </svg>
  ),
  PlusIcon: () => (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"></path>
    </svg>
  ),
}
