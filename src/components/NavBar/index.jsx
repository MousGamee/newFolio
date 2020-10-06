import React from 'react'
import { FaBars } from 'react-icons/fa'
import  {
    Nav, 
    NavBarContainer, 
    NavLogo,
    NavH1,
    MobileIcon, 
    NavMenu, 
    NavLinks, 
    NavItem,
    NavBtn,
    NavBtnLink 
} from './NavBarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        <NavH1>M</NavH1>
                        <MobileIcon onClick={ toggle }>
                            <FaBars />
                        </MobileIcon>
                    </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">Moi</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover">Mon boulot</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services">Mes skils</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup">Sign up</NavLinks>
                            </NavItem>
                        
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign in</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navbar
