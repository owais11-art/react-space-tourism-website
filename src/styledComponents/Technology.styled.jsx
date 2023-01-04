import styled from "styled-components";

const styles = {
    fontStyles: {
        h4: {
            large: "16px",
            small: "14px"
        },
        h1: {
            large: "56px",
            medium: "40px",
            small: "24px"
        },
        p: {
            large: "18px",
            medium: "16px",
            small: "15px",
            lineHeight: {
                large: "32px",
                medium: "28px",
                small: "25px"
            }
        }
    }
}

export const StyledTechnology = styled.div`
    background: url(${({bgUrl}) => bgUrl.small}) no-repeat center center / cover;
    width: 100%;
    padding-bottom: 20px;
    @media(min-width: ${({theme}) => theme.breakpoints.small}){
        background: url(${({bgUrl}) => bgUrl.medium}) no-repeat center center / cover;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.large}){
        background: url(${({bgUrl}) => bgUrl.large}) no-repeat center center / cover;
    }
    .technology-content-wrapper{
        padding-top: 160px;
        .content-box{
            padding-left: 0;
            @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                padding-left: 100px;
            }
            .cont-tech{
                margin-top: 0;
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    margin-top: 80px;
                }
            }
            .content-head{
                display: none;
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    display: block;
                }
            }
            .content{
                h4{
                    font-family: ${({ theme }) => theme.fonts.barlowCondensed};
                    font-weight: 400;
                    font-size: ${styles.fontStyles.h4.small};
                    color: ${({ theme }) => theme.colors.lightBlue};
                    text-align: center;
                    @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                        font-size: ${styles.fontStyles.h4.large};
                    }
                    @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                        text-align: left;
                    }
                }
                h1{
                    font-family: ${({ theme }) => theme.fonts.bellefair};
                    font-weight: 400;
                    font-size: ${styles.fontStyles.h1.small};
                    color: ${({ theme }) => theme.colors.light};
                    margin-top: 10px;
                    margin-bottom: 15px;
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
                    line-height: ${styles.fontStyles.p.lineHeight.small};
                    color: ${({ theme }) => theme.colors.lightBlue};
                    width: 90%;
                    margin: 0 auto;
                    text-align: center;
                    @media(min-width: ${({ theme }) => theme.breakpoints.small}){
                        width: 70%;
                    }
                    @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                        font-size: ${styles.fontStyles.p.medium};
                        line-height: ${styles.fontStyles.p.lineHeight.medium};
                    }
                    @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                        font-size: ${styles.fontStyles.p.large};
                        line-height: ${styles.fontStyles.p.lineHeight.large};
                        text-align: left;
                        margin: 0;
                    }
                }
            }
        }
        .technology-image{
            flex-basis: 90%;
            padding: 60px 0;
            .image-head{
                display: block;
                text-align: left;
                margin-left: 2%;
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    display: none;
                }
            }
            .portrait{
                display: none;
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    display: block;
                }
            }
            .landscape{
                display: block;
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    display: none;
                }
            }
        }
    }
`