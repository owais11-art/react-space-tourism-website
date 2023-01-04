import styled from "styled-components";

const styles = {
    fontStyles: {
        h3: {
            large: "32px",
            medium: "24px",
            small: "16px"
        },
        h1: {
            large: "56px",
            medium: "40px",
            small: "24px"
        },
        p: {
            large: "18px",
            medium: "16px",
            small: "15px"
        }
    }
}

export const StyledCrew = styled.div`
    background: url(${({bgUrl}) => bgUrl.small}) no-repeat center center / cover;
    width: 100%;
    padding-bottom: 20px;
    @media(min-width: ${({theme}) => theme.breakpoints.small}){
        background: url(${({bgUrl}) => bgUrl.medium}) no-repeat center center / cover;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.large}){
        background: url(${({bgUrl}) => bgUrl.large}) no-repeat center center / cover;
    }
    .crew-content-wrapper{
        padding-top: 130px;
        @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
            padding-top: 180px;
        }
        &>div{
            flex-grow: 1;
        }
        .crew-member-image{
            align-self: center;
            border-bottom: 1px solid ${({ theme }) => theme.colors.hoverLight};
            @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                border-bottom: none;
            }
            img{
                display: block;
                margin: 0 auto;
                width: 60%;
                @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                    width: 100%;
                }
            }
        }
        .head-in-content{
            display: none;
            @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                display: block;
            }
        }
        .head-in-image{
            display: block;
            @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                display: none;
            }
        }
        .content{
            flex-basis: 78%;
            .upper-nav{
                display: block;
                @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                    display: none;
                }
            }
            .bottom-nav{
                display: none;
                @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                    display: block;
                }
            }
        }
        h3:not(.head){
            font-family: ${({ theme }) => theme.fonts.bellefair};
            font-size: ${styles.fontStyles.h3.small};
            font-weight: 400;
            color: ${({ theme }) => theme.colors.light};
            opacity: 0.5;
            padding-top: 20px;
            mix-blend-mode: normal;
            margin-bottom: 15px;
            text-align: center;
            @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                padding-top: 80px;
                font-size: ${styles.fontStyles.h3.medium};
            }
            @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                padding-top: 140px;
                font-size: ${styles.fontStyles.h3.large};
                text-align: left;
            }
        }
        h1{
            font-family: ${({ theme }) => theme.fonts.bellefair};
            font-weight: 400;
            font-size: ${styles.fontStyles.h1.small};
            color: ${({ theme }) => theme.colors.light};
            margin-bottom: 30px;
            text-align: center;
            @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                font-size: ${styles.fontStyles.h1.medium};
            }
            @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                font-size: ${styles.fontStyles.h1.large};
                text-align: left;
            }
        }
        p{
            font-family: ${({ theme }) => theme.fonts.barlow};
            font-weight: 400;
            font-size: ${styles.fontStyles.p.small};
            color: ${({ theme }) => theme.colors.lightBlue};
            line-height: 32px;
            text-align: center;
            margin: 0 auto;
            @media(min-width: ${({ theme }) => theme.breakpoints.small}){
                width: 80%;
            }
            @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                font-size: ${styles.fontStyles.p.medium};
                width: 58%;
            }
            @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                font-size: ${styles.fontStyles.p.large};
                width: 90%;
                text-align: left;
                margin: 0;
            }
        }
    }
`