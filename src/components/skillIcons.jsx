function Icon({ children, viewBox = '0 0 24 24' }) {
  return (
    <svg viewBox={viewBox} aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

export function JavaIcon() {
  return (
    <Icon>
      <path
        fill="none"
        stroke="#5382A1"
        strokeWidth="1.4"
        strokeLinecap="round"
        d="M10 4c1.2 1.4 1.2 2.6 0 4M12.4 3.2c1.4 1.6 1.4 3.2 0 4.8"
      />
      <path fill="#E76F00" d="M7.2 10.2h8.2a4.1 4.1 0 0 1-8.2 0z" />
      <path
        fill="none"
        stroke="#E76F00"
        strokeWidth="1.4"
        d="M15.6 11.2h1.6a1.7 1.7 0 0 1 0 3.4h-1"
      />
      <path fill="#5382A1" d="M8.4 19.2h7.2c-1.1.9-3 1.4-3.6 1.4s-2.5-.5-3.6-1.4z" />
    </Icon>
  )
}

export function PythonIcon() {
  return (
    <Icon>
      <path
        fill="#3776AB"
        d="M12.1 2.2c-1.9 0-1.8.8-1.8 1.8v1.9h3.7v.3H8.1c-1.2 0-2.2 1-2.5 2.4-.3 1.5-.3 2.4 0 3.9.2 1.1 1 2 2.2 2h1.4V13c0-1.4 1.2-2.6 2.6-2.6h3.7c1.1 0 2-.9 2-2V6c0-1.1-.9-1.9-2-2.2-1.2-.3-2.4-.3-3.6-.3h-.8zm-1.1 1.3a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z"
      />
      <path
        fill="#FFD43B"
        d="M15.7 8.4v1.6c0 1.5-1.2 2.7-2.7 2.7H9.3c-1.1 0-2 .9-2 2.1v2.3c0 1.1.9 1.8 2 2.1 1.4.4 2.7.4 4.1 0 1-.3 2-1 2-2.1v-1.9h-3.6v-.3h5.6c1.2 0 1.8-1 2.1-2.4.3-1.6.3-2.6 0-4.1-.2-1.1-.9-2.1-2.1-2.1h-1.6zm-1.3 8.7a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z"
      />
    </Icon>
  )
}

export function CppIcon() {
  return (
    <Icon>
      <path fill="#00599C" d="M12 2 3.3 7v10L12 22l8.7-5V7L12 2z" />
      <path
        fill="#fff"
        d="M11.2 12.1c0 2.1 1.4 3.7 3.4 3.7.9 0 1.6-.2 2.2-.7l-.9-1.1c-.4.3-.8.5-1.3.5-1.1 0-1.9-.8-1.9-2.4s.8-2.4 1.9-2.4c.5 0 .9.2 1.3.5l.9-1.1c-.6-.5-1.3-.7-2.2-.7-2 0-3.4 1.6-3.4 3.7z"
      />
      <path fill="#fff" d="M16.4 11.3h.8v-.8h.7v.8h.8v.7h-.8v.8h-.7v-.8h-.8zm2.5 0h.8v-.8h.7v.8h.8v.7h-.8v.8h-.7v-.8h-.8z" />
    </Icon>
  )
}

export function HtmlIcon() {
  return (
    <Icon>
      <path fill="#E44D26" d="M4.1 2.2h15.8l-1.4 16.1L12 21.8 5.6 18.3 4.1 2.2z" />
      <path fill="#F16529" d="M12 4.1v16.2l5.2-1.4 1.2-14.8H12z" />
      <path fill="#EBEBEB" d="M7.8 7.2h4.2V5.6H6.1l.2 2.2 1.3 12.1L12 21v-1.7l-3.3-1.1-.7-7z" />
      <path fill="#fff" d="M12 7.2h4.1l.3-1.6H12V4h6.3l-.1.8-1.3 14.5L12 21v-1.7l3.3-1 .4-4.1H12V12.6h3.9l.3-1.8H12V7.2z" />
    </Icon>
  )
}

export function CssIcon() {
  return (
    <Icon>
      <path fill="#264DE4" d="M4.1 2.2h15.8l-1.4 16.1L12 21.8 5.6 18.3 4.1 2.2z" />
      <path fill="#2965F1" d="M12 4.1v16.2l5.2-1.4 1.2-14.8H12z" />
      <path fill="#EBEBEB" d="M7.6 7.1h8.8l-.3 2.1H9.8l.2 2h5.9l-.6 5.8L12 18.2l-3.3-1-.2-2.4h2l.1 1.1 1.4.4 1.4-.4.2-2.1H8.4l-.6-6.7z" />
    </Icon>
  )
}

export function JavaScriptIcon() {
  return (
    <Icon>
      <rect fill="#F7DF1E" x="3" y="3" width="18" height="18" rx="2" />
      <path fill="#000" d="M10.2 16.7c.2.4.5.8 1.1.8.6 0 1-.3 1-.9V10h1.6v6.6c0 1.7-1 2.5-2.5 2.5-1.3 0-2.1-.7-2.5-1.6l1.3-.6zm4.7.2c.3.6.8 1.1 1.7 1.1.7 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.3-1.2l-.4-.2c-1.2-.5-2-1.1-2-2.5 0-1.2 1-2.2 2.5-2.2 1.1 0 1.9.4 2.5 1.4l-1.2.8c-.3-.5-.6-.7-1.2-.7s-1 .3-1 .7c0 .5.3.7 1.2 1.1l.4.2c1.4.6 2.2 1.2 2.2 2.6 0 1.5-1.2 2.3-2.7 2.3-1.5 0-2.5-.7-3-1.8l1.1-.7z" />
    </Icon>
  )
}

export function MysqlIcon() {
  return (
    <Icon>
      <ellipse fill="#00758F" cx="12" cy="6.8" rx="6.4" ry="2.3" />
      <path fill="#00758F" d="M5.6 6.8v7.8c0 1.3 2.9 2.3 6.4 2.3s6.4-1 6.4-2.3V6.8" />
      <path fill="#00546C" d="M5.6 11c0 1.3 2.9 2.3 6.4 2.3s6.4-1 6.4-2.3" />
      <circle fill="#F29111" cx="9.2" cy="6.8" r="0.9" />
    </Icon>
  )
}

export function StatisticsIcon() {
  return (
    <Icon>
      <rect fill="#2EE6C5" x="4" y="13" width="3.2" height="7" rx="0.6" />
      <rect fill="#7FF0DC" x="10.4" y="8" width="3.2" height="12" rx="0.6" />
      <rect fill="#2EE6C5" x="16.8" y="4" width="3.2" height="16" rx="0.6" />
    </Icon>
  )
}

export function AnalyticsIcon() {
  return (
    <Icon>
      <path
        fill="none"
        stroke="#2EE6C5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16.5 9 11l3.5 3.5L20 7"
      />
      <circle fill="#2EE6C5" cx="20" cy="7" r="1.4" />
    </Icon>
  )
}

export function ExcelIcon() {
  return (
    <Icon>
      <rect fill="#185C37" x="3" y="4" width="18" height="16" rx="2" />
      <path fill="#21A366" d="M8 4h13v16H8z" />
      <path fill="#fff" d="M7.4 8.2 9.3 12l-2 3.8H9l1.2-2.5c.1-.2.2-.4.3-.6h.1c.1.2.2.4.3.6l1.2 2.5h1.7L11.8 12l2-3.8h-1.7L11 10.5c-.1.2-.2.5-.3.7h-.1c-.1-.2-.2-.5-.3-.7L9.1 8.2H7.4z" />
    </Icon>
  )
}

export function GitIcon() {
  return (
    <Icon>
      <path fill="#F05032" d="M21.4 11.1 12.9 2.6a2 2 0 0 0-2.8 0L8.3 4.4l2.9 2.9a2 2 0 0 1 2.5 2.5l2.8 2.8a2 2 0 1 1-1.1.9l-2.6-2.6v6.8a2 2 0 1 1-1.6 0V11.3a2 2 0 0 1-1.1-1.4L6.8 6.6 2.6 10.8a2 2 0 0 0 0 2.8l8.5 8.5a2 2 0 0 0 2.8 0l8.5-8.5a2 2 0 0 0 0-2.5z" />
    </Icon>
  )
}

export function GithubIcon() {
  return (
    <Icon>
      <path
        fill="#E6EDF3"
        d="M12 2.1a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2.1z"
      />
    </Icon>
  )
}

export function VscodeIcon() {
  return (
    <Icon>
      <path fill="#007ACC" d="m3.6 16.2 3.2 1.5 5.1-4.1 5.2 4.1 3.3-1.6V7.8L17.1 6.2l-5.2 4.1-5.1-4.1-3.2 1.6v8.4z" />
      <path fill="#1F9CF0" d="M17.1 6.2 20.4 7.8v8.4L17.1 17.8V6.2z" />
    </Icon>
  )
}

export function CursorIcon() {
  return (
    <Icon>
      <path fill="#E6EDF3" d="m5 4 14 8.1-6.2 1.4-3.2 6.1L5 4z" />
      <path fill="#2EE6C5" d="m12.8 13.5 3.2 6.1-6.4-7.5z" opacity="0.85" />
    </Icon>
  )
}

export function JupyterIcon() {
  return (
    <Icon>
      <circle fill="#F37626" cx="12" cy="5.2" r="2.1" />
      <circle fill="#9E9E9E" cx="6.2" cy="16.8" r="1.4" />
      <circle fill="#616161" cx="17.8" cy="16.2" r="1.8" />
      <path
        fill="none"
        stroke="#F37626"
        strokeWidth="1.6"
        d="M5 9.5c2.2-1.8 11.8-1.8 14 0"
      />
      <path
        fill="none"
        stroke="#F37626"
        strokeWidth="1.6"
        d="M5 13.8c2.2 1.8 11.8 1.8 14 0"
      />
    </Icon>
  )
}

export function ColabIcon() {
  return (
    <Icon>
      <circle fill="none" stroke="#F9AB00" strokeWidth="2.2" cx="8.2" cy="12" r="5" />
      <circle fill="none" stroke="#F9AB00" strokeWidth="2.2" cx="15.8" cy="12" r="5" />
    </Icon>
  )
}

export function WorkbenchIcon() {
  return (
    <Icon>
      <ellipse fill="#00758F" cx="10.2" cy="8" rx="5.4" ry="2" />
      <path fill="#0A8FBF" d="M4.8 8v3.6c0 1.1 2.4 2 5.4 2s5.4-.9 5.4-2V8c0 1.1-2.4 2-5.4 2s-5.4-.9-5.4-2z" />
      <path fill="#00758F" d="M4.8 12v3.4c0 1.1 2.4 2 5.4 2s5.4-.9 5.4-2V12c0 1.1-2.4 2-5.4 2s-5.4-.9-5.4-2z" />
      <path
        fill="#F29111"
        d="M16.2 11.2 18 13l1.6-1.6c.4.4.4 1 0 1.4l-1 1 2.1 2.1c.4.4.4 1 0 1.4l-.8.8c-.4.4-1 .4-1.4 0l-2.1-2.1-1 1c-.4.4-1 .4-1.4 0L12 15.4l1.8-1.8 2.4-2.4z"
      />
    </Icon>
  )
}

export function PowerBiIcon() {
  return (
    <Icon>
      <rect fill="#F2C811" x="5" y="13" width="3" height="7" rx="0.5" />
      <rect fill="#E6B800" x="10.5" y="9" width="3" height="11" rx="0.5" />
      <rect fill="#F2C811" x="16" y="4" width="3" height="16" rx="0.5" />
    </Icon>
  )
}
