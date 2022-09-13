import './post.css'
import LoremIpsum from 'react-lorem-ipsum'

function Post() {
  return (
    <div className='post'>
        <img className='postimg' 
        src='https://th.bing.com/th/id/R.89e61a0e8d6c44e509f8f2cf2f6fe4c7?rik=TCOJWt%2biIWQazQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f263693-nature-landscape-wildflowers-trees-calm-river-water-overcast-clouds.jpg&ehk=3Osm4z8dnIOblU0TL96czeVxkOM2Rqka97Z4A49AVKA%3d&risl=&pid=ImgRaw&r=0' 
        alt=''/>
        <div className='postinfo'>
          <span className='postcat'>Music</span>
          <span className='postcat'>Life</span>
        </div>
        <span className='posttitle'>
          Lorem ipsum dolor sit almost
        </span>
        <hr/>
        <span className='postdate'>1 hour ago</span>
        <p className='postdesc'>
          <LoremIpsum p={1}/>
        </p>
    </div>
  )
  }

export default Post