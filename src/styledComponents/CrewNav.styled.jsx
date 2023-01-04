import styled from "styled-components";

export const StyledCrewNav = styled.nav`
    margin-top: 7px;
    @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
        margin-top: 40px;
    }
    @media(min-width: ${({ theme }) => theme.breakpoints.large}){
        margin-top: 90px;
    }
    .nav-item{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.light};
        opacity: 0.17;
        cursor: pointer;
        &:hover{
            background: ${({ theme }) => theme.colors.hoverLight};
            opacity: 1;
        }
        &.active{
            background: ${({ theme }) => theme.colors.light};
            opacity: 1;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
            width: 10px;
            height: 10px;
        }
        @media(min-width: ${({ theme }) => theme.breakpoints.large}){
            width: 15px;
            height: 15px;
        }
    }
`