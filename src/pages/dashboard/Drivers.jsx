import { useState } from 'react'
import { Search, Plus, UserRound } from 'lucide-react'

const drivers = [
  {
    id: 'DRV001',
    name: 'Amit Kumar',
    phone: '9876543210',
    license: 'DL123456',
    vehicle: 'UP32 AB 1234',
    status: 'Active',
  },
  {
    id: 'DRV002',
    name: 'Rahul Singh',
    phone: '9876543211',
    license: 'DL234567',
    vehicle: 'UP32 CD 5678',
    status: 'Active',
  },
  {
    id: 'DRV003',
    name: 'Vikash Verma',
    phone: '9876543212',
    license: 'DL345678',
    vehicle: 'UP32 EF 9012',
    status: 'Inactive',
  },
]

function Drivers() {
  const [search, setSearch] = useState('')

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase()) ||
    driver.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Drivers
          </h1>
          <p className="text-slate-500 mt-1">
            Manage your school's transport drivers.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg">
          <Plus size={18} />
          Add Driver
        </button>
      </div>

      {/* Driver Count */}
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 w-full sm:w-64">
        <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
          <UserRound size={24} />
        </div>

        <div>
          <p className="text-sm text-slate-500">Total Drivers</p>
          <h2 className="text-2xl font-bold text-slate-800">
            {drivers.length}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="relative max-w-md">
          <Search
            size={19}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search by driver name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Drivers Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-slate-50 text-slate-500 text-sm">
              <tr>
                <th className="p-4">Driver ID</th>
                <th className="p-4">Driver Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">License Number</th>
                <th className="p-4">Vehicle</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver) => (
                  <tr
                    key={driver.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="p-4 text-sm font-medium text-blue-600">
                      {driver.id}
                    </td>

                    <td className="p-4 text-sm font-medium text-slate-800">
                      {driver.name}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {driver.phone}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {driver.license}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {driver.vehicle}
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        driver.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {driver.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400">
                    No drivers found.
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}

export default Drivers