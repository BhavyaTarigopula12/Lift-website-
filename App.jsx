import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/services'
import Work from './components/work'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Work />
      <Contact />
      <div className="text-center py-6 text-indigo-400 text-base font-semibold flex items-center justify-center gap-2 bg-gray-950 border-t border-gray-800">
        <span>✨</span> Made by Bewin Felix <span>🚀</span>
      </div>
      {/* All content and code are for demonstration and educational purposes. All trademarks, logos, and images are property of their respective owners. */}
    </>
  )
}

export default App
