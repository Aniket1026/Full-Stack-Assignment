"use client";

import { StudentTable } from "@/components/student-table";
import FilterStudentOptions from "./filter-student-option";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { fetchStudents } from "@/lib/redux/studentSlice";
import { AddStudentModal } from "./add-student-modal";

export function StudentDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const studentStatus = useSelector(
    (state: RootState) => state.students.status
    );
    
  useEffect(() => {
    if (studentStatus == "idle") {
      dispatch(fetchStudents());
    }
  }, [studentStatus,dispatch]);
    
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <FilterStudentOptions
          defaultValue="AY 2024-25"
          options={["AY 2021-22", "AY 2022-23", "AY 2023-24", "AY 2024-25"]}
        />
        <FilterStudentOptions
          defaultValue={"CBSE 9"}
          options={["CBSE 9", "CBSE 10", "CBSE 11", "CBSE 12"]}
        />
        <div className="ml-auto">
          <AddStudentModal />
        </div>
      </div>
      <StudentTable />
    </div>
  );
}
