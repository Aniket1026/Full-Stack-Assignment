import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BeakerIcon, BookOpenIcon } from "lucide-react";
import Image from "next/image";
import Active from "../app/static/Active.png";
import Inactive from "../app/static/InActive.png";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import { format,parseISO } from "date-fns";

export function StudentTable() {
  const students = useSelector((state: RootState) => state.students.students);
   const formatDate = (dateString: string) => {
     const date = parseISO(dateString);
     return format(date, "dd MMM yyyy");
   };

   const formatDateTime = (dateString: string) => {
     const date = parseISO(dateString);
     return format(date, "dd MMM yyyy HH:mm'PM'");
   };
    
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Student Name</TableHead>
          <TableHead>Cohort</TableHead>
          <TableHead>Courses</TableHead>
          <TableHead>Date Joined</TableHead>
          <TableHead>Last Login</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.name}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.cohort}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                  <BeakerIcon className="h-3 w-3" />
                  CBSE 9 Science
                </div>
                <div className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                  <BookOpenIcon className="h-3 w-3" />
                  CBSE 9 Math
                </div>
              </div>
            </TableCell>
            <TableCell>{formatDate(student.dateJoined)}</TableCell>
            <TableCell>{formatDateTime(student.lastLogin)}</TableCell>
            <TableCell>
              <div className="flex flex-col items-center">
                {student.status === "active" ? (
                  <Image src={Active} alt="active" height={14} width={14} />
                ) : (
                  <Image src={Inactive} alt="inactive" height={14} width={14} />
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
