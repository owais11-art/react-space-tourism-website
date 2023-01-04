import React from 'react'
import { Flex } from '../styledComponents/util/Utils'
import { StyledTechnologyNav } from '../styledComponents/TechnologyNav.styled'

const TechnologyNav = ({technologies, handleClick}) => {
  return (
    <StyledTechnologyNav>
        <Flex
            direction_lg="column"
            gap="20px"
            justifyContent="center"
            justifyContent_lg="flex-start">
            {technologies.map(technology => (
                <div className={technology.active ? "nav-item active": "nav-item"} 
                    key={technology.id}
                    onClick={() => handleClick(technology.id)}
                    >{technology.id}</div>
            ))}
        </Flex>
    </StyledTechnologyNav>
  )
}

export default TechnologyNav