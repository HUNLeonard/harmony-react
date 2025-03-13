import React, { forwardRef } from 'react'
import cn from '../../utils/cn'

interface RightSideProps {
  children?: React.ReactNode;
  className?: string;
}

const RightSide = forwardRef<HTMLDivElement, RightSideProps>(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative h-full w-full lg:flex-1 gap-4 xl:gap-8",
        "text-gray-darkest lg:max-h-[calc(100vh-(var(--header-height)))] text-xl", className)}>
      {children}
    </div>
  )
});

export default RightSide