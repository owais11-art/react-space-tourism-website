import React from 'react'
import { StyledHome } from '../styledComponents/Home.styled'
import { Container, Flex } from '../styledComponents/util/Utils'
import { siteData as data } from '../data/site_data'
const Home = () => {
 const backgrounds = data.backgrounds.home
  return (
    <StyledHome bgUrl={backgrounds}>
      <Container>
        <Flex className='home-content' direction_lg="row" direction="column" gap="60px" gap_lg="0">
          <div className="content">
            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="image">
            <Flex className="explore-circle" justifyContent="center" alignItems="center">
              <span>
                EXPLORE
              </span>
            </Flex>
          </div>
        </Flex>
      </Container>
    </StyledHome>
  )
}

export default Home