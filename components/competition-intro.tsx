import { Button } from "@/components/ui/button";
import { BarTicker } from "./bar-ticker";

export function CompetitionIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The Ultimate
          <span className="text-red-600"> Election</span> Challenge
        </h2>
        <div className="pb-6">
          <span className="text-gray-400 text-xs ">
            Presented by Day of AI Australia
          </span>
        </div>
        <div className="flex justify-center">
          <BarTicker />
        </div>

        <p className="text-base max-w-sm text-left mx-auto mb-8 leading-relaxed">
          Think you understand how social media really works? Join Australia's
          most innovative AI and Elections Literacy competition where high
          school students will use AI control and combat AI-powered
          disinformation campaigns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 rounded-none text-lg px-8 py-3"
          >
            Join the Competition
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-red-600 rounded-none text-red-600 hover:bg-red-50 text-lg px-8 py-3 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
