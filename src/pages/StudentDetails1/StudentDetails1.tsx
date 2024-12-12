import { useAppSelector } from "@/publicStore/store/store";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Timeline from   '@mui/icons-material/Moving';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CallIcon from '@mui/icons-material/Call';

function StudentDetails1() {
    const them = useAppSelector((state) => state.theme.colors);
    const Arr=[{
      title:"Parents:",
      suptitle:"Justin Hope",
      icon:<PermIdentityIcon fontSize="small"/>,
    },
  
    {
      title:"Address:",
      suptitle:"Jakarta, Indonesia",
      icon:<LocationOnOutlinedIcon fontSize="small"/>,
    },
    {
      title:"Phone:",
      suptitle:"+12 345 6789 0",
      icon:<CallOutlinedIcon fontSize="small"/>,
    },
    {
      title:"Email:",
      suptitle:"Hope@mail.com",
      icon:<MailOutlineIcon fontSize="small"/>,
    },
  ]
  return (
  
  
    <div      className="px-8 mt-12 w-full "
    style={{ color: them.fontColor  }}>
    
<div className=" flex justify-between ">
    <h3>Student Details</h3>
    <div className=' flex gap-6 justify-center'>

    <form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form>


<h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
<h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
<h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
</h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>




    </div>
</div>



 <div className=" flex gap-5  mb-4  ">


<div className=" w-full h-[380px]  mt-4  ">

{/* البداية */}
<div style={{ color:them.fontColor , background:them.card}} className=" mb-6 h-[380px]    ">

<div style={{ background:them.bgsheet}} className="  w-full h-[110px]  relative  ">

<div  style={{ background:them.OrngColor}} className="  w-56 h-14  rounded-t-2xl    absolute  top-[53px] left-[750px] "/>
<div  style={{ background:them.ylawoColor}} className="  w-60 h-[88px]   rounded-t-2xl    absolute top-[22px] left-[945px]  "/>
</div>

<div className=" px-6">
<div style={{ background:them.purpleColor}} className=" bor absolute  top-40  w-28 h-28  rounded-full  "/>  
<button style={{ background:them.card,color:them.fontColor  }} className="  mr-[1070px] border-0 mt-3  "><MoreHorizIcon/> </button>
<div className=" mt-4 mb-7">
<h4>Karen Hope</h4>
<small>Student</small>
</div>

</div>





<div className=" px-6 flex justify-between">
  {Arr.map((e)=>{
    return(
      <div>
      <h6>{e.title} </h6>
      <div className=" flex gap-2">
        <div style={{ color:them.blackColor , background:them.OrngColor}}  className=" text-center  w-8 h-8  rounded-full">
        <div  className=" " >
          {e.icon}
        </div>
        </div>
      <p>{e.suptitle} </p>
      </div>
      
      
      </div>
    )
  })}

</div>



</div>






{/* --------------------------- */}
<div className=" px-4  " style={{ color:them.fontColor , background:them.card}}   >

<div  className=" pt-3 flex items-center justify-between">
<h3>Student history</h3>

<div className=" gap-6 flex">


<select  style={{ color:them.button , background:them.card}} className="vf2 w-36 h-10 pr-6 rounded-full ">
  <option>January</option>
  <option>1</option>
  <option>1</option>
</select>

<select  style={{ color:them.button , background:them.card}} className="vf2 w-36 h-10 pr-6 rounded-full ">
  <option>2021</option>
  <option>1</option>
  <option>1</option>
</select>

<select  style={{ color:them.fontColor , background:them.card}} className="vf1 w-36 h-10 pr-6 rounded-full ">
  <option>Select</option>
  <option>1</option>
  <option>1</option>
</select>
</div>

</div>


<div className=" h-[1px] w-full  bg-slate-300 mt-3"/>




{/* ------------------------ */}
 <div>



      <div
        style={{ color: them.fontColor, background: them.nav }}
        className="  pt-2  mt-4 h-[70px] w-full flex  gap-4 items-center"
      >
   
<div  >
    <input  className="w-5 h-5  mx-4  " type="checkbox"/>
</div>

<h6 className=" pr-44" >Name</h6>
<h6 className=" pr-24">ID</h6>
<h6 className=" pr-[88px] ">Date</h6>
<h6 className=" pr-7 ">Parent Name</h6>
<h6 className=" pr-16 ">City</h6>
<h6 className=" pr-16">Contact</h6>
<h6 className=" pr-7">Grade</h6>
<h6 >Action</h6>


      </div>



      <div
        style={{ color: them.fontColor, background: them.SidBar }}
        className="  py-2 w-full"
      >
        {[1,2,3,4,5,4,5].map((e, i) => {
          return (
            <div className=" flex items-center">
                <input  className="w-[18px] h-[18px] mr-7 mt-[10px]  " type="checkbox"/>
              <div className=" w-1/4   flex  items-center pt-3">
                <p
                  style={{ background: them.purpleColor }}
                  className=" mr-4  rounded-full w-[38px] h-[38px] mt-[10px]  text-center  "
                />
                
                <p className=" mr-3 mt-[10px]    font-bold text-base">Samantha William</p>


             
              </div>

              <div className=" w-3/4 items-center flex justify-between pt-3 ">
             <p style={{ color: them.button }} className=" mt-[10px]  font-bold text-base ">
                #123456789
                </p>

                <p style={{ color: them.fontColor }} className=" mt-[10px] text-base ">
               March 25, 2021
                </p>
                <p style={{ color: them.fontColor }} className=" mt-[10px] text-base ">
                Mana William 
                </p>
                <p style={{ color: them.fontColor }} className=" mt-[10px]  text-base ">
                Jakarta
                </p>

             <div className="  border-0 ">
              <button className="  border-0 " style={{ background: them.SidBar, color:them.button }}>
                <CallIcon  />
                </button>
                <button className="  border-0 "  style={{ background: them.SidBar, color:them.button }}>
              <MailOutlineIcon  />
              </button>
             </div>

               <div className=" bg-orange-500 w-[60px] h-8 rounded-full  pr-3 py-1">
               VII A
               </div>
              
                  <button
                  className="  border-0 "
                    style={{ background: them.SidBar, color: them.fontColor }}
                  >
                    <MoreHorizIcon />{" "}
                  </button>
                
              </div>

            </div>
          );
        })}
      </div>




      <div
        style={{ color: them.fontColor, background: them.nav }}
        className="    h-16 w-full"
      >
     
      </div>






    </div>

      {/* ------------------------ */}
  </div>




  <div style={{ color:them.fontColor , background:them.card }} className="    h-24 w-full">
      <div className=" container px-6  flex justify-between pt-4   ">
    <p className="pt-2">Showing 1-5 from 100 data</p>

    <div  className=" flex gap-3 ">


<button style={{ color:them.fontColor , background:them.Navsheet }} className='  border-0 rounded-full w-10 h-10  pt-1 pl-1 '><ArrowRight fontSize="large"/></button>
<button style={{ color:them.blackColor , background:them.button }} className=' border-0 rounded-full w-10 h-10 p-1 '>1</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full w-10 h-10 p-1 '>2</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className='iconmass   rounded-full  w-10 h-10 p-1'>3</button>
<button style={{ color:them.fontColor , background:them.Navsheet }} className=' border-0 rounded-full w-10 h-10  pt-1 pl-0 '><ArrowLeft fontSize="large"/></button>

</div>

 </div>



      </div> 

{/* --------------------------- */}
  </div>

 </div>






</div>  

  )
}

export default StudentDetails1