import styled from "styled-components";

export const StyledSideNav = styled.aside`
    &.not-active{
        width: 0;
    }
    overflow: hidden;
    position: fixed;
    z-index: 101;
    top: 0;
    right: 0;
    transition: all 0.5s;
    height: 100vh;
    width: 254px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
    .cancel-logo{
        width: 19.09px;
        height: 19.09px;
        position: absolute;
        top: 33.95px;
        right: 26.45px;
    }
    .nav-items{
        margin-top: 100px;
        margin-left: 30px;
        .nav-item{
            display: block;
            padding: 10px 0;
            font-family: ${({ theme }) => theme.fonts.barlowCondensed};
            color: ${({ theme }) => theme.colors.light};
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 2.7px;
            text-decoration: none;
            &.active{
                border-right: 4px solid ${({ theme }) => theme.colors.light};
            }
            strong{
                width: 10px;
                height: 10px;
                margin-right: 2px;
            }
        }
    }
`