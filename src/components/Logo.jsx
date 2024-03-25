import dark from '@/images/logos/dark/dbex-and-icon.png'
import light from '@/images/logos/light/dbex-and-icon.png'
import clsx from 'clsx'
import Image from 'next/image'

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