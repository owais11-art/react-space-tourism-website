import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6, p{
        margin: 0;
        padding: 0;
    }
    .link{
        display: block;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-family: 'Barlow Condensed', sans-serif;
    }
    body{
        width: 100%;
        height: 100%;
    }
    img{
        width: 100%;
        height: auto;
    }
`
export default Global