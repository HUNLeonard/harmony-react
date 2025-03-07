import React from 'react'
import cn from '../../utils/cn'

const RightSide = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("relative h-full w-full lg:flex-1 gap-4 xl:gap-8",
      "text-gray-darkest lg:max-h-[calc(100vh-(var(--header-height)))] text-xl", className)}>
      {children}
    </div>
  )
}

export default RightSide