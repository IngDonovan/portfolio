import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PortContext } from "../../Context";
import { IoMenu } from "react-icons/io5";
import "./Navbar.scss"

const Navbar = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <IoMenu className="menu" />
                    </li>
                </ul>
            </nav>
        </header>
    );

};

export default Navbar;