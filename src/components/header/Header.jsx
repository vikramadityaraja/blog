import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='headertitles'>
            <span className='headertitlesm'>React & Node</span>
            <span className='headertitlelg'>Blog</span>
        </div>
        <img src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='headerimg' className='headerimg'/>
    </div>
  )
}

export default Header