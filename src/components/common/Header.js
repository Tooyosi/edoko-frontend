import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';
import Logo from './Logo';
import { Link } from "react-router-dom"

const Header = ({ toggler, toggle: toggleSide, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleDropdown = (param) => setIsDropdown(param || !isDropdown);

    const sideOpen = Object.values(toggler).includes(true)

    const getActiveClassName = (url) => {
        if (`${window.location.pathname}${window.location.hash}` == url) {
            return "active"
        } else {
            return ''
        }
    }

    const changeNavActive = (param) => {
        // console.log(param)

    }

    window.addEventListener("scroll", changeNavActive)
    return (
        <Navbar color={`${sideOpen ? "transparent" : "white"}`} style={{boxShadow: sideOpen? 'none': '0px 1px 0px #E5E9F2'}} fixed="top" light expand="md">
            <Container>
                <Link className="nav-brand" to="/">
                    <Logo style={{ height: "50px" }} />
                </Link>
                {sideOpen ?
                    <i class="icofont-close icofont-2x pull-right cursor-pointer" onClick={() => toggleSide({ contact: false, order: false })}></i>

                    :
                    <>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className={`${getActiveClassName('/')}`}>
                                    <NavLink className="nav-link" href="/#howToBuy">How to buy</NavLink>
                                </NavItem>
                                <NavItem className={`${getActiveClassName('/#trackrecord')}`}>
                                    <NavLink href="/#faq">FAQs</NavLink>
                                </NavItem>
                                <NavItem className={`${getActiveClassName('/contact')}`}>
                                    {/* <Link className="nav-link" to="/contact">Contact Us</Link> */}
                                    <span onClick={() => toggleSide({ contact: true })} className="nav-link cursor-pointer" to="/contact">Contact Us</span>
                                </NavItem>
                                <NavItem className={`${getActiveClassName('/blog')}`}>
                                    {/* <Link to="/order"  className=" btn btn-dark rounded-pill" >Track an Order</Link> */}
                                    <span  onClick={() => toggleSide({ order: true })} className=" btn btn-dark rounded-pill" >Track an Order</span>

                                </NavItem>
                            </Nav>
                        </Collapse>
                    </>
                }
            </Container>
        </Navbar>
    );
}

export default Header;