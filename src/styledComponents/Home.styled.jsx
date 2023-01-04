import styled from "styled-components";

const fontStyles = {
    h1:{
        large: "150px",
        small: "80px"
    },
    h3: {
        large: "28px",
        medium: "20px",
        small: "16px"
    },
    p: {
        large: "18px",
        medium: "16px",
        small: "15px",
        lineHeight: {
            large: "32px",
            medium: "28px",
            small: "25px"
        },
        width: {
            large:"92%",
            medium: "70%",
            small: "85%"
        }
    },
    span: {
        large: "32px",
        small: "20px"
    }
}


export const StyledHome = styled.main`
    background: url(${({bgUrl}) => bgUrl.small}) no-repeat center center / cover;
    width: 100%;
    @media(min-width: ${({theme}) => theme.breakpoints.small}){
        background: url(${({bgUrl}) => bgUrl.medium}) no-repeat center center / cover;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.large}){
        background: url(${({bgUrl}) => bgUrl.large}) no-repeat center center / cover;
        height: 100vh;
    }
    .home-content{
        padding-top: 200px;
        padding-bottom: 40px;
        &>div{
            flex-grow: 1;
            @media(min-width: ${({theme}) => theme.breakpoints.large}){
                flex-basis: 50%;
            }
            flex-basis: 100%;
        }
        .content{
            @media(max-width: ${({theme}) => theme.breakpoints.large}){
                text-align: center;
            }
            h3{
                font-family: ${({theme}) => theme.fonts.barlowCondensed};
                color: ${({theme}) => theme.colors.lightBlue};
                font-weight: 400;
                font-size: ${fontStyles.h3.small};
                @media(min-width: ${({theme}) => theme.breakpoints.medium}){
                    font-size: ${fontStyles.h3.medium};
                }
                @media(min-width: ${({theme}) => theme.breakpoints.large}){
                    font-size: ${fontStyles.h3.large};
                }
            }
            h1{
                font-family: ${({theme}) => theme.fonts.bellefair};
                color: ${({theme}) => theme.colors.light};
                font-size: ${fontStyles.h1.small};
                font-weight: 400;
                @media(min-width: ${({theme}) => theme.breakpoints.small}){
                    font-size: ${fontStyles.h1.large};
                }
            }
            p{
                font-family: ${({theme}) => theme.fonts.barlow};
                color: ${({theme}) => theme.colors.lightBlue};
                font-size: ${fontStyles.p.small};
                line-height: ${fontStyles.p.lineHeight.small};
                @media(min-width: ${({theme}) => theme.breakpoints.small}){
                    width: ${fontStyles.p.width.small};
                    margin: 0 auto;
                }
                @media(min-width: ${({theme}) => theme.breakpoints.medium}){
                    font-size: ${fontStyles.p.medium};
                    line-height: ${fontStyles.p.lineHeight.medium};
                    width: ${fontStyles.p.width.medium};
                    margin:0 auto;
                }
                @media(min-width: ${({theme}) => theme.breakpoints.large}){
                    font-size: ${fontStyles.p.large};
                    line-height: ${fontStyles.p.lineHeight.large};
                    width: ${fontStyles.p.width.large};
                    margin: 0;
                }
            }
        }
        .image{
            align-self: flex-end;
            display: flex;
            width: 100%;
            @media(min-width: ${({theme}) => theme.breakpoints.large}){
                justify-content: flex-end;
            }
            justify-content: center;
            .explore-circle{
                width: 150px;
                height: 150px;
                background-color: ${({theme}) => theme.colors.light};
                border-radius: 50%;
                @media(min-width: ${({theme}) => theme.breakpoints.medium}){
                    width: 242px;
                    height: 242px;
                }
                @media(min-width: ${({theme}) => theme.breakpoints.large}){
                    width: 274px;
                    height: 274px;
                }
                span{
                    color: #0B0D17;
                    font-weight: 400;
                    font-size: ${fontStyles.span.small};
                    font-family: ${({theme}) => theme.fonts.bellefair};
                    @media(min-width: ${({theme}) => theme.breakpoints.medium}){
                    font-size: ${fontStyles.span.large};
                }
                }
            }
        }
    }
`