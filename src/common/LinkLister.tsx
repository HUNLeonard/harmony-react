import { Link } from '../data/navlinks'
import cn from '../utils/cn'

interface LinkListerProps {
  links: Link[],
  className?: string
}

const LinkLister = ({ links, className = "" }: LinkListerProps) => {
  return (
    <>
      {links.map(link => (
        <li key={link.name} className={cn(className)}>
          <a href={link.to}
            className={cn('relative',
              'inline-block hover:font-bold active:font-bold',
              'hover:scale-105 transition-all duration-200',
              'before:h-1 hover:before:w-[105%] before:w-0',
              "active:before:w-[105%]",
              'before:absolute before:top-full before:bg-primary',
              'before:transition-all before:duration-200 '
            )}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  )
}

export default LinkLister