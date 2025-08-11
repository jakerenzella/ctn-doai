import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Target, Trophy, Users } from "lucide-react";

export function HowToPlay() {
  return (
    <section id="how-to-play" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Play
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Enter the world of digital warfare and learn to combat AI
            disinformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              1 - Join the platform
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Your first step is to enrol in the competition, which will create
              your account on the social media platform. You can do this below.
              You can join with a team of up to 4.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the 2016 US presidential election to the 2020 Australian
              bushfires, AI bots have been used to amplify misinformation, sow
              discord, and manipulate public opinion.
            </p>
          </div>
          <div className="bg-red-50 p-8 rounded-lg">
            <Bot className="w-16 h-16 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Real-World Impact
            </h4>
            <p className="text-gray-700">
              Learn how AI manipulation affects elections, public health
              decisions, and social movements through hands-on experience.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-blue-50 p-8 rounded-lg lg:order-2">
            <Target className="w-16 h-16 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Controlled Environment
            </h4>
            <p className="text-gray-700">
              Practice in a safe, artificial social media landscape designed
              specifically for learning and competition.
            </p>
          </div>
          <div className="lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Competition Simulates Real-World Disinformation
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Capture the Narrative provides hands-on experience in identifying
              security threats as well as raise awareness of poor security
              practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>
                Capture the Narrative takes this concept to a new level.
              </strong>
            </p>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-red-50 to-blue-50 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Challenge
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Through a controlled, artificial social media landscape,
              competitors will be charged with the manipulation of social media
              narratives by developing and deploying bots that amplify and
              suppress target messages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Team Up</h4>
              <p className="text-gray-700 text-sm">
                Form teams and strategize your approach
              </p>
            </div>
            <div className="text-center">
              <Bot className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Deploy Bots</h4>
              <p className="text-gray-700 text-sm">
                Create AI bots to influence narratives
              </p>
            </div>
            <div className="text-center">
              <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Win Prizes</h4>
              <p className="text-gray-700 text-sm">
                Compete for AU$5,000 in prizes
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join the Fight Against Disinformation?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Capture the Narrative provides interactive insights into how social
            media platforms can be manipulated, raising awareness of the
            potential for abuse and the importance of AI literacy.
          </p>
          <p className="text-xl font-semibold text-red-600 mb-6">
            Sound interesting? Join in! The top team will take home AU$5,000 and
            our competition is open to students from every Australian School.
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3"
          >
            Register Your Team Now
          </Button>
        </div>
      </div>
    </section>
  );
}
