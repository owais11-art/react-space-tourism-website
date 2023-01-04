import React from 'react'
import { Flex } from '../styledComponents/util/Utils'
import { StyledCrewNav } from '../styledComponents/CrewNav.styled'

const CrewNav = ({ className, members, handleClick }) => {
  return (
    <StyledCrewNav className={className}>
        <Flex 
            gap="20px"
            justifyContent_lg="flex-start" 
            justifyContent="center">
            {members.map(member => (
                <div 
                className={member.active ? "nav-item active" : "nav-item"}
                onClick={() => handleClick(member.id)}
                key={member.id}></div>
            ))}
        </Flex>
    </StyledCrewNav>
  )
}

export default CrewNav