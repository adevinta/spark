import { Callout } from '@docs/helpers/Callout'
import type { Report } from 'e2e/a11y/utils'
import { useEffect, useState } from 'react'

export const A11yReport = ({ of }: { of: string }) => {
  const [errors, setErrors] = useState<Report['violations']>([])

  useEffect(() => {
    const fetchReport = async (name: string) => {
      const { violations }: Report = await fetch(`/a11y/a11y-report-${name}.json`)
        .then(response => response.json())
        .then(data => data[`@spark-ui/${name}`])
        .catch(() => console.error('Unable to find accessibility report'))

      if (violations.length) setErrors(violations)
    }

    fetchReport(of)
  }, [of])

  return errors.length ? (
    <Callout kind="error" marginY="large">
      <p>
        This component didn&apos;t pass all tests for <strong>WCAG 2.0 levels A and AA</strong>,{' '}
        <strong>WCAG 2.1 levels A and AA</strong> and for common accessibility best practices.
      </p>

      <ul className="mt-md list-disc pl-xl">
        {errors.map(error => (
          <li key={error.id} className="mt-sm text-caption first:mt-none">
            <span className="block">
              <strong>
                {error.description}&nbsp;[{error.impact}]
              </strong>
            </span>
            <span className="block">{error.help}</span>
          </li>
        ))}
      </ul>
    </Callout>
  ) : (
    <Callout kind="success" marginY="large">
      <p>
        This component has been successfully tested for <strong>WCAG 2.0 levels A and AA</strong>,{' '}
        <strong>WCAG 2.1 levels A and AA</strong> and for common accessibility best practices.
      </p>
    </Callout>
  )
}
