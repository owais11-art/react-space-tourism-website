import React from 'react'
import { Flex } from '../styledComponents/util/Utils'
import { StyledCommonHead } from '../styledComponents/CommonHead.styled'
import CrewNav from './CrewNav'

const SingleCrew = ({ member:{name, image, role, bio}, members, handleClick}) => {
  return (
    <Flex 
      className='crew-content-wrapper'
      direction_lg="row" 
      direction_md="column"
      direction="column-reverse" 
      gap="40px"
      gap_lg="0"
      >
        <div className="content">
          <StyledCommonHead className='head head-in-content'><span>02</span> meet your crew</StyledCommonHead>
          <CrewNav className="upper-nav" members={members} handleClick={handleClick} />
          <h3>{role.toUpperCase()}</h3>
          <h1>{name.toUpperCase()}</h1>
          <p>{bio}</p>
          <CrewNav className="bottom-nav" members={members} handleClick={handleClick} />
        </div>
        <div className="crew-member-image">
            <StyledCommonHead className='head head-in-image'><span>02</span> meet your crew</StyledCommonHead>
            <img src={image} alt={name.toLowerCase().split(" ").join("-") + "-crew-member"} />
        </div>
    </Flex>
  )
}

export default SingleCrew