import styles from './styles.module.css'

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4'
  label: string
}

/**
 * As of today, there is a bug in MDX heading preventing HTML anchors from working.
 * Issue: https://github.com/storybookjs/storybook/issues/20519
 *
 * Until this is resolved, we must use this compoennt instead of markdown syntax for headings inside stories.
 */
export function StoryHeading({ label, as = 'h2' }: Props) {
  const HeadingTag = as as keyof JSX.IntrinsicElements
  const slugifiedLabel = slugify(label)

  return (
    <HeadingTag className={styles.heading} id={slugifiedLabel}>
      <a
        ref={node => {
          /* HACK: make sure that when a user accesses a URL containing an ID, the page scrolls to the relevant section */
          if (!node) {
            return
          }
          if (window.top?.location.hash === `#${slugifiedLabel}`) {
            setTimeout(() => {
              node.scrollIntoView({ behavior: 'smooth' })
            }, 500)
          }
        }}
        className={styles.anchor}
        aria-hidden="true"
        href={`#${slugifiedLabel}`}
        target="_self"
        onClick={() => {
          if (window.top) {
            window.top.location.hash = slugifiedLabel
          }
        }}
      >
        {linkIcon}
      </a>
      {label}
    </HeadingTag>
  )
}

const linkIcon = (
  <svg
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    height="16"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    ></path>
  </svg>
)

/**
 * Transforms a string (heading) into an anchor-compatible string.
 */
function slugify(str: string) {
  return str
    .replace(/[^a-z0-9 ]/gi, '')
    .toLowerCase()
    .replace(/ /g, '-')
}
