import styled from "styled-components";

export const StyledTechnologyNav = styled.nav`
    .nav-item{
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.light};
        font-family: ${({ theme }) => theme.fonts.bellefair};
        font-weight: 400;
        font-size: 16px;
        border: 1px solid ${({ theme }) => theme.colors.hoverLight};
        border-radius: 50%;
        cursor: pointer;
        &:hover{
            border-color: ${({ theme }) => theme.colors.light};
        }
        &.active{
            background-color: ${({ theme }) => theme.colors.light};
            color: #0B0D17;
            border: none;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
            width: 60px;
            height: 60px; 
            font-size: 24px;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.large}){
            width: 80px;
            height: 80px;
            font-size: 32px;
        }
    }
`