import { Button } from "@/components/ui/button";
import { LiveTicker } from "./live-ticker";

export function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs font-dm-serif">CTN</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 font-dm-serif">
              Capture the Narrative
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6 font-sans uppercase">
            <a href="#about" className="font-bold hover:text-red-600 ">
              About
            </a>
            <a href="#how-to-play" className="font-bold hover:text-red-600 ">
              How to play
            </a>
            <a href="#timeline" className="font-bold hover:text-red-600 ">
              Timeline
            </a>
            <Button className="font-bold rounded-none bg-red-600 hover:bg-red-900">
              Register now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
