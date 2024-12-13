import React from 'react'
 
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Timeline from   '@mui/icons-material/Moving';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppSelector } from '@/publicStore/store/store';
 
import SearchIcon from '@mui/icons-material/Search';
import AlarmIcon from '@mui/icons-material/Alarm';
import TimelineIcon from '@mui/icons-material/Timeline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PrintIcon from "@mui/icons-material/Print";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function Finance() {
  const them = useAppSelector((state) => state.theme.colors);
  return(
    <div  className="px-8 mt-12 w-full " style={{ color:them.fontColor   }}>
    <div className=" flex justify-between ">
          <h3 className=" font-bold">تمويل</h3>
          <div className=' flex gap-6 justify-center'>

  <form className=' relative'>
                  
                   <input  className=" w-56  h-10 rounded-full " id="serch" placeholder="         Search here..."/>
                   <SearchIcon   style={{ position:"absolute",right:190,top:10,color:"black" }}/>
 </form>


<h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
<h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
 

 

          </div>
</div>


<div className=' flex  gap-4 mt-5 '>


<div className='  w-3/5'>


<div>
      <div
        style={{ color: them.fontColor, background: them.Navsheet }}
        className="    h-24 w-full"
      >
        <div className=" container px-10  ">
          <h4 className=" pt-8">الطالب الغير دافع للاجر</h4>
        </div>
      </div>

      <div
        style={{ color: them.fontColor, background: them.Darkblue }}
        className="   h-[340px] w-full"
      >
        {[1, 2, 3, 4, 5].map((e, i) => {
          return (
            <div className=" flex">
              <div className=" w-1/2  flex justify-items-center pt-3 px-4">
                <p
                  style={{ background: them.purpleColor }}
                  className=" rounded-full w-8 h-8  text-center  "
                />
                <p className=" mr-2 mt-1">Samantha William</p>
                <div style={{ flexGrow: 2 }} />
                <p style={{ color: them.button }} className="mt-1 ">
                  ID
                </p>
                <p style={{ color: them.button }} className=" mr-2 mt-1">
                  123456789
                </p>
              </div>

              <div className=" w-1/2  flex justify-between pt-3 px-4">
                <div className=" flex">
                  <p
                    style={{ background: them.OrngColor }}
                    className=" rounded-full w-8 h-8 text-center  "
                  />
                  <small className=" mr-2 ">
                    Class
                    <br /> VII A
                  </small>
                </div>

                <p className="  pt-2">$50,036</p>

                <div className="">
                  <button
                    style={{ background: them.Darkblue, color: them.fontColor }}
                       className=' border-0'
                  >
                    <PrintIcon />{" "}
                  </button>
                  <button
                    style={{ background: them.Darkblue, color: them.fontColor }}
                    className=' border-0'
                  >
                    <MoreHorizIcon />{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{ color: them.fontColor, background: them.Navsheet }}
        className="    h-24 w-full"
      >
        <div className=" container px-6  flex justify-between pt-4   ">
          <p className="pt-2">عرض 1-5 من 100 بيانات</p>

          <div  className=" flex gap-2 ">


<button style={{ color:them.fontColor , background:them.Navsheet }} className='  border-0 rounded-full w-10 h-10  pt-1 pl-1 '><ArrowRight fontSize="large"/></button>
<button style={{ color:them.blackColor , background:them.button }} className='  rounded-full w-10 h-10 p-1 '>1</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full w-10 h-10 p-1 '>2</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full  w-10 h-10 p-1'>3</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className=' border-0 rounded-full w-10 h-10  pt-1 pl-0 '><ArrowLeft fontSize="large"/></button>

</div>



        </div>
      </div>
    </div>


</div>









<div className='   w-2/5'>


<div style={{ color:them.fontColor , background:them.Navsheet}}   >
    
     <div   className="h-16 w-full ">
      <div className=" container px-6  ">
    <h5 style={{ color:them.button}} className=" pt-6">نفقات المدرسة</h5>
 </div>

      </div>

{/* النص */}

      <div   className="    w-full">

{[1,2,3,4,2].map((e,i)=>{
  return(
    <div className=" flex ">

<div className=" w-full  flex justify-items-center pt-3 px-4">
<p   className=' rounded-full w-10 h-10 pt-1 bg-red-500   text-center  '><Timeline fontSize="large" style={{ color:"black" }}/> </p>

<div style={{ color:them.button}}  className=' flex flex-col mr-3'>
#123456789
<small style={{ color:them.fontColor}} >2 March 2021, 13:45 PM</small>
</div>

</div>






<div className=" w-3/4 flex justify-around pt-3 ">

<h6 className="  pt-2 ">$50,036</h6>

<h6 style={{ color:them.greenColor}} className="  pt-2">مكتمل</h6>


</div>

</div>
  )
})}


      </div> 
{/* النص */}





<div style={{ color:them.fontColor , background:them.Navsheet }} className="    h-[108px] w-full">
      <div className="    flex justify-between pt-9  ">
    <p className="pt-2 pr-3">عرض 1-5 من 100 بيانات</p>

    <div  className=" flex gap-2 ">


<button style={{ color:them.fontColor , background:them.Navsheet }} className='  border-0 rounded-full w-10 h-10  pt-1 pl-1 '><ArrowRight fontSize="large"/></button>
<button style={{ color:them.blackColor , background:them.button }} className='  rounded-full w-10 h-10 p-1 '>1</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full w-10 h-10 p-1 '>2</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full  w-10 h-10 p-1'>3</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className=' border-0 rounded-full w-10 h-10  pt-1 pl-0 '><ArrowLeft fontSize="large"/></button>

</div>

 </div>



      </div> 


      
  </div>


</div>









































</div>



















</div>

  )
}
