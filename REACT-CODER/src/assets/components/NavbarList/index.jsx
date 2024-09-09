import './index.css';

const NavbarList= ({label, href}) =>{
    
    return(
        <li className="navbar-item">
            <a href={href} className='navbar--link'>{label}</a>
        </li>
    )
};

export default NavbarList;