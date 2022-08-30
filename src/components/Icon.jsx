import icon from '@/images/logos/db-logo-on-dark.png'
import Image from 'next/future/image'
import clsx from 'clsx'

export function Icon({
    className,
    width=48,
    height=24,
    ...props
  }) {
    return (
        <Image className={clsx("rounded-none ", className)} src={icon} alt="dbExpression" height={height} width={width} />
    )
}