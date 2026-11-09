import { useState } from 'react'
import { Search, Plus, Users } from 'lucide-react'

const students = [
  {
    id: 'STU001',
    name: 'Aarav Sharma',
    class: 'Class 5',
    parent: 'Rahul Sharma',
    phone: '9876543210',
    route: 'Route A',
  },
  {
    id: 'STU002',
    name: 'Ananya Singh',
    class: 'Class 8',
    parent: 'Amit Singh',
    phone: '9876543211',
    route: 'Route B',
  },
  {
    id: 'STU003',
    name: 'Rohan Verma',
    class: 'Class 6',
    parent: 'Suresh Verma',
    phone: '9876543212',
    route: 'Route C',
  },
  {
    id: 'STU004',
    name: 'Priya Gupta',
    class: 'Class 4',
    parent: 'Manoj Gupta',
    phone: '9876543213',
    route: 'Route A',
  },
]

function Students() {
  const [search, setSearch] = useState('')

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Students
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all registered students.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg">
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {/* Student Count */}
      <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 w-full sm:w-64">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
          <Users size={24} />
        </div>

        <div>
          <p className="text-sm text-slate-500">Total Students</p>
          <h2 className="text-2xl font-bold text-slate-800">
            {students.length}
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
            placeholder="Search by student name or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-slate-50 text-slate-500 text-sm">
              <tr>
                <th className="p-4">Student ID</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Class</th>
                <th className="p-4">Parent</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Route</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="p-4 text-sm font-medium text-blue-600">
                      {student.id}
                    </td>

                    <td className="p-4 text-sm font-medium text-slate-800">
                      {student.name}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {student.class}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {student.parent}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {student.phone}
                    </td>

                    <td className="p-4 text-sm text-slate-600">
                      {student.route}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-400">
                    No students found.
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

export default Students