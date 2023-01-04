import React, { useState } from 'react'
import { StyledCrew } from '../styledComponents/Crew.styled'
import { Container } from '../styledComponents/util/Utils'
import { siteData as data } from '../data/site_data'
import { useHandleClick } from '../useHandleClick'
import SingleCrew from '../components/SingleCrew'
const Crew = () => {
  const [crewMembers, setCrewMembers] = useState(data.crew)
  const backgrounds = data.backgrounds.crew
  const handleClick = useHandleClick(crewMembers, setCrewMembers)
  return (
    <StyledCrew bgUrl={backgrounds}>
      <Container>
        {crewMembers.map(crewMember => (
          crewMember.active && <SingleCrew
                                   key={crewMember.id}
                                   member={crewMember}
                                   members={crewMembers}
                                   handleClick={handleClick}
                                   />
        ))}
      </Container>
    </StyledCrew>
  )
}

export default Crew