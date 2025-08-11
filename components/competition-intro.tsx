import { Button } from "@/components/ui/button"
import { BarTicker } from "./bar-ticker";

export function CompetitionIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          The ultimate
          <span className="text-red-700"> election</span> challenge
        </h2>
        <div className="pb-6">
          <span className="text-gray-600 text-sm ">
            Launching October 13, 2025
          </span>
        </div>
        <div className="flex justify-center">
          <BarTicker />
        </div>

        <p className="text-base leading-5 text-left pl-8 max-w-sm mx-auto mb-8 font-medium text-balance">
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
            Join the competition
          </Button>
          <Button
            size="lg"
            variant="outline"
            className=" border-red-600 rounded-none text-red-600 hover:bg-red-50 text-lg px-8 py-3 bg-transparent"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
