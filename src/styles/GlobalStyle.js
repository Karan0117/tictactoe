// images
import circleImg from "../media/circleImg.svg";
// import circleImg from "../media/circleVector.svg";
import crossImg from "../media/crossImg.svg";
// global-store
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #494747;
    }

    .circle, .cross{
         background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
    }
    .circle{
        background-image: url(${circleImg});
        }
    .cross{
        background-image: url(${crossImg});
    }
    .occupied{
        pointer-events: none;
    }
`;

export default GlobalStyle;
