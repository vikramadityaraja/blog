import './header.css'
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Ms Madi', 'Cedarville Cursive', 'Pacifico']
      }
    });
   }, []);
  
  return (
    <div className='header'>
        <div className='headertitles'>
            <span className='headertitlesm'>Siddu & Lalitha's</span>
            <span className='headertitlelg'>Wedding</span>
        </div>
        <img src='./pics/coverpic.JPG'
        alt='headerimg' className='headerimg'/>
    </div>
  )
}

export default Header