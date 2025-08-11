import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Trophy, Users, Rocket, Flag } from "lucide-react"

export function Timeline() {
  const timelineEvents = [
    {
      date: "Friday September 19, 2025",
      event: "Launch webinar. Start of contest",
      icon: Rocket,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      date: "Friday September 26, 2025",
      event: "End of week 1",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      date: "Friday October 3, 2025",
      event: "End of week 2",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      date: "Friday October 10, 2025",
      event: "End of week 3",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      date: "Friday October 17, 2025",
      event: "End of contest, finalists announced (and contacted)",
      icon: Flag,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      date: "Friday October 31, 2025",
      event: "Prizegiving event in Sydney, NSW",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ]

  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-gray-900 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Timeline</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Mark your calendars! Here's everything you need to know about important dates and milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg rounded-none">
            <div className="p-6">
              <Table>
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="font-bold font-dm-serif text-lg">Date</TableHead>
                    <TableHead className="font-bold font-dm-serif text-lg">Event</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timelineEvents.map((item, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                    >
                      <TableCell className="py-6">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${item.bgColor}`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-lg">{item.date.split(",")[0]}</div>
                            <div className="text-sm text-gray-600">{item.date.split(",")[1]}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6">
                        <div className="text-lg text-gray-800 font-medium">{item.event}</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

        </div>
      </div>
    </section>
  )
}
