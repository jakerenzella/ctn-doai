export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Capture the Narrative</h3>
            <p className="text-gray-400 text-sm">
              Australia's premier cybersecurity competition for high school students.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Competition</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Timeline
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>info@capturethenarrative.com</li>
              <li>Follow @CaptureNarrative</li>
              <li>#CaptureTheNarrative</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Capture the Narrative Competition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
