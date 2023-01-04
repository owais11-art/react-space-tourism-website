import React from 'react'
import logoUrl from "../assets/shared/logo.svg"
import hamURL from "../assets/shared/icon-hamburger.svg"
import { StyledNav, StyledHeader } from '../styledComponents/Navbar.styled'
import { Flex } from '../styledComponents/util/Utils'
import { NavLink } from 'react-router-dom'
import { siteData as data } from '../data/site_data'

const Navbar = ({toggleSideNav}) => {
  return (
    <StyledHeader>
            <Flex justifyContent="space-between" alignItems="center">
                <div className="logo">
                <img src={logoUrl} alt="logo-company" />
                </div>
                <div className="line"></div>
                <StyledNav>
                    <Flex gap="40px" justifyContent="center" className='nav-links'>
                        {data.mainNavigation.map(nav => (
                            <NavLink 
                            to={nav.path}
                            className={({isActive}) => isActive ? "link active" : "link"} 
                            key={nav.num}>
                            <strong>{nav.num}</strong> {nav.name}
                            </NavLink>
                        ))}
                    </Flex>
                    <div className="hamburger"
                        onClick={() => toggleSideNav(true)}
                    >
                        <img src={hamURL} alt="hamburger-icon" />
                    </div>
                </StyledNav>
            </Flex>
    </StyledHeader>
  )
}

export default Navbar