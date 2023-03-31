import { IconProps } from '../Types'

export const ConversationFill = ({
  title,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 25 26"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M17.9294 7.48668V12.8323C17.9294 14.86 16.3007 16.5189 14.3101 16.5189H6.52876C6.39628 16.5189 6.3123 16.5683 6.20581 16.631C6.16683 16.6539 6.12484 16.6786 6.07635 16.7033L3.43431 18.6848C3.25335 18.8231 3 18.6941 3 18.4636V7.48668C3 5.45903 4.62866 3.80005 6.61924 3.80005H14.4006C16.3912 3.80005 17.9294 5.36687 17.9294 7.48668Z"/><path d="M19.5579 12.8323V9.51429C21.5485 9.60645 23.0867 11.2654 22.9962 13.2009V23.5235C22.9962 23.7447 22.7429 23.8829 22.5619 23.7447L20.1008 21.8645C20.0103 21.7723 19.8294 21.6802 19.6484 21.6802H12.4099C10.4193 21.6802 8.88117 20.1134 8.79069 18.1779H14.31C17.2054 18.1779 19.5579 15.7816 19.5579 12.8323Z"/>',
    }}
  />
)

export const tags = ['conversation-fill', 'contact']
