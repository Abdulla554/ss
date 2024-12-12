import { useAppSelector } from '@/publicStore/store/store';
 
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
function SidBar2() {
  const Arr=["Samantha William","Tony Soap","Karen Hope","Jordan Nico","Nadila Adja"]
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className='main'>
    <div className='Sidba2 ' style={{ background:them.SidBar}}>
<div className='   pt-5 px-4  '>

<div className=' flex gap-6 justify-between'>
<button style={{ background:them.gray}} className=' rounded-full w-10 h-10     text-center  '><NotificationsIcon /> </button>
<button style={{ background:them.gray}} className=' rounded-full w-10 h-10   text-center  '><SettingsIcon  /></button>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '></h4>
 
</div>
 
<div className='      flex mt-3 justify-between '>
  <div>
  <h4 style={{  color:them.fontColor}}>Recent Students</h4>
  <p style={{  color:them.fontColor}}>You have 456 students</p>
  </div>
  {/* kkkkkkkkkkkkkk */}
<button style={{ color:them.fontColor,background:them.SidBar}} 
className='iconmass  rounded-full   w-10 h-10 mt-2    text-center'>
  <AddIcon />
  </button>

</div>







{Arr.map((e,i)=>{
    return(
      <div key={i} className='    mt-4  flex justify-between '>
        <div className=' flex'>

   
<p style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
<p className=' pr-4'  style={{  color:them.gray}}> {e} <br/>Class VII A 
</p>
</div>
<button style={{ color:them.fontColor,background:them.SidBar}} className='iconmass  rounded-full w-10 h-10   text-center'>
  <EmailIcon fontSize='small'   />
  </button>

</div> 
    )
  })}

<button  className=' rounded-full mr-5 border-0   mt-2 w-64 h-11' style={{color:them.fontColor, background:them.button }}>
View More
</button>



<h4 style={{  color:them.gray}} className='mt-4 pl-5 mb-8'>Messages</h4>



{[1,2,3,4,5].map((e)=>{
  return(
    <>
  <div style={{ color:them.gray }} className='  flex mt-3 w-64 mx-auto'>
    <p style={{ background:them.purpleColor}} className=' rounded-full w-8 h-8  text-center  '/>
    <div className='   flex gap-3 '>
    <h6 className=' pr-2' >Samantha William<br/>Lorem ipsumdolor  </h6> 
    <p>12:45 PM</p> 
    </div>
    </div>
    <div style={{ background:them.gray }} className='w-64 h-[1px] mx-auto'/>
    </>
    )
})}
<button  className=' rounded-full mt-4 mr-5 border-0 w-64 h-11' style={{color:them.fontColor, background:them.button }}>
View More
</button>


























<div className=' mt-5 '>
<h5 className=' mr-3' style={{ color:them.fontColor }}>Current Foods Menu</h5>

<div style={{background:them.purpleColor }} className=' rounded-2xl mt-4 mr-8  w-60 h-32'/>
<h6 className=' mr-10 mt-4' style={{ color:them.fontColor }}>Beef Steak with Fried Potato <br/>Lorem ipsum dolor sit amet... </h6>



<div style={{background:them.purpleColor }} className=' rounded-2xl mt-4 mr-8   w-60 h-32'/>
<h6 className=' mr-10 mt-4' style={{ color:them.fontColor }}>Beef Steak with Fried Potato <br/>Lorem ipsum dolor sit amet... </h6>



<div style={{background:them.purpleColor }} className=' rounded-2xl mt-4 mr-8   w-60 h-32'/>
<h6 className=' mr-10 mt-4' style={{ color:them.fontColor }}>Beef Steak with Fried Potato <br/>Lorem ipsum dolor sit amet... </h6>




<button  className=' rounded-full mr-5 border-0   mt-2 w-64 h-11' style={{color:them.fontColor, background:them.button }}>
View More
</button>

</div>










</div>

</div>





</div>

  )
}

export default SidBar2