import React, { forwardRef } from 'react'
import cn from '../../utils/cn'

interface LeftSideProps {
  children?: React.ReactNode;
  className?: string;
}

const LeftSide = forwardRef<HTMLDivElement, LeftSideProps>(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('relative lg:max-h-[calc(100vh-(var(--header-height)))] text-gray-darkest',
        'flex-1 lg:overflow-hidden', className)}>
      {children}
    </div>
  )
});

export default LeftSide