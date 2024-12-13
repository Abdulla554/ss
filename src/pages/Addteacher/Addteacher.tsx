import React, { useEffect } from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Timeline from   '@mui/icons-material/Moving';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppSelector } from '@/publicStore/store/store';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from '@mui/icons-material/Search';
import AlarmIcon from '@mui/icons-material/Alarm';
import TimelineIcon from '@mui/icons-material/Timeline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PrintIcon from "@mui/icons-material/Print";
export default function Addteacher() {
  useEffect(() => {}, []);
  const them = useAppSelector((state) => state.theme);
  return(
    <div  className="px-8 mt-12 w-full " style={{ color:them.colors.fontColor,   }}>
    <div className=" flex justify-between ">
          <h3  className=" font-bold">
            اضافة مدرس جديد
          </h3>
          <div className=' flex gap-6 justify-center'>

          <form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form>


<h6 style={{ background:them.colors.gray, color:them.colors.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
<h6 style={{ background:them.colors.gray,color:them.colors.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
 <h6 style={{  color:them.colors.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.colors.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
 

 

          </div>







</div>





<div className=" w-full h-14 mt-3 rounded-t-2xl " style={{ color:them.colors.blackColor,background:them.colors.button }} >
<h4 className="  pt-3  font-semibold  pr-6  ">التفاصيل الشخصية</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[530px] flex gap-6 px-6 pt-3 " style={{ color:them.colors.fontColor,background:them.colors.Navsheet }} >








<div className="w-[500px]   ">
<h5 className=" mb-2  " > الاسم الاول*   </h5>
<input type="texet" placeholder="Samantha" className=" h-9 rounded-md w-full inputs  "/>



<h5 className=" mt-3  " >البريد الالكتروني *</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-3  " >العنوان *</h5>
<input type="texet" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
className=" h-44 rounded-md w-full inputs  "/>
  <small className="ml-[420px] ">0/2000</small>


  <h5 className=" mb-[10px]  " >تاريخ الميلاد*</h5>
<input type="texet" placeholder="Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>
</div>







<div className=" w-[500px]  ">

<h5 className="   " >الاسم الاخير *</h5>
<input type="texet" placeholder="William" className=" h-9 rounded-md w-full inputs  "/>



<h5 className=" mt-3   " >رقم الاهاتف *</h5>
<input type="texet" placeholder="+1234567890" className=" h-9 mb-3 rounded-md w-full inputs  "/>


<h4 className=" mb-1" >الصورة *</h4>
<input placeholder="  Drag and drop or 
click " className=" h-44 inputs  "/>



<h5 className=" mt-[27px] " >مكان الميلاد *</h5>
<input type="texet" placeholder="Mana William" className=" h-9 rounded-md w-full inputs  "/>
</div>








</div>




{/* *************************** */}










<div className=" w-full h-14 mt-4 rounded-t-2xl " style={{ color:them.colors.blackColor,background:them.colors.button }} >
<h4 className="  pt-3 pr-9 ">تعليم</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[250px] flex gap-6 px-6 pt-7 " style={{ color:them.colors.fontColor,background:them.colors.Navsheet }} >



<div className="w-[500px]    ">

<h5 className=" mb-4  " >الجامعة *</h5>
<input type="texet" placeholder="University Akademi Historia" className=" h-9 rounded-md w-full inputs  "/>


<h5 className=" mt-4  " >موعد البدء والانتهاء*</h5>
<div className=" flex justify-between" >
<input type="texet" placeholder="September 2013" className=" h-9 rounded-md  w-[245px] inputs  "/>
<input type="texet" placeholder="September 2017" className=" h-9 rounded-md  w-[245px] inputs  "/>
</div>



</div>







<div className=" w-[500px]  ">

<h5 className=" mb-4  " >الشهادة *</h5>
<input type="texet" placeholder="History Major" className=" h-9 rounded-md w-full inputs  "/>





<h5 className=" mt-4  " >المدينة *</h5>
<input type="texet" placeholder="Yogyakarta, Indonesia" className=" h-9 rounded-md w-full inputs  "/>

</div>








</div>



<div className="  mt-3 flex gap-3  ml-[940px] " >

<button  className=" inputss rounded-3xl p-3 ">حفظ كمسودة</button>
<button style={{ color:them.colors.fontColor,background:them.colors.button }} className=" p-3 rounded-3xl " >ارسال</button> 
</div>

















</div>
  )
}
