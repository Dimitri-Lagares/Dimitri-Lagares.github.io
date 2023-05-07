import * as React from "react"
export const Bootstrap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M2.648 16.626c-.046 1.3.967 2.499 2.337 2.499h14.032c1.37 0 2.383-1.2 2.337-2.5-.043-1.248.013-2.867.42-4.186.409-1.323 1.098-2.16 2.226-2.267V8.953c-1.128-.107-1.817-.944-2.226-2.267-.407-1.32-.463-2.938-.42-4.187C21.4 1.2 20.386 0 19.017 0H4.985c-1.37 0-2.383 1.2-2.337 2.5.043 1.248-.013 2.866-.42 4.186-.41 1.323-1.1 2.16-2.228 2.267v1.219c1.128.107 1.819.944 2.227 2.267.408 1.32.464 2.938.42 4.187Z"
      />
      <g filter="url(#c)">
        <path
          fill="url(#d)"
          d="M12.52 4.479c2.218 0 3.553 1.085 3.553 2.876 0 1.353-.953 2.333-2.368 2.488v.056c1.04.17 1.856 1.135 1.856 2.214 0 1.536-1.213 2.537-3.062 2.537h-4.16V4.48h4.181ZM9.957 13.36h2.152c1.17 0 1.834-.522 1.834-1.467 0-1.008-.773-1.572-2.174-1.572H9.957v3.039Zm0-7.592v3.348h2.137c1.531 0 2.326-.564 2.326-1.664s-.773-1.684-2.232-1.684H9.957Z"
        />
        <path
          stroke="#fff"
          strokeWidth={0.047}
          d="M12.52 4.479c2.218 0 3.553 1.085 3.553 2.876 0 1.353-.953 2.333-2.368 2.488v.056c1.04.17 1.856 1.135 1.856 2.214 0 1.536-1.213 2.537-3.062 2.537h-4.16V4.48h4.181ZM9.957 13.36h2.152c1.17 0 1.834-.522 1.834-1.467 0-1.008-.773-1.572-2.174-1.572H9.957v3.039Zm0-7.592v3.348h2.137c1.531 0 2.326-.564 2.326-1.664s-.773-1.684-2.232-1.684H9.957Z"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={3.566}
        x2={24.538}
        y1={18.619}
        y2={1.971}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9013FE" />
        <stop offset={1} stopColor="#6610F2" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={9.071}
        x2={13.758}
        y1={13.981}
        y2={6.053}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F1E5FC" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 19.125h24V0H0z" />
      </clipPath>
      <filter
        id="c"
        width={9.281}
        height={11.719}
        x={7.566}
        y={3.893}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.188} />
        <feGaussianBlur stdDeviation={0.375} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_5" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_5"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)