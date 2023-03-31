import { IconProps } from '../Types'

export const VoiceOffFill = ({
  title,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path d="M18.8739 11.8457C18.2942 11.8457 17.8801 12.2607 17.8801 12.8416C17.8801 13.5055 17.7145 14.1694 17.4661 14.8333C17.2176 15.4972 16.8035 16.0781 16.3066 16.493C15.8098 16.908 15.23 17.3229 14.6503 17.6548C13.9878 17.9038 13.3253 18.0698 12.6628 18.0698H11.2549C11.0065 18.0698 10.8408 18.0698 10.5924 18.0698C10.0127 18.0698 9.59859 18.4847 9.51578 18.9826C9.51578 19.5635 9.92986 19.9785 10.4267 20.0615C10.5924 20.0615 10.758 20.0615 10.9236 20.0615V21.8042C10.9236 22.3851 11.3377 22.8 11.9174 22.8C12.4971 22.8 12.9112 22.3851 12.9112 21.8042V20.0615C13.7394 20.0615 14.5675 19.8125 15.3957 19.5635C16.3066 19.2316 17.052 18.6507 17.7145 17.9868C18.377 17.3229 18.8739 16.493 19.288 15.6631C19.6193 14.7503 19.8677 13.8374 19.8677 12.9246C19.8677 12.2607 19.4536 11.8457 18.8739 11.8457Z"/><path d="M13.4077 16.244C13.5733 16.244 13.6561 16.244 13.8218 16.161 14.8156 15.746 15.6437 14.9162 16.0578 13.9203 16.3062 13.4224 16.0578 12.8415 15.5609 12.5925 15.064 12.3436 14.4843 12.5925 14.2358 13.0905 13.9874 13.6714 13.5733 14.0863 12.9936 14.3353 12.4967 14.5842 12.2483 15.1651 12.4967 15.6631 12.6624 16.078 12.9936 16.244 13.4077 16.244ZM21.6894 3.132C21.2753 2.71706 20.6956 2.71706 20.2815 3.132L16.472 6.94941C16.3892 5.87058 15.9751 4.87473 15.147 4.12785 14.3188 3.29797 13.1594 2.80005 12 2.80005 10.8406 2.88304 9.76395 3.29797 8.9358 4.12785 8.10764 4.95772 7.61075 6.11954 7.61075 7.28136V12.0946C7.61075 12.7585 7.77638 13.5054 8.10764 14.0863 8.27327 14.3353 8.4389 14.5842 8.60454 14.8332L7.3623 16.078C7.11386 15.7461 6.86541 15.3311 6.61696 14.9162 6.2857 14.2523 6.12007 13.5054 6.12007 12.7585 6.12007 12.1776 5.70599 11.7627 5.12628 11.7627 4.54658 11.7627 4.1325 12.1776 4.1325 12.7585 4.1325 13.7544 4.38095 14.8332 4.79502 15.7461 5.04347 16.327 5.45755 16.9079 5.87162 17.4058L2.31056 20.9743C1.89648 21.3892 1.89648 21.9701 2.31056 22.3851 2.47619 22.551 2.72464 22.717 2.97308 22.717 3.22153 22.717 3.46997 22.634 3.63561 22.3851L10.5093 15.4971 21.6894 4.54278C22.1035 4.12785 22.1035 3.54693 21.6894 3.132Z"/>',
    }}
  />
)

export const tags = ['voice-off-fill', 'contact']
