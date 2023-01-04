import React from 'react'
import cancelLogoUrl from '../assets/shared/icon-close.svg'
import { StyledSideNav } from '../styledComponents/SideNav.styled'
import { Flex } from '../styledComponents/util/Utils'
import { siteData as data } from '../data/site_data'
import { NavLink } from 'react-router-dom'

const SideNav = ({ isSideNavActive, toggleSideNav}) => {
  return (
    <StyledSideNav className={!isSideNavActive && "not-active"}>
        <div className="cancel-logo"
            onClick={() => toggleSideNav(false)}
        >
            <img src={cancelLogoUrl} alt="close-icon" />
        </div>
        <Flex
            className='nav-items'
            direction="column"
            gap="20px"
        >
            {data.mainNavigation.map(nav => (
                <NavLink 
                    to={nav.path}
                    className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                    key={nav.num}
                    onClick={() => toggleSideNav(false)}
                ><strong>{nav.num}</strong>{nav.name.toUpperCase()}</NavLink>
            ))}
        </Flex>
    </StyledSideNav>
  )
}

export default SideNav