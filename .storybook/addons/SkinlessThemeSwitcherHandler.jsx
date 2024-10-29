import { memo, useEffect } from "react"

import { useGlobals } from "@storybook/manager-api"

export const SkinlessThemeSwitcherHandler = memo(function SkinlessThemeSwitcherHandler() {
  const [globals] = useGlobals()
  const theme = globals?.theme

  useEffect(() => {
    if (!theme) return

    const htmlElement = document.querySelector("html")
    if (htmlElement)  {
      htmlElement.setAttribute("data-theme", theme)
    }

    const iframe = document.querySelector("#storybook-preview-iframe")
    if (iframe) {
      const iframeHtmlElement = iframe.contentDocument?.documentElement
      iframeHtmlElement.setAttribute("data-theme", theme)
    }
  }, [theme])

  return null
})
