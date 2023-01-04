import styled from "styled-components";

export const StyledDestinationNav = styled.nav`
    .nav-items{
        .nav-item{
            font-family: ${({ theme }) => theme.fonts.barlowCondensed};
            color: ${({ theme }) => theme.colors.light};
            font-size: 16px;
            font-weight: 400;
            padding: 10px 0;
            cursor: pointer;
            &.active{
                border-bottom: 3px solid ${({ theme }) => theme.colors.light};
            }
            &:hover{
                border-bottom: 3px solid ${({ theme }) => theme.colors.hoverLight};;
            }
        }
    }
`