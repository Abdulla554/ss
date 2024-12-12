import { useAppSelector } from "@/publicStore/store/store";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
function SearchBar() {
  const them = useAppSelector((state) => state.theme.colors);
  return (
    <div  className="  mt-[40px] ">
      <div className=" flex  justify-between " style={{ color:them.fontColor }}>
        <h3>Dashboard</h3>
        
        <form className=' relative'>
                  
                  <input  className=" w-56  h-10 rounded-full " id="serch" placeholder="         Search here..."/>
                  <SearchIcon   style={{ position:"absolute",right:190,top:10,color:"black" }}/>
</form>

      </div>


      <div style={{ color:them.fontColor , background:them.Navsheet }} className=" rounded-xl mt-4 h-24 w-full">
     
     
     
      <div className=" container px-10 flex justify-between">











<div className=" flex  gap-3 pt-4">
<h6 style={{color:them.blackColor, background:them.button}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SchoolIcon/></h6>
 <h6>Students<br/>932 </h6>
</div>



<div className=" flex  gap-3 pt-4">
<h6 style={{color:them.blackColor, background:them.OrngColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SchoolIcon/></h6>
 <h6 >Teachers<br/>754 </h6>
</div>


<div className=" flex  gap-3 pt-4">
<h6 style={{color:them.blackColor, background:them.ylawoColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SchoolIcon/></h6>
 <h6 >Events<br/>Admin </h6>
</div>


<div className=" flex  gap-3 pt-4">
<h6 style={{color:them.blackColor, background:them.gray}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SchoolIcon/></h6>
 <h6 >Food<br/>Admin </h6>
</div>








 </div>



      </div>
    </div>
  )
}

export default SearchBar