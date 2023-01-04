import React from 'react'
import DestinationNav from './DestinationNav'
import { Flex } from '../styledComponents/util/Utils'
import { StyledCommonHead } from '../styledComponents/CommonHead.styled'

const SingleDestination = ({ destination:{name, image, description, distance, travel}, destinations, handleClick }) => {
  return (
    <Flex 
      className='destination-content-wrapper' 
      direction_lg="row" 
      direction="column" 
      gap="40px"
      gap_lg="0"
    >
        <div className="destination-image">
            <StyledCommonHead className='head'><span>01</span> Pick your destination</StyledCommonHead>
            <img src={image} alt="destination_image" />
        </div>
        <div className="destination-content">
            <DestinationNav destinations={destinations} handleClick={handleClick} />
            <h1>{name.toUpperCase()}</h1>
            <p>{description}</p>
            <Flex 
              className='time-and-distance' 
              gap_sm="60px"
              gap_md="60px"
              gap_lg="60px"
              gap="30px"
              justifyContent="center"
              justifyContent_lg="flex-start"
              direction_sm="row"
              direction_lg="row"
              direction_md="row"
              direction="column"
            >
              <div className="distance">
                <small>AVG.DISTANCE</small>
                <h4>{distance.toUpperCase()}</h4>
              </div>
              <div className="time">
                <small>EST. TRAVEL TIME</small>
                <h4>{travel.toUpperCase()}</h4>
              </div>
            </Flex>
        </div>
    </Flex>
  )
}

export default SingleDestination