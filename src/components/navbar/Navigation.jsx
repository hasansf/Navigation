

import { Link, NavLink } from "react-router-dom";
import style from './Nav.module.css'


const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <div className={style.container}> 
                <div className={style.items}>
                <div className={style.logo}>
                    <h1>All Categories</h1>
                </div>
                <div className= {style.menu}>
                    <ul className={style.main_menu}>
                        <li>
                            <NavLink to = '/'>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to = '/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to = '/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to = '/pages'>Pages +</NavLink>
                            <ul className={style.dropdown}>
                                <li className={style.dropdown_item}>
                                    <Link>DropDown</Link>
                                    <Link>DropDown</Link>
                                    <Link>DropDown</Link>
                                    <Link>DropDown</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to = '/userdashboard'>UserDashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to = '/contact'>Contact</NavLink>
                        </li>

                    </ul>
                </div>
                <div className={style.btn}>
                    <button>Beacame A Vendor</button>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;