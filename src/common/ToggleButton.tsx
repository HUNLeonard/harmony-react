import cn from '../utils/cn'

interface ToggleButtonProps { value: boolean, toggle: () => void }

const ToggleButton = ({ value, toggle }: ToggleButtonProps) => {
  return (
    <button
      onClick={toggle}
      className={cn('absolute left-1/2 -translate-x-1/2 w-16 xs:w-24 h-8 xs:h-12',
        'z-30 bottom-[7%] rounded-4xl border-2 transition-all duration-400 cursor-pointer',
        value ? 'bg-gray-medium border-gray-light' : 'bg-gray-light border-gray-medium',
        'p-1 xs:p-2'
      )}
    >
      <div className={cn('h-full aspect-square  rounded-full',
        value ? 'ml-8 xs:ml-12 bg-gray-light' : "ml-0 bg-gray-dark",
        'transition-all duration-400'
      )}
      ></div>
    </button>
  )
}

export default ToggleButton