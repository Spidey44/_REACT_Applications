import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      {/* <Link to='/about'>
        <FaQuestion size={40} />
      </Link> */}
    <a href='/about'>
    <FaQuestion size={40} />
    </a>
    </div>
  )
}

export default AboutIconLink