import { routesTypes } from '../types/types';
import {
  MdOutlineDashboard,
  MdDashboard,
  MdOutlineGroups2,
  MdGroups2,
  MdCastForEducation,
  MdOutlineCastForEducation,
  MdOutlineSupervisedUserCircle,
  MdSupervisedUserCircle
} from 'react-icons/md';
import { PiStudentLight, PiStudentFill } from 'react-icons/pi';
import Setter from '@/pages/setter/Setter';
// import HomePage from '@/pages/home/HomePage';
import StudentPage from '@/pages/student/StudentPage';
// import TeacherPage from '@/pages/teachers/Teachers';
// import StudentGroups from '@/pages/studentGroups/StudentGroups';
// import TeacherGroups from '@/pages/teachersGroups/TeacherGroups';
// import Eduction from '@/pages/Teachers/Teachers';
import Teacher from '@/pages/Teacher/Teacher';
// import OnBoarding from '@/pages/onboarding/OnBoarding';
// import singleTeacher from '@/pages/singleTeacher/singleTeacher';
// import singleStudent from '@/pages/singleStudent/singleStudent';
// import Foods from '@/pages/Food/Food';
import StudentDetails1 from '@/pages/StudentDetails1/StudentDetails1';
import StudentDetails from '@/pages/StudentDetails/StudentDetails';
import Students from '@/pages/Students/Students';
import Home from '@/pages/home/Home';
import Actvitiy from '@/pages/activity/Actvitiy';
import Addteacher from '@/pages/Addteacher/Addteacher';
import Addstudent from '@/pages/Addstudent/Addstudent';
import Finance from '@/pages/Finance/Finance';
import Chat from '@/pages/Chat/Chat';
import UserDashboard from '@/pages/User-Dashboard/UserDashboard';
import Teachers from '@/pages/Teachers/Teachers';
import TeachersDetails from '@/pages/TeachersDetails/TeachersDetails';


export const iconSize: number = 30;
export const iconColor: string = '#111111';

export const routes: routesTypes[] = [
  // {
  //   id: 1,
  //   routeName: 'setter',
  //   routePath: '/',
  //   routeComp: Setter,
  //   routeCompActiveIcon: MdDashboard,
  //   routeCompUnActiveIcon: MdOutlineDashboard,
  //   sideNav: true
  // },
  {
    id: 1,
    routeName: "االداشبورد",
    routePath: '/',
    routeComp: Home,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 15,
    routeName: 'الطلاب',
    routePath: '/students',
    routeComp: Students,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 7,
    routeName: "المدرسين",
    routePath: '/teachers',
    routeComp: Teachers,
    routeCompActiveIcon: MdCastForEducation,
    routeCompUnActiveIcon: MdOutlineCastForEducation,
    sideNav: true
  },
  {
    id: 2,
    routeName: "اضافة مدرس جديد",
    routePath: '/addteacher',
    routeComp: Addteacher,
    routeCompActiveIcon: MdDashboard,
    routeCompUnActiveIcon: MdOutlineDashboard,
    sideNav: false
  },
  {
    id: 3,
    routeName: "اضافة طالب جديد",
    routePath: '/addstudent',
    routeComp: Addstudent,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: false
  },
  {
    id: 4,
    routeName: 'تمويل',
    routePath: '/finance',
    routeComp: Finance,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav:  false
  },
  {
    id: 5,
    routeName: "محادثة",
    routePath: '/chat',
    routeComp: Chat,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: false
  },
  {
    id: 6,
    routeName: "المستخدم",
    routePath: '/',
    routeComp: UserDashboard,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
 
  {
    id: 8,
    routeName: ' المدرس',
    routePath: '/teacher',
    routeComp: Teacher,
    routeCompActiveIcon: MdSupervisedUserCircle,
    routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
    sideNav: true
  },{
    id: 9,
    routeName: "الاشعارات",
    routePath: '/notification',
    routeComp: Actvitiy,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 10,
    routeName: "تفاصيل طالب",
    routePath: '/studentDetails1',
    routeComp: StudentDetails1,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: false
  },
 
  {
    id: 13,
    routeName: 'تفاصيل الطلاب',
    routePath: '/studentDetails',
    routeComp: StudentDetails,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: false
  },
  {
    id: 14,
    routeName: 'تفاصيل المدرسين',
    routePath: '/teachersDetails',
    routeComp: TeachersDetails,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: false
  },


   
  
  // {
  //   id: 9,
  //   routeName: 'التسجيل',
  //   routePath: '/onboarding',
  //   routeComp: OnBoarding,
  //   routeCompActiveIcon: MdSupervisedUserCircle,
  //   routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
  //   sideNav: true
  // },
  // {
  //   id: 10,
  //   routeName: 'المدرس',
  //   routePath: '/steacher',
  //   routeComp: singleTeacher,
  //   routeCompActiveIcon: MdSupervisedUserCircle,
  //   routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
  //   sideNav: true
  // },
  // {
  //   id: 11,
  //   routeName: '/الطالب',
  //   routePath: '/sstudent',
  //   routeComp: singleStudent,
  //   routeCompActiveIcon: MdSupervisedUserCircle,
  //   routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
  //   sideNav: true
  // }
];
