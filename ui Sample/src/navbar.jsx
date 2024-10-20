import lab from '../src/assets/labIcons.png'
import menu from '../src/assets/menu.png'
import user from '../src/assets/user.jpg'

function Nav() {
    return  (
    <div className="nav">
        <div className="nav1">
        <a className='navlink' href="#">About</a>
        <a className='navlink'href="#">Store</a>
        </div>
        <div className="nav2">
        <a className='navlink' href="#">Gmail</a>
        <a className='navlink' href="#">Images</a>
        <img className='navImg' src={lab} alt="" />
        <img className='menu' src={menu} alt="" />
        <img className='profile' src={user} alt="" />
        </div>
    </div>

)}

export default Nav