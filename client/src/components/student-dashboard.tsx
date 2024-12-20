import { Plus, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { StudentTable } from "@/components/student-table"
import FilterStudentOptions from './filter-student-option'

export function StudentDashboard() {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <FilterStudentOptions defaultValue='AY 2024-25' options={['AY 2021-22', 'AY 2022-23', 'AY 2023-24', 'AY 2024-25']} />
                <FilterStudentOptions defaultValue={'CBSE 9'} options={['CBSE 9', 'CBSE 10', 'CBSE 11', 'CBSE 12']} />
                <div className="ml-auto">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add new Student
                    </Button>
                </div>
            </div>
            <StudentTable />
        </div>
    )
}