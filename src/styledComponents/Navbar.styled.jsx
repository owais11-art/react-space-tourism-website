import styled from 'styled-components';

export const StyledNav = styled.nav`
    padding: 0 15px;
    @media(min-width:769px){
        flex-grow: 0.6;
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.7742px);
    }
    .nav-links{
        @media(max-width: 768px){
            display: none;
        }
    }
    .hamburger{
        @media(min-width: 769px){
            display: none;
        }
        display: block;
        width: 24px;
        height: 21px;
    }
    .link{
        padding: 38px 0;
        &.active{
            border-bottom: 3px solid #fff;
        }
        &:hover{
            border-bottom: 3px solid ${({ theme }) => theme.colors.hoverLight};
        }
    }
`
export const StyledHeader = styled.header`
    position: absolute;
    z-index: 100;
    background-color: transparent;
    width: 100%;
    top: 40px;
    .logo{
        width:48px;
        height: 48px;
        margin-left: 2%;
    }
    .line{
        @media(min-width: 991px){
            display: block;
            height: 1px;
            background-color: #fff;
            flex-grow: 0.5;
            opacity: 0.25;
            margin-left: 40px;
        }
        display: none;
    }
`