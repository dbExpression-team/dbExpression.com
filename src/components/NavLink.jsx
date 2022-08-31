import Link from 'next/link'
import clsx from 'clsx'

export function NavLink({ href, className, children }) {
  return (
    <Link
      href={href}
      className={clsx("inline-block rounded-lg py-1 px-2 text-sm text-slate-400 hover:text-slate-100 hover:underline hover:decoration-2", className)}
    >
      {children}
    </Link>
  )
}
