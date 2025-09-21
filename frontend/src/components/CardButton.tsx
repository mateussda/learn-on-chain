import { ButtonHTMLAttributes, CSSProperties } from 'react'

const baseStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer'
}

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function CardButton({
  className = '',
  style,
  type,
  children,
  ...rest
}: Props) {
  return (
    <button
      type={type ?? 'button'}
      className={`card${className ? ` ${className}` : ''}`}
      style={{ ...baseStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  )
}
