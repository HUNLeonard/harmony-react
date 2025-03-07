import React from 'react'
import cn from '../../utils/cn'


const LeftSide = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <div className={cn('relative lg:max-h-[calc(100vh-(var(--header-height)))] text-gray-darkest',
      'flex-1 lg:overflow-hidden', className)}>
      {children}
    </div>
  )
}

export default LeftSide