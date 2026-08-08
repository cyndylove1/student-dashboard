export interface Course {
  id: string;
  title: string;
  lecturer: string;
  progress: number; 
  status: "In Progress" | "Completed" | "Upcoming";
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: "Pending" | "Submitted" | "Overdue" |"Upcoming";
  priority: "High" | "Medium" | "Low";
}

export interface StudentStats {
  gpa: number;
  totalCourses: number;
  attendancePercentage: number;
}

export const mockDashboardStats: StudentStats = {
  gpa: 3.85,
  totalCourses: 10,
  attendancePercentage: 92,
};

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "Data Structures & Algorithms",
    lecturer: "Dr. Alex Mercer",
    progress: 75,
    status: "In Progress",
  },
  {
    id: "c2",
    title: "Database Management Systems",
    lecturer: "Prof. Sarah Jenkins",
    progress: 100,
    status: "Completed",
  },
  {
    id: "c3",
    title: "Frontend Engineering with React",
    lecturer: "Eng. David Chen",
    progress: 40,
    status: "In Progress",
  },
  {
    id: "c4",
    title: "Software Testing & QA",
    lecturer: "Dr. Elena Rostova",
    progress: 0,
    status: "Upcoming",
  },
  {
    id: "c5",
    title: "Computer Networks",
    lecturer: "Prof. Michael Anderson",
    progress: 65,
    status: "In Progress",
  },
  {
    id: "c6",
    title: "Operating Systems",
    lecturer: "Dr. James Wilson",
    progress: 55,
    status: "In Progress",
  },
  {
    id: "c7",
    title: "Software Engineering",
    lecturer: "Dr. Emily Carter",
    progress: 100,
    status: "Completed",
  },
  {
    id: "c8",
    title: "Artificial Intelligence",
    lecturer: "Prof. Daniel Thompson",
    progress: 30,
    status: "In Progress",
  },
  {
    id: "c9",
    title: "Web Application Security",
    lecturer: "Dr. Sophia Williams",
    progress: 0,
    status: "Upcoming",
  },
  {
    id: "c10",
    title: "Cloud Computing",
    lecturer: "Eng. Robert Johnson",
    progress: 20,
    status: "In Progress",
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: "a1",
    title: "Binary Search Tree Implementation",
    dueDate: "2026-08-15",
    status: "Pending",
    priority: "High",
  },
  {
    id: "a2",
    title: "Relational Database Schema Design",
    dueDate: "2026-08-10",
    status: "Submitted",
    priority: "Medium",
  },
  {
    id: "a3",
    title: "Responsive Student Dashboard UI",
    dueDate: "2026-08-20",
    status: "Pending",
    priority: "High",
  },
  {
    id: "a4",
    title: "Network Protocol Analysis",
    dueDate: "2026-08-25",
    status: "Upcoming",
    priority: "Medium",
  },
  {
    id: "a5",
    title: "Process Scheduling Simulation",
    dueDate: "2026-08-28",
    status: "Upcoming",
    priority: "High",
  },
  {
    id: "a6",
    title: "Software Development Life Cycle Report",
    dueDate: "2026-08-12",
    status: "Submitted",
    priority: "Low",
  },
  {
    id: "a7",
    title: "Introduction to Machine Learning",
    dueDate: "2026-09-02",
    status: "Pending",
    priority: "Medium",
  },
  {
    id: "a8",
    title: "Web Security Vulnerability Assessment",
    dueDate: "2026-09-05",
    status: "Submitted",
    priority: "Medium",
  },
  {
    id: "a9",
    title: "Cloud Infrastructure Deployment",
    dueDate: "2026-09-10",
    status: "Pending",
    priority: "Medium",
  },
  {
    id: "a10",
    title: "Sorting Algorithms Performance Analysis",
    dueDate: "2026-08-18",
    status: "Overdue",
    priority: "High",
  },
];
