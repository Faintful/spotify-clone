import './Footer.css'

//import icons from react per social media
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


export default function Footer (){
    return (
        
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
                    
                    {/* pulsanti social media*/}

                    <div className='socialmedia'>
                        <button className='btninst'><a href="https://www.instagram.com/spotify/ "target='_blank'><FaInstagramSquare /></a></button>
                        <button className='btntwitter'><a href="https://twitter.com/Spotify" target='_blank'><FaSquareTwitter /></a></button>
                        <button className='btnface'><a href="https://www.facebook.com/Spotify/"target='_blank'><FaFacebookSquare /></a></button>
                    </div>
                   
                </div>

                {/* copyright /autori*/}
                  
                <div className='copyright'>© 2023 Copyright: Spotify-Clone </div>
                <div className='copyright'>Carlomario Silva Toro - Dheyne Ghisolfi - Enrico Garozzo - Giacomo Giraldi - Toukir Islam Shovo - Vladimir Topchin</div>           
                

            </footer>

            
        
    );
}
   