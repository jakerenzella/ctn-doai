import { LiveTicker } from "@/components/live-ticker"
import { CompetitionIntro } from "@/components/competition-intro"
import { QuotesSection } from "@/components/quotes-section"
import { HowToPlay } from "@/components/how-to-play"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LiveTicker />
        <CompetitionIntro />
        <QuotesSection />
        <HowToPlay />
      </main>
      <Footer />
    </div>
  )
}
