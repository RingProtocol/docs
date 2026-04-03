import React, { FC } from 'react'

import cn from 'classnames'

export const ThickX: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.24264 2.48528C5.92893 1.17157 3.79899 1.17157 2.48528 2.48528C1.17157 3.79899 1.17157 5.92893 2.48528 7.24264L6.0533 10.8107C6.71016 11.4675 6.71016 12.5325 6.0533 13.1893L2.48528 16.7574C1.17157 18.0711 1.17157 20.201 2.48528 21.5147C3.79899 22.8284 5.92893 22.8284 7.24264 21.5147L10.8107 17.9467C11.4675 17.2898 12.5325 17.2898 13.1893 17.9467L16.7574 21.5147C18.0711 22.8284 20.201 22.8284 21.5147 21.5147C22.8284 20.201 22.8284 18.0711 21.5147 16.7574L17.9467 13.1893C17.2898 12.5325 17.2898 11.4675 17.9467 10.8107L21.5147 7.24264C22.8284 5.92893 22.8284 3.79899 21.5147 2.48528C20.201 1.17157 18.0711 1.17157 16.7574 2.48528L13.1893 6.0533C12.5325 6.71016 11.4675 6.71016 10.8107 6.0533L7.24264 2.48528Z"
        fill="#4981FF"
      />
    </svg>
  )
}

export const Globe: FC<{
  className?: string
  color: 'orange-vibrant' | 'brown-vibrant' | 'pink-vibrant' | 'neutral-1'
}> = ({ className, color }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.55351 8.50001C4.65351 10.5533 5.34684 12.6467 6.55351 14.5067C3.72684 13.88 1.57352 11.46 1.35352 8.50001H4.55351ZM6.55351 1.49334C3.72684 2.12 1.57352 4.54001 1.35352 7.50001H4.55351C4.65351 5.44668 5.34684 3.35334 6.55351 1.49334ZM8.13352 1.33334H7.86684L7.66685 1.62001C6.40018 3.42001 5.66017 5.48668 5.55351 7.50001H10.4469C10.3402 5.48668 9.60018 3.42001 8.33352 1.62001L8.13352 1.33334ZM5.55351 8.50001C5.66017 10.5133 6.40018 12.58 7.66685 14.38L7.86684 14.6667H8.13352L8.33352 14.38C9.60018 12.58 10.3402 10.5133 10.4469 8.50001H5.55351ZM11.4469 8.50001C11.3469 10.5533 10.6535 12.6467 9.44686 14.5067C12.2735 13.88 14.4269 11.46 14.6469 8.50001H11.4469ZM14.6469 7.50001C14.4269 4.54001 12.2735 2.12 9.44686 1.49334C10.6535 3.35334 11.3469 5.44668 11.4469 7.50001H14.6469Z"
        className={cn({
          'fill-light-orange-vibrant dark:fill-dark-orange-vibrant': color === 'orange-vibrant',
          'fill-light-brown-vibrant dark:fill-dark-brown-vibrant': color === 'brown-vibrant',
          'fill-light-pink-vibrant dark:fill-dark-pink-vibrant': color === 'pink-vibrant',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
    </svg>
  )
}

export const Hexagon: FC<{ className?: string; color?: 'green' }> = ({ className, color = 'green' }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.59449 5.16974C3.61343 5.71038 3 6.76995 3 7.92393V16.0761C3 17.23 3.61343 18.2896 4.59449 18.8303L10.5945 22.1367C11.4735 22.6211 12.5265 22.6211 13.4055 22.1367L19.4055 18.8303C20.3866 18.2896 21 17.23 21 16.0761V7.92393C21 6.76996 20.3866 5.71038 19.4055 5.16974L13.4055 1.86331C12.5265 1.3789 11.4735 1.3789 10.5945 1.86331L4.59449 5.16974ZM6.18914 11.3118C5.93708 11.7357 5.93694 12.2644 6.18878 12.6884L8.63197 16.8015C8.8732 17.2076 9.3093 17.4561 9.77988 17.4556L14.2223 17.4507C14.6917 17.4502 15.1264 17.202 15.3671 16.7969L17.811 12.685C18.063 12.2611 18.063 11.7324 17.811 11.3084L15.3681 7.19817C15.1268 6.79223 14.6908 6.54387 14.2204 6.54439L9.77747 6.54929C9.30819 6.5498 8.87363 6.7979 8.63286 7.20276L6.18914 11.3118Z"
        className={cn({
          'fill-green-base dark:fill-green-vibrant': color === 'green',
        })}
      />
    </svg>
  )
}

export const BookOpen: FC<{ className?: string; color?: 'accent-1' }> = ({ className, color = 'accent-1' }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3.5471V12.2204C14 12.4404 13.7867 12.5938 13.5667 12.5338C11.9774 12.0812 10.382 12.0791 8.79134 12.8725C8.65734 12.9391 8.49935 12.8485 8.49935 12.6985V3.90249C8.49935 3.85782 8.51339 3.81316 8.53939 3.77716C8.95472 3.20716 9.59736 2.81046 10.346 2.71979C11.554 2.57312 12.7154 2.71984 13.8094 3.24184C13.9261 3.29718 14 3.41843 14 3.5471ZM5.65332 2.72044C4.44532 2.57377 3.28394 2.72049 2.18994 3.24249C2.07394 3.29783 2 3.41917 2 3.54783V12.2212C2 12.4412 2.21327 12.5945 2.43327 12.5345C4.0226 12.0818 5.61799 12.0798 7.20866 12.8731C7.34266 12.9398 7.50065 12.8491 7.50065 12.6991V3.90314C7.50065 3.85847 7.48661 3.81381 7.46061 3.77781C7.04461 3.20781 6.40265 2.81111 5.65332 2.72044Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
        })}
      />
    </svg>
  )
}

export const ArrowRight: FC<{
  className?: string
  color?: 'accent-1'
}> = ({ className, color = 'accent-1' }) => {
  return (
    <svg className={className} viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33325 14.0003C3.33325 13.5401 3.70635 13.167 4.16659 13.167L13.8214 13.167L9.41066 8.75625C9.08523 8.43081 9.08523 7.90317 9.41066 7.57774C9.7361 7.2523 10.2637 7.2523 10.5892 7.57774L16.4225 13.4111C16.7479 13.7365 16.7479 14.2641 16.4225 14.5896L10.5892 20.4229C10.2637 20.7484 9.7361 20.7484 9.41066 20.4229C9.08523 20.0975 9.08523 19.5698 9.41066 19.2444L13.8214 14.8337L4.16659 14.8337C3.70635 14.8337 3.33325 14.4606 3.33325 14.0003Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
        })}
      />
    </svg>
  )
}

export const MiniUnicon: FC<{
  className?: string
  color?: 'accent-1' | 'neutral-1'
}> = ({ className, color = 'accent-1' }) => {
  return (
    <svg className={cn('MiniUnicon', className)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="miniUniconGradient" x1="0" y1="96" x2="96" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF6AD5" />
          <stop offset="100%" stopColor="#7C88FF" />
        </linearGradient>
      </defs>
      {color === 'neutral-1' ? (
        <>
          <circle
            cx="48"
            cy="56"
            r="28"
            fill="none"
            strokeWidth="10"
            className={cn('stroke-light-neutral-1 dark:stroke-dark-neutral-1')}
          />
          <rect
            x="64"
            y="8"
            width="16"
            height="6"
            rx="3"
            className={cn('fill-light-neutral-1 dark:fill-dark-neutral-1')}
            transform="rotate(-30 72 11)"
          />
        </>
      ) : (
        <>
          <circle cx="48" cy="56" r="28" fill="none" stroke="url(#miniUniconGradient)" strokeWidth="10" />
          <rect
            x="64"
            y="8"
            width="16"
            height="6"
            rx="3"
            fill="url(#miniUniconGradient)"
            transform="rotate(-30 72 11)"
          />
        </>
      )}
    </svg>
  )
}

export const Emblem1: FC<{
  className?: string
  color?: 'accent-1'
}> = ({ className, color = 'accent-1' }) => {
  return (
    <svg
      className={cn(
        {
          'text-light-accent-1 dark:text-dark-accent-1': color === 'accent-1',
        },
        className,
      )}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.5" cy="9" r="5.25" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="9.5" cy="9" r="2.25" fill="currentColor" fillOpacity="0.28" />
      <circle cx="14.5" cy="4" r="1.6" fill="currentColor" />
      <path d="M12.6 5.9L13.7 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export const Emblem2: FC<{
  className?: string
  color?: 'accent-1'
}> = ({ className, color = 'accent-1' }) => {
  return (
    <svg
      className={cn(
        {
          'text-light-accent-1 dark:text-dark-accent-1': color === 'accent-1',
        },
        className,
      )}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="9" r="2.2" fill="currentColor" />
      <circle cx="14" cy="5" r="2.2" fill="currentColor" fillOpacity="0.8" />
      <circle cx="14" cy="13" r="2.2" fill="currentColor" fillOpacity="0.45" />
      <path d="M6.9 8.2L12 5.8M6.9 9.8L12 12.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export const Github: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 15.99 18.4 19.36 14.81 20.55C14.38 20.62 14.23 20.35 14.23 20.12C14.23 19.82 14.24 18.85 14.24 17.65C14.24 16.81 13.95 16.26 13.63 15.98C15.63 15.76 17.74 15 17.74 11.54C17.74 10.56 17.39 9.76 16.81 9.13C16.91 8.9 17.22 7.97999 16.73 6.73999C16.73 6.73999 15.97 6.50001 14.25 7.67001C13.53 7.47001 12.76 7.36999 12 7.35999C11.23 7.36999 10.46 7.47001 9.75 7.67001C8.03 6.50001 7.27002 6.73999 7.27002 6.73999C6.78002 7.97999 7.08999 8.9 7.17999 9.13C6.60999 9.76 6.26001 10.56 6.26001 11.54C6.26001 14.99 8.35999 15.76 10.36 15.99C10.1 16.21 9.86998 16.61 9.78998 17.19C9.26998 17.42 7.96998 17.82 7.16998 16.44C7.16998 16.44 6.68998 15.58 5.78998 15.52C5.78998 15.52 4.90998 15.51 5.72998 16.06C5.72998 16.06 6.31998 16.34 6.72998 17.38C6.72998 17.38 7.25001 18.99 9.76001 18.44C9.76001 19.19 9.77002 19.9 9.77002 20.12C9.77002 20.34 9.61 20.62 9.19 20.55C5.6 19.37 3 15.99 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"
        className={cn('transition-all', {
          'fill-light-neutral-2 group-hover:fill-light-neutral-1 dark:fill-dark-neutral-2 group-hover:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const X: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.1682 4H19.9268L13.9001 10.8881L20.99 20.2613H15.4386L11.0906 14.5765L6.1155 20.2613H3.35525L9.80139 12.8937L3 4H8.69229L12.6225 9.19611L17.1682 4ZM16.2 18.6102H17.7286L7.86171 5.56442H6.22141L16.2 18.6102Z"
        className={cn('transition-all', {
          'fill-light-neutral-2 group-hover:fill-light-neutral-1 dark:fill-dark-neutral-2 group-hover:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Discord: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.95 6.26001C17.65 5.67001 16.26 5.24 14.82 5C14.64 5.31 14.44 5.73 14.3 6.06C12.76 5.84 11.24 5.84 9.72001 6.06C9.58001 5.73 9.37002 5.31 9.20002 5C7.75002 5.24 6.36001 5.67001 5.07001 6.26001C2.45001 10.08 1.74001 13.81 2.10001 17.49C3.84001 18.74 5.52002 19.5 7.17002 20C7.57002 19.46 7.94 18.88 8.25 18.27C7.65 18.05 7.08001 17.78 6.54001 17.46C6.68001 17.36 6.82002 17.25 6.95002 17.14C10.24 18.63 13.82 18.63 17.07 17.14C17.21 17.25 17.34 17.36 17.48 17.46C16.94 17.78 16.37 18.05 15.77 18.27C16.08 18.88 16.45 19.46 16.85 20C18.5 19.5 20.19 18.74 21.92 17.49C22.36 13.23 21.23 9.53001 18.97 6.26001H18.95ZM8.68 15.17C7.69 15.17 6.88001 14.27 6.88001 13.17C6.88001 12.07 7.67 11.17 8.68 11.17C9.69 11.17 10.5 12.07 10.48 13.17C10.48 14.27 9.68 15.17 8.68 15.17ZM15.32 15.17C14.33 15.17 13.52 14.27 13.52 13.17C13.52 12.07 14.31 11.17 15.32 11.17C16.33 11.17 17.14 12.07 17.12 13.17C17.12 14.27 16.33 15.17 15.32 15.17Z"
        className={cn('transition-all', {
          'fill-light-neutral-2 group-hover:fill-light-neutral-1 dark:fill-dark-neutral-2 group-hover:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Sun: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
        d="M11 8C11 9.654 9.654 11 8 11C6.346 11 5 9.654 5 8C5 6.346 6.346 5 8 5C9.654 5 11 6.346 11 8ZM8.5 3.33333V2C8.5 1.724 8.276 1.5 8 1.5C7.724 1.5 7.5 1.724 7.5 2V3.33333C7.5 3.60933 7.724 3.83333 8 3.83333C8.276 3.83333 8.5 3.60933 8.5 3.33333ZM8.5 14V12.6667C8.5 12.3907 8.276 12.1667 8 12.1667C7.724 12.1667 7.5 12.3907 7.5 12.6667V14C7.5 14.276 7.724 14.5 8 14.5C8.276 14.5 8.5 14.276 8.5 14ZM3.83333 8C3.83333 7.724 3.60933 7.5 3.33333 7.5H2C1.724 7.5 1.5 7.724 1.5 8C1.5 8.276 1.724 8.5 2 8.5H3.33333C3.60933 8.5 3.83333 8.276 3.83333 8ZM14.5 8C14.5 7.724 14.276 7.5 14 7.5H12.6667C12.3907 7.5 12.1667 7.724 12.1667 8C12.1667 8.276 12.3907 8.5 12.6667 8.5H14C14.276 8.5 14.5 8.276 14.5 8ZM5.054 5.054C5.24933 4.85866 5.24933 4.54199 5.054 4.34666L4.11133 3.40399C3.91599 3.20866 3.59933 3.20866 3.40399 3.40399C3.20866 3.59933 3.20866 3.91599 3.40399 4.11133L4.34666 5.054C4.44399 5.15133 4.57199 5.20066 4.69999 5.20066C4.82799 5.20066 4.956 5.15133 5.054 5.054ZM12.596 12.596C12.7913 12.4007 12.7913 12.084 12.596 11.8887L11.6533 10.946C11.458 10.7507 11.1413 10.7507 10.946 10.946C10.7507 11.1413 10.7507 11.458 10.946 11.6533L11.8887 12.596C11.986 12.6933 12.114 12.7427 12.242 12.7427C12.37 12.7427 12.4987 12.694 12.596 12.596ZM4.11133 12.596L5.054 11.6533C5.24933 11.458 5.24933 11.1413 5.054 10.946C4.85866 10.7507 4.54199 10.7507 4.34666 10.946L3.40399 11.8887C3.20866 12.084 3.20866 12.4007 3.40399 12.596C3.50133 12.6933 3.62932 12.7427 3.75732 12.7427C3.88532 12.7427 4.01333 12.694 4.11133 12.596ZM11.6533 5.054L12.596 4.11133C12.7913 3.91599 12.7913 3.59933 12.596 3.40399C12.4007 3.20866 12.084 3.20866 11.8887 3.40399L10.946 4.34666C10.7507 4.54199 10.7507 4.85866 10.946 5.054C11.0433 5.15133 11.1713 5.20066 11.2993 5.20066C11.4273 5.20066 11.5553 5.15133 11.6533 5.054Z"
      />
    </svg>
  )
}

export const Menu: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 5.448 2.448 5 3 5H21C21.552 5 22 5.448 22 6C22 6.552 21.552 7 21 7H3C2.448 7 2 6.552 2 6ZM21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17Z"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Moon: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
        d="M8.75534 1.33337C8.75734 1.33337 8.76001 1.33337 8.76201 1.33337C8.97468 1.33337 9.06667 1.59538 8.90667 1.73338C7.786 2.69804 7.17002 4.2147 7.48402 5.84937C7.83268 7.66337 9.32535 9.04403 11.182 9.29203C12.3547 9.4487 13.4407 9.15203 14.304 8.55937C14.4793 8.4387 14.712 8.59804 14.6594 8.80204C13.9234 11.6794 11.084 13.73 7.84467 13.268C5.15401 12.884 3.02935 10.7247 2.71068 8.06337C2.54402 6.67537 2.85933 5.36738 3.51333 4.28005C4.57333 2.51605 6.52401 1.33337 8.75534 1.33337Z"
      />
    </svg>
  )
}

export const Npm: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="256px"
      height="256px"
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <polygon fill="#C12127" points="0 256 0 0 256 0 256 256"></polygon>
        <polygon fill="#FFFFFF" points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"></polygon>
      </g>
    </svg>
  )
}

export const Edit: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon">
        <path
          id="Vector"
          d="M10.6667 14.5001H4C2.388 14.5001 1.5 13.6121 1.5 12.0001V5.33348C1.5 3.72148 2.388 2.83348 4 2.83348H6C6.276 2.83348 6.5 3.05748 6.5 3.33348C6.5 3.60948 6.276 3.83348 6 3.83348H4C2.94867 3.83348 2.5 4.28215 2.5 5.33348V12.0001C2.5 13.0515 2.94867 13.5001 4 13.5001H10.6667C11.718 13.5001 12.1667 13.0515 12.1667 12.0001V10.0001C12.1667 9.72415 12.3907 9.50015 12.6667 9.50015C12.9427 9.50015 13.1667 9.72415 13.1667 10.0001V12.0001C13.1667 13.6121 12.2787 14.5001 10.6667 14.5001ZM13.72 3.35348L12.6466 2.28016C12.2666 1.90682 11.66 1.90681 11.28 2.28681L10.38 3.19349L12.8067 5.62014L13.7133 4.72014C14.0933 4.34014 14.0933 3.73348 13.72 3.35348ZM9.67334 3.90015L5.33333 8.26016V10.6668H7.73999L12.1 6.32681L9.67334 3.90015Z"
          className={cn({
            'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/edit-icon:fill-light-neutral-1 group-hover/edit-icon:dark:fill-dark-neutral-1':
              color === 'neutral-2',
          })}
        />
      </g>
    </svg>
  )
}

export const HelpCircle: FC<{
  className?: string
  color?: 'orange-vibrant' | 'blue-vibrant' | 'green-base' | 'pink-vibrant'
}> = ({ className, color = 'orange-vibrant' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.02 17.5C11.468 17.5 11.0149 17.052 11.0149 16.5C11.0149 15.948 11.458 15.5 12.01 15.5H12.02C12.573 15.5 13.02 15.948 13.02 16.5C13.02 17.052 12.572 17.5 12.02 17.5ZM13.603 12.5281C12.872 13.0181 12.7359 13.291 12.7109 13.363C12.6059 13.676 12.314 13.874 12 13.874C11.921 13.874 11.841 13.862 11.762 13.835C11.369 13.703 11.1581 13.278 11.2891 12.885C11.4701 12.345 11.9391 11.836 12.7671 11.281C13.7881 10.597 13.657 9.84707 13.614 9.60107C13.501 8.94707 12.95 8.38988 12.303 8.27588C11.811 8.18588 11.3301 8.31488 10.9541 8.62988C10.5761 8.94688 10.3589 9.41391 10.3589 9.90991C10.3589 10.3239 10.0229 10.6599 9.60889 10.6599C9.19489 10.6599 8.85889 10.3239 8.85889 9.90991C8.85889 8.96891 9.27099 8.08396 9.98999 7.48096C10.702 6.88496 11.639 6.63605 12.564 6.80005C13.831 7.02405 14.8701 8.07097 15.0911 9.34497C15.3111 10.607 14.782 11.7381 13.603 12.5281Z"
        className={cn({
          'fill-light-orange-vibrant dark:fill-dark-orange-vibrant': color === 'orange-vibrant',
          'fill-light-blue-vibrant dark:fill-dark-blue-vibrant': color === 'blue-vibrant',
          'fill-light-green-base dark:fill-dark-green-base': color === 'green-base',
          'fill-light-pink-vibrant dark:fill-dark-pink-vibrant': color === 'pink-vibrant',
        })}
      />
    </svg>
  )
}

export const Happy: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/positive:stroke-light-neutral-1 group-hover/positive:dark:stroke-dark-neutral-1 group-[.selected]/positive:fill-light-status-success-1 group-[.selected]/positive:dark:fill-dark-status-success-1 group-[.selected]/positive:stroke-light-neutral-1 group-[.selected]/positive:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/positive:fill-light-neutral-1 group-hover/positive:dark:fill-dark-neutral-1 group-[.selected]/positive:fill-light-neutral-1 group-[.selected]/positive:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <circle
        cx="13"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/positive:fill-light-neutral-1 group-hover/positive:dark:fill-dark-neutral-1 group-[.selected]/positive:fill-light-neutral-1 group-[.selected]/positive:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <path
        d="M6 12C6 12 7.29032 14 10 14C12.7097 14 14 12 14 12"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/positive:stroke-light-neutral-1 group-hover/positive:dark:stroke-dark-neutral-1 group-[.selected]/positive:stroke-light-neutral-1 group-[.selected]/positive:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const Chat: FC<{
  className?: string
  color?: 'brown-vibrant'
}> = ({ className, color = 'brown-vibrant' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.8789 20.394C21.1189 20.594 20.9789 20.994 20.6689 20.994C19.6389 21.034 18.0591 20.894 17.0891 19.864C16.2991 20.144 15.419 20.2841 14.499 20.2841C12.481 20.2841 10.686 19.607 9.49902 18.368C9.31002 18.17 9.35802 17.785 9.79102 17.819C10.024 17.835 10.259 17.844 10.499 17.844C15.119 17.844 18.614 15.143 19.353 11.235C19.403 10.973 19.7291 10.886 19.8931 11.097C20.5931 12.003 20.998 13.1481 20.998 14.5031C20.998 16.0331 20.4679 17.314 19.5879 18.264C19.6989 18.964 20.0889 19.754 20.8789 20.394ZM17.998 9.67102C17.998 9.62402 17.992 9.58103 17.991 9.53503C17.917 5.44903 14.594 3 10.499 3C6.35802 3 3 5.50202 3 9.67102C3 11.439 3.608 12.915 4.625 14.015C4.5 14.816 4.05009 15.733 3.14209 16.467C2.86709 16.7 3.02503 17.159 3.38403 17.167C4.56703 17.209 6.39203 17.05 7.50903 15.858C7.73703 15.937 7.97094 16.006 8.21094 16.066C8.93194 16.247 9.69998 16.3409 10.501 16.3409C14.64 16.3419 17.998 13.84 17.998 9.67102Z"
        className={cn({
          'fill-light-brown-vibrant dark:fill-dark-brown-vibrant': color === 'brown-vibrant',
        })}
      />
    </svg>
  )
}

export const Neutral: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/neutral:stroke-light-neutral-1 group-hover/neutral:dark:stroke-dark-neutral-1 group-[.selected]/neutral:fill-light-status-warning-1 group-[.selected]/neutral:dark:fill-dark-status-warning-1 group-[.selected]/neutral:stroke-light-neutral-1 group-[.selected]/neutral:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/neutral:fill-light-neutral-1 group-hover/neutral:dark:fill-dark-neutral-1 group-[.selected]/neutral:fill-light-neutral-1 group-[.selected]/neutral:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <circle
        cx="13"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/neutral:fill-light-neutral-1 group-hover/neutral:dark:fill-dark-neutral-1 group-[.selected]/neutral:fill-light-neutral-1 group-[.selected]/neutral:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <path
        d="M7 13C7 13 7.96774 13 10 13C12.0323 13 13 13 13 13"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/neutral:stroke-light-neutral-1 group-hover/neutral:dark:stroke-dark-neutral-1 group-[.selected]/neutral:stroke-light-neutral-1 group-[.selected]/neutral:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const Envelope: FC<{
  className?: string
  color?: 'pink-vibrant' | 'neutral-2'
}> = ({ className, color = 'pink-vibrant' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 5H6C4 5 3 6 3 8V17C3 19 4 20 6 20H18C20 20 21 19 21 17V8C21 6 20 5 18 5ZM17.9409 9.606L13.0291 13.178C12.7211 13.402 12.36 13.514 12 13.514C11.64 13.514 11.2779 13.402 10.9709 13.179L6.05908 9.606C5.72408 9.363 5.65004 8.893 5.89404 8.558C6.13704 8.224 6.60389 8.14801 6.94189 8.39301L11.854 11.965C11.942 12.028 12.059 12.029 12.147 11.965L17.0591 8.39301C17.3961 8.14801 17.8639 8.224 18.1069 8.558C18.3509 8.894 18.2759 9.363 17.9409 9.606Z"
        className={cn({
          'fill-light-pink-vibrant dark:fill-dark-pink-vibrant': color === 'pink-vibrant',
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Sad: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/negative:stroke-light-neutral-1 group-hover/negative:dark:stroke-dark-neutral-1 group-[.selected]/negative:fill-light-status-critical-1 group-[.selected]/negative:dark:fill-dark-status-critical-1 group-[.selected]/negative:stroke-light-neutral-1 group-[.selected]/negative:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/negative:fill-light-neutral-1 group-hover/negative:dark:fill-dark-neutral-1 group-[.selected]/negative:fill-light-neutral-1 group-[.selected]/negative:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <circle
        cx="13"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/negative:fill-light-neutral-1 group-hover/negative:dark:fill-dark-neutral-1 group-[.selected]/negative:fill-light-neutral-1 group-[.selected]/negative:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <path
        d="M14 13C14 13 12.7097 11 10 11C7.29032 11 6 13 6 13"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/negative:stroke-light-neutral-1 group-hover/negative:dark:stroke-dark-neutral-1 group-[.selected]/negative:stroke-light-neutral-1 group-[.selected]/negative:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export type Icon = 'sun' | 'moon'

export const IconMap: FC<{
  icon: Icon
  className?: string
  color?: 'neutral-2'
}> = ({ icon, color, className }) => {
  switch (icon) {
    case 'sun':
      return <Sun color={color} className={className} />
    case 'moon':
      return <Moon color={color} className={className} />
    default:
      console.warn(`Icon ${icon} not found`)
      return null
  }
}
