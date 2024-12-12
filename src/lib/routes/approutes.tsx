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
import HomePage from '@/pages/home/HomePage';
import StudentPage from '@/pages/student/StudentPage';
import TeacherPage from '@/pages/teachers/Teachers';
import StudentGroups from '@/pages/studentGroups/StudentGroups';
import TeacherGroups from '@/pages/teachersGroups/TeacherGroups';
import Eduction from '@/pages/onlineEduction/Eduction';
import UserPage from '@/pages/users/User';
import OnBoarding from '@/pages/onboarding/OnBoarding';
import singleTeacher from '@/pages/singleTeacher/singleTeacher';
import singleStudent from '@/pages/singleStudent/singleStudent';
import Foods from '@/pages/Food/Food';
import StudentDetails1 from '@/pages/StudentDetails1/StudentDetails1';
import StudentDetails from '@/pages/StudentDetails/StudentDetails';
import Students from '@/pages/Students/Students';
import Home from '@/pages/home/Home';


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
    id: 2,
    routeName: "اضافة مدرس جديد",
    routePath: '/',
    routeComp: HomePage,
    routeCompActiveIcon: MdDashboard,
    routeCompUnActiveIcon: MdOutlineDashboard,
    sideNav: true
  },
  {
    id: 3,
    routeName: "اضافة طالب جديد",
    routePath: '/students',
    routeComp: StudentPage,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: true
  },
  {
    id: 4,
    routeName: 'تمويل',
    routePath: '/teachers',
    routeComp: TeacherPage,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: true
  },
  {
    id: 5,
    routeName: "محادثة",
    routePath: '/stgroups',
    routeComp: StudentGroups,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 6,
    routeName: "الداش",
    routePath: '/tsgroups',
    routeComp: TeacherGroups,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 7,
    routeName: "المدرسين",
    routePath: '/eduction',
    routeComp: Eduction,
    routeCompActiveIcon: MdCastForEducation,
    routeCompUnActiveIcon: MdOutlineCastForEducation,
    sideNav: true
  },
  {
    id: 8,
    routeName: 'حساب المدرس',
    routePath: '/user',
    routeComp: UserPage,
    routeCompActiveIcon: MdSupervisedUserCircle,
    routeCompUnActiveIcon: MdOutlineSupervisedUserCircle,
    sideNav: true
  },{
    id: 9,
    routeName: "الاشعارات",
    routePath: '/notification',
    routeComp: singleTeacher,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 10,
    routeName: "الطعام",
    routePath: '/food',
    routeComp: singleStudent,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  // ------------------------------
  {
    id: 12,
    routeName: 'الاكلات',
    routePath: '/fooods',
    routeComp: Foods,
    routeCompActiveIcon: MdDashboard,
    routeCompUnActiveIcon: MdOutlineDashboard,
    sideNav: true
  },
  {
    id: 13,
    routeName: 'تفاصيل الطلاب',
    routePath: '/studentDetails1',
    routeComp: StudentDetails1,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: true
  },
  {
    id: 14,
    routeName: 'تفاصيل المدرسين',
    routePath: '/studentDetails',
    routeComp: StudentDetails,
    routeCompActiveIcon: PiStudentFill,
    routeCompUnActiveIcon: PiStudentLight,
    sideNav: true
  },
  {
    id: 15,
    routeName: '  1الطالب',
    routePath: '/students22',
    routeComp: Students,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
  },
  {
    id: 16,
    routeName: "االداشبورد",
    routePath: '/dashbord',
    routeComp: Home,
    routeCompActiveIcon: MdOutlineGroups2,
    routeCompUnActiveIcon: MdGroups2,
    sideNav: true
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
