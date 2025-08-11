import { Bot, Trophy, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ReadySection() {
  return (
    <div className="text-center bg-white p-8 rounded-lg md:px-80">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to join the fight against disinformation?
      </h3>
      <p className="text-lg  mb-6 max-w-3xl mx-auto">
        Capture the Narrative provides interactive insights into how social
        media platforms can be manipulated, raising awareness of the potential
        for abuse and the importance of AI literacy.
      </p>
      <p className="text-lg  mb-6 max-w-3xl mx-auto">
        Sound interesting? Join in! The top team will take home AU$5,000 and our
        competition is open to students from every Australian School.
      </p>
      <Button
        size="lg"
        className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 rounded-none"
      >
        Register your team now
      </Button>
    </div>
  );
}
