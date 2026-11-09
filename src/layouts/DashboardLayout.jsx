import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Bus,
  Map,
  Route,
  Settings,
  LogOut,
} from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Students', path: '/students', icon: Users },
  { name: 'Drivers', path: '/drivers', icon: Users },
  { name: 'Vehicles', path: '/vehicles', icon: Bus },
  { name: 'Routes', path: '/routes', icon: Route },
  { name: 'Live Tracking', path: '/tracking', icon: Map },
]

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-5">

        <h1 className="text-2xl font-bold mb-2">
          ROUTZEN
        </h1>

        <p className="text-xs text-slate-400 mb-10">
          School Transport Management
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-10 border-t border-slate-700 pt-5 space-y-3">
          <button className="flex items-center gap-3 text-slate-300">
            <Settings size={20} />
            Settings
          </button>

          <button className="flex items-center gap-3 text-red-400">
            <LogOut size={20} />
            Logout
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1">

        <header className="bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            School Transport Dashboard
          </h2>
        </header>

        <div className="p-8">
          <Outlet />
        </div>

      </main>

    </div>
  )
}

export default DashboardLayout