import styled from "styled-components";

const flexDefaults = {
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "row",
    gap: "0"
}

export const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    justify-content: ${({justifyContent}) => justifyContent ?? "flex-start"};
    align-items: ${({alignItems}) => alignItems ?? "stretch"};
    gap: ${({gap}) => gap ?? "0"};
    flex-direction: ${({direction}) => direction ?? "row"};
    @media(min-width: ${({theme}) => theme.breakpoints.small}){
        flex-direction: ${({direction_sm, direction}) => direction_sm ?? direction};
        gap: ${({gap_sm, gap}) => gap_sm ?? gap};
        justify-content: ${({justifyContent_sm, justifyContent}) => justifyContent_sm ?? justifyContent};
    }
    @media(min-width: ${({theme}) => theme.breakpoints.medium}){
        flex-direction: ${({direction_md, direction}) => direction_md ?? direction};
        gap: ${({gap_md, gap}) => gap_md ?? gap};
        justify-content: ${({justifyContent_md, justifyContent}) => justifyContent_md ?? justifyContent};
    }
    @media(min-width: ${({theme}) => theme.breakpoints.large}){
        flex-direction: ${({direction_lg, direction}) => direction_lg ?? direction};
        gap: ${({gap_lg, gap}) => gap_lg ?? gap};
        justify-content: ${({justifyContent_lg, justifyContent}) => justifyContent_lg ?? justifyContent};
    }
`