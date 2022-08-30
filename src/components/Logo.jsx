import dark from '@/images/logos/dark/dbex-and-icon.png'
import light from '@/images/logos/light/dbex-and-icon.png'
import Image from 'next/future/image'
import clsx from 'clsx'

export function Logo({
    className,
    width=48,
    height=24,
    isDark = false,
    ...props
  }) {
    return (
        <Image className={clsx("rounded-none border-none", className)} src={(isDark ? dark : light)} alt="dbExpression" height={height} width={width} />
    )
}