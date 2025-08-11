import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white border-b-2 border-red-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CTN</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Capture the Narrative</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">
              About
            </a>
            <a href="#how-to-play" className="text-gray-700 hover:text-red-600 font-medium">
              How to Play
            </a>
            <a href="#prizes" className="text-gray-700 hover:text-red-600 font-medium">
              Prizes
            </a>
            <Button className=" rounded-none bg-red-600 hover:bg-red-700">Register now</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
