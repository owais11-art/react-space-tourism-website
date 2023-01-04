import React, { useState } from 'react'
import { siteData as data } from '../data/site_data'
import { useHandleClick } from '../useHandleClick'
import { StyledTechnology } from '../styledComponents/Technology.styled'
import SingleTechnology from '../components/SingleTechnology'

const Technology = () => {
  const [technologies, setTechnologies] = useState(data.technologies)
  const backgrounds = data.backgrounds.technologies
  const handleClick = useHandleClick(technologies, setTechnologies)
  return (
    <StyledTechnology bgUrl={backgrounds}>
      {technologies.map(technology => (
        technology.active && <SingleTechnology
                              key={technology.id}
                              technology={technology}
                              technologies={technologies}
                              handleClick={handleClick}
                               />
      ))}
    </StyledTechnology>
  )
}

export default Technology