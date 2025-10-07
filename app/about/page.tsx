import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Credits } from "@/components/credits";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Credits />
      </main>
      <Footer />
    </div>
  );
}
