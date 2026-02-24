import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSolutionSection from './components/ProblemSolutionSection'
import RDVisionSection from './components/RDVisionSection'
import EarlyAdoptersSection from './components/EarlyAdoptersSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <RDVisionSection />
        <EarlyAdoptersSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
