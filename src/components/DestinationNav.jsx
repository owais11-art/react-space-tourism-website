import React from 'react'
import { Flex } from '../styledComponents/util/Utils'
import { StyledDestinationNav } from '../styledComponents/DestinationNav.styled'

const DestinationNav = ({ destinations, handleClick }) => {
  return (
    <StyledDestinationNav>
        <Flex 
          className='nav-items' 
          gap="40px" 
          justifyContent="center" 
          justifyContent_lg="flex-start"
        >
            {destinations.map(destination => (
                <div 
                className={destination.active ? 'nav-item active' : 'nav-item'} 
                key={destination.id}
                onClick={() => handleClick(destination.id)}
                >{destination.name}</div>
            ))}
        </Flex>
    </StyledDestinationNav>
  )
}

export default DestinationNav