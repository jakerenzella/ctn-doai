import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Competition Rules</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              The following terms and conditions govern participation in the Win the Farm competition. By registering, you agree to abide by these terms and conditions. Organisers reserve the right to interpret and enforce these terms at their discretion.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
