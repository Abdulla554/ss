
import { useAppSelector } from "@/publicStore/store/store";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Content from "./Content";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
 

export default function Teachers() {
  const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className="px-8 mt-12 w-full " style={{ color:them.fontColor   }}>
                <div  >
          
          <div className=" flex justify-between ">
                    <h3>المدرسين</h3>
                    <div className=' flex gap-6 justify-center'>
          
                    {/* <form>
          <input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
          </form> */}
          
          
          <h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
          <h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
           <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
           </h6>
          <h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
           
          
           
          
                    </div>
          </div>
          
          {/* -------------------------------------- */}
          <div className=" flex mt-3   justify-between ">
                 
          <form>
          <input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
          </form>
          
          
          
          
                    <div className=' flex gap-6 justify-center'>
          
          <button  className=' rounded-full  w-[160px] flex justify-around pt-2 h-10' style={{color:them.fontColor, background:them.button }}>
          <ControlPointIcon/>
          <small >اضاقة طالب</small>
          </button>
          
           
                    </div>
          
          
          
          
          
          </div>
          
          {/* -------------------------------------- */}
          <Content/>
          
          
          <div  className=" flex px-4 mt-6   justify-between ">
           
           <div  className=" flex justify-between gap-6 ">
          
            <p  > عرض</p>
            <p  > استمارة</p>
            <p  > البيانات</p>
           </div>
          
          
           <div  className=" flex gap-3 ">


<button style={{ color:them.fontColor , background:them.Navsheet }} className='  border-0 rounded-full w-10 h-10  pt-1 pl-1 '><ArrowRight fontSize="large"/></button>
<button style={{ color:them.blackColor , background:them.button }} className='  rounded-full w-10 h-10 p-1 '>1</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full w-10 h-10 p-1 '>2</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full  w-10 h-10 p-1'>3</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className=' border-0 rounded-full w-10 h-10  pt-1 pl-0 '><ArrowLeft fontSize="large"/></button>

</div>
          
          
          </div>
           
          
          
          
          
          
          
          
          
          
          
          </div>  
    </div>
  )
}

