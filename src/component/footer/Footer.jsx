import './Footer.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer (){
    return (
        <div>
            <footer>
                <div className='menu'>
                    <div className='submenu'>
                        <h1>Company</h1>
                        <p><a>About</a></p>
                        <p><a>Jobs</a></p>
                        <p><a>For the Record</a></p>
                    </div>
                    
                    <div className='submenu'>
                    <h1>Communities</h1> 
                        <p><a>For Artists</a></p>
                        <p><a>Advertsing</a></p>
                        <p><a>Investors</a></p>
                        <p><a>Vendors</a></p>                   
                    </div>

                    <div className='submenu'>
                        <h1>Useful links</h1>
                        <p><a>Support</a></p>
                        <p><a>Free Mobile App</a></p>
                        <p><a>Consumer rights</a></p>                                          
                    </div>


                    <div className='socialmedia'>
                        <button className='btninst'><FaInstagramSquare /></button>
                        <button className='btntwitter'><FaSquareTwitter /></button>
                        <button className='btnface'><FaFacebookSquare /></button>
                    </div>


                   
                </div>
                  
                <div className='copyright'>© 2023 Copyright: Spotify-Clone</div>           
                

            </footer>

            
        </div>
    );
}
   