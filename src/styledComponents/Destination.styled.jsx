import styled from "styled-components";

const styles = {
    fontStyles: {
        h1: {
            large: "100px",
            medium: "80px",
            small: "56px"
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
    },
    image: {
        large: "100%",
        small: "50%"
    }
}

export const StyledDestination = styled.div`
    background: url(${({bgUrl}) => bgUrl.small}) no-repeat center center / cover;
    width: 100%;
    padding-bottom: 20px;
    @media(min-width: ${({theme}) => theme.breakpoints.small}){
        background: url(${({bgUrl}) => bgUrl.medium}) no-repeat center center / cover;
    }
    @media(min-width: ${({theme}) => theme.breakpoints.large}){
        background: url(${({bgUrl}) => bgUrl.large}) no-repeat center center / cover;
    }
    .destination-content-wrapper{
        padding-top: 130px;
        @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
            padding-top: 180px;
        }
        .destination-image{
            img{
                width: ${styles.image.small};
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    width: ${styles.image.large};
                }
                height: auto;
                display: block;
                margin: 0 auto;
            }
        }
        .destination-content{
            align-self: center;
            flex-grow: 1;
            @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                padding-left: 60px;
            }
            h1{
                font-family: ${({ theme }) => theme.fonts.bellefair};
                color: ${({ theme }) => theme.colors.light};
                font-size: ${styles.fontStyles.h1.small};
                text-align: center;
                @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                    font-size: ${styles.fontStyles.h1.medium};
                }
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    font-size: ${styles.fontStyles.h1.large};
                    text-align: left;
                }
                font-weight: 400;
                margin-top: 20px;
            }
            p{
                color: ${({ theme }) => theme.colors.lightBlue};
                width: 100%;
                margin: 0 auto;
                font-family: ${({ theme }) => theme.fonts.barlow};
                font-size: ${styles.fontStyles.p.small};
                text-align: center;
                @media(min-width: ${({ theme }) => theme.breakpoints.medium}){
                    font-size: ${styles.fontStyles.p.medium};
                    width: 80%;
                    line-height: ${styles.fontStyles.p.lineHeight.medium}; 
                }
                @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                    font-size: ${styles.fontStyles.p.large};
                    text-align: left;
                    width: 90%;
                    max-width: 444px;
                    margin: 0;
                    line-height: ${styles.fontStyles.p.lineHeight.large}; 
                }
                line-height: ${styles.fontStyles.p.lineHeight.small};  
            }
            .time-and-distance{
                margin-top: 40px;
                padding-top: 30px;
                border-top: 1px solid #383B4B;
                small{
                    font-family: ${({ theme }) => theme.fonts.barlowCondensed};
                    font-weight: 400;
                    font-size: 14px;
                    letter-spacing: 2.36px;
                    color: ${({ theme }) => theme.colors.lightBlue};
                    display: block;
                    @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                        text-align: left;
                    }
                    text-align: center;
                }
                h4{
                    font-family: ${({ theme }) => theme.fonts.bellefair};
                    color: ${({ theme }) => theme.colors.light};
                    font-size: 28px;
                    font-weight: 400;
                    margin-top: 10px;
                    @media(min-width: ${({ theme }) => theme.breakpoints.large}){
                        text-align: left;
                    }
                    text-align: center;
                }
            }
        }
    }
`