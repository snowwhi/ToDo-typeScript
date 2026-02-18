
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
  <ul className='absolute top-0 bg-white w-full h-10 font-bold text-xl  text-slate-950 flex justify-around items-center'>
    <li><Link to='/'>UseRef Approach</Link></li>
    <li> <Link to='/context'>Context api</Link></li>
      <li> <Link to='/Redux'>Redux Toolkit</Link></li>
  </ul>
  )
}

export default Nav