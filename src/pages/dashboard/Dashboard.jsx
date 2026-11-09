import {
  Users,
  Bus,
  UserRound,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

const stats = [
  {
    title: 'Total Students',
    value: '1,250',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Active Vehicles',
    value: '32',
    icon: Bus,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Active Drivers',
    value: '28',
    icon: UserRound,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Total Routes',
    value: '18',
    icon: MapPin,
    color: 'bg-orange-100 text-orange-600',
  },
]

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome back, Admin!
        </h1>

        <p className="text-slate-500 mt-2">
          Here's what's happening with your school transportation.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
            >
              <div className="flex justify-between items-center">

                <div className={`p-3 rounded-lg ${item.color}`}>
                  <Icon size={24} />
                </div>

                <ArrowUpRight className="text-slate-400" size={20} />

              </div>

              <h2 className="text-3xl font-bold text-slate-800 mt-5">
                {item.value}
              </h2>

              <p className="text-slate-500 mt-1">
                {item.title}
              </p>

            </div>
          )
        })}

      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">

        <h2 className="text-lg font-semibold text-slate-800">
          Recent Activity
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Latest transport updates will appear here.
        </p>

        <div className="text-center py-12 text-slate-400">
          No recent activity available.
        </div>

      </div>

    </div>
  )
}

export default Dashboard