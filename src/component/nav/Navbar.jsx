
import './Navbar.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';



export default Navbar

function Navbar () {
    return (           
    <nav className='Wrapper flex justify-between items-center sticky'>

        {/*pulsanti frecce */}       
            <div className= 'row'>
                
                <button className='arrow1'><IoIosArrowBack /></button>
                <button className='arrow2'><IoIosArrowForward /></button>
                
                {/*search bar*/}
                <div className=' pointer-events-auto flex items-center justify-center bg-[#434343] gap-2 text-sm w-full py-2 px-3 ring-1 ring-slate-900/10 text-slate-500 rounded-2xl'>          
                <i><CiSearch /></i>
                <input className= 'search' type='text' placeholder='Search...'></input> 
                </div>                                     
             
            </div>
       
      
        {/*pulsanti di accesso */}  
            <div>
                <Link to={"/signuppage"}>
                <button className='btn1'>Sign Up</button>
                </Link>
                <Link to={"/loginpage"}>
                <button className='btn2'>Log In</button>
                </Link>
            </div>
       
          
    </nav>
    );
}