import Attendance from './pages/Teachers/attendance/attendance.page';
import Broadcast from './pages/Principal/broadcast/broadcast';
import CreateTeacherAcc from './pages/Principal/create-accout-for-teacher/create-account-for-teacher.pages';
import CreateProfile from './pages/System-admin/create-profile/create-profile.page';
import CreateSysAdmin from './pages/Principal/create-system-admin/create-sys-admin.page';
import Events from './pages/students/Events/Events.page';
import Exams from './pages/students/Exams/exams.page';
import GradeArchive from './pages/students/grade-archive/grade-archive.page';
import GradeReport from './pages/students/grade/grade-report.page';
import ManageSysAdmin from './pages/Principal/manage-sys-admin/manage-sys-admin.page';
import ManageTeacher from './pages/Principal/manage-teacher/manage-teacher.page';
import MarkList from './pages/Teachers/mark-list/mark-list.page';
import ParentAttendance from './pages/Parents/Parent-attendance/Parent-attendance.page';
import ParentEvents from './pages/Parents/parent-Events/Parent-Events.page';
import ParentExams from './pages/Parents/Parent-Exams/parent-exams.page';
import ParentGradeArchive from './pages/Parents/parent-grade-archive/parent-grade-archive.page';
import ParentGradeReport from './pages/Parents/parent-grade/parent-grade-report.page';
import PostExam from './pages/Teachers/post-exam-date/post-exam-date';
import SearchStudent from './pages/Principal/search-student/search-student';
import SignIn from './pages/sign-in/sign-in.component';
import StudentAttendance from './pages/students/student-attendance/students-attendance.page';
import StudentSearch from './pages/Teachers/student-search/search-student';
import GenerateTranscript from './pages/System-admin/generate-transcript/generate-transcript';
import PasswordReset from './pages/System-admin/password-reset/password-reset';
export default [
  {
    path: '/sign-in/:role',
    component: SignIn,
  },

  {
    path: '/create-profile',
    component: CreateProfile,
  },

  {
    path: '/create-teacher',
    component: CreateTeacherAcc,
  },
  {
    path: '/generate-transcript',
    component: GenerateTranscript,
  },
  {
    path: '/reset-password',
    component: PasswordReset,
  },
  {
    path: '/manage-teachers',
    component: ManageTeacher,
  },
  {
    path: '/manage-sys-admin',
    component: ManageSysAdmin,
  },
  {
    path: '/create-sys-admin',
    component: CreateSysAdmin,
  },
  {
    path: '/broadcast',
    component: Broadcast,
  },
  {
    path: '/search-student',
    component: SearchStudent,
  },
  {
    path: '/attendance',
    component: Attendance,
  },
  {
    path: '/student-search',
    component: StudentSearch,
  },
  {
    path: '/post-exam',
    component: PostExam,
  },
  {
    path: '/mark-list',
    component: MarkList,
  },
  {
    path: '/student-attendance',
    component: StudentAttendance,
  },
  {
    path: '/grade-archive',
    component: GradeArchive,
  },
  {
    path: '/grade-report',
    component: GradeReport,
  },
  {
    path: '/events',
    component: Events,
  },
  {
    path: '/exams',
    component: Exams,
  },
  {
    path: '/parent-attendance',
    component: ParentAttendance,
  },
  {
    path: '/parent-grade-archive',
    component: ParentGradeArchive,
  },
  {
    path: '/parent-grade-report',
    component: ParentGradeReport,
  },
  {
    path: '/parent-exams',
    component: ParentExams,
  },
  {
    path: '/parent-events',
    component: ParentEvents,
  },
];
