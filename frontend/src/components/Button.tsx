import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid'|'ghost' }
export default function Button({variant='solid', ...rest}:Props){
  const cls = variant==='ghost' ? 'btn ghost' : 'btn'
  return <button className={cls} {...rest} />
}