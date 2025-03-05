import cn from "../../utils/cn"

const Footer = () => {
  return (
    <footer className="bg-[#1E2631] text-gray-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
        <div>
          <h4 className="font-bold mb-4 text-white"><a href="#">HARMONY</a></h4>
          <p className="text-sm">Immersive sound. Minimalist design.</p>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">Products</h5>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors cursor-pointer">Speakers</li>
            <li className="hover:text-white transition-colors cursor-pointer">Headphones</li>
            <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">Support</h5>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
            <li className="hover:text-white transition-colors cursor-pointer">Warranty</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3 text-white">Connect</h5>
          <div className="flex space-x-4">
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
              </svg>
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </span>
          </div>
          <div className="mt-4 text-sm">

          </div>
        </div>
      </div>

      <div className={cn("container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 ",
        "text-center flex justify-center md:justify-between items-center pb-4",
        "flex-wrap ")}>
        <p>&copy; 2025 Harmony. All Rights Reserved.</p>
        <p className="text-sm text-gray-500">
          Design by Attila | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  )
}

export default Footer