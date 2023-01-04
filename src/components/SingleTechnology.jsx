import React from 'react'
import { StyledCommonHead } from '../styledComponents/CommonHead.styled'
import { Flex } from '../styledComponents/util/Utils'
import TechnologyNav from './TechnologyNav'

const SingleTechnology = ({ technology: {name, images:{portrait, landscape}, description}, technologies, handleClick}) => {
    const imageAltText = name.includes(" ") ? name.toLowerCase().split(" ").join("-") : name.toLowerCase()
    return (
        <Flex
            className='technology-content-wrapper' 
            justifyContent="space-between"
            direction_lg="row"
            direction="column-reverse">
            <div className="content-box">
                <StyledCommonHead className='head content-head'><span>03</span> SPACE LAUNCH 101</StyledCommonHead>
                <Flex
                    className='cont-tech'
                    gap_lg="70px"
                    gap_md="60px"
                    gap="40px"
                    direction_lg="row"
                    direction="column"
                >
                    <TechnologyNav technologies={technologies} handleClick={handleClick} />
                    <div className="content">
                        <h4>THE TERMINOLOGY…</h4>
                        <h1>{name.toUpperCase()}</h1>
                        <p>{description}</p>
                    </div>
                </Flex>
            </div>
            <div className="technology-image">
                <StyledCommonHead className='head image-head'><span>03</span> SPACE LAUNCH 101</StyledCommonHead>
                <img src={portrait} alt={imageAltText} className="portrait" />
                <img src={landscape} alt={imageAltText} className="landscape" />
            </div>
        </Flex>
    )
}

export default SingleTechnology