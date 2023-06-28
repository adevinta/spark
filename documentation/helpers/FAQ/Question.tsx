import { useFAQItemContext } from './context'

interface Props {
  label: string
}

export function Question({ label }: Props) {
  const { state, dispatch } = useFAQItemContext()

  return (
    <dt className="py-lg">
      <button
        className="flex w-full items-start justify-between"
        onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
      >
        <span className="flex basis-11/12 font-bold">{label}</span>
        <span className="h-sz-20 w-sz-20">
          {state.isOpen ? <Components.MinusIcon /> : <Components.PlusIcon />}
        </span>
      </button>
    </dt>
  )
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
