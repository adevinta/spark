import { useEffect } from 'react'

interface A11yReportProps {
  of: string
}

/**
 * For now we only will display accessibility report
 * in browser console.
 * This component may evolve and display data in a more visible way.
 */
export const A11yReport = ({ of }: A11yReportProps) => {
  useEffect(() => {
    const fetchReport = async (name: string) => {
      const report = await fetch('/a11y-report.json')
        .then(response => response.json())
        .catch(() => console.error('Unable to find accessibility report'))

      console.log(`${name} accessibility report:`, report[name])
    }

    fetchReport(of)
  }, [of])
}
