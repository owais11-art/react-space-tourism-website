import styled from "styled-components";

const styles = {
    fontStyles: {
        head: {
            large: "28px",
            medium: "20px",
            small: "16px"
        }
    }
}

export const StyledCommonHead = styled.h3`
     padding-top: 0px;
     font-family: ${({ theme }) => theme.fonts.barlowCondensed};
     color: ${({ theme }) => theme.colors.light};
     font-size: ${styles.fontStyles.head.small};
     font-weight: 400;
     letter-spacing: 4.72px;
     margin-bottom: 50px;
     text-align: center;
     text-transform: uppercase;
     opacity: 1;
     @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
         font-size: ${styles.fontStyles.head.medium};
         text-align: left;
     }
     @media(min-width: ${({ theme }) => theme.breakpoints.large}){
         font-size: ${styles.fontStyles.head.large};
         text-align: left;
     }
     span{
         opacity: 0.25;
         font-weight: 700;
     }
`