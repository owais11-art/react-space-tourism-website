import React, { useState } from 'react'
import SingleDestination from '../components/SingleDestination'
import { StyledDestination } from '../styledComponents/Destination.styled'
import { Container } from '../styledComponents/util/Utils'
import { siteData as data } from '../data/site_data'
import { useHandleClick } from '../useHandleClick'
const Destination = () => {
  const [destinations, setDestinations] = useState(data.destinations)
  const backgrounds = data.backgrounds.destinations
  const handleClick = useHandleClick(destinations, setDestinations)
  return (
    <StyledDestination bgUrl={backgrounds}>
      <Container>
        {destinations.map(destination => (
          destination.active && <SingleDestination 
                                  key={destination.id}
                                  destination={destination}
                                  destinations={destinations}
                                  handleClick={handleClick}
                                  />
        ))}
      </Container>
    </StyledDestination>
  )
}

export default Destination