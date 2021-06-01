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
    .win-block{
        background-color: #9dae6aa1
        /* background-color: #313a35 */
    }
    .disable{
        pointer-events: none;
    }
    .hide{
        display: none;
    }
    .general-border{
        border: 1rem solid gray;
    }
    .player-1-borders{
        border: 12px solid rgba(125, 68, 244, 0.86);
        box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.35), 0px 0px 6px #7d44f4,
        0px 0px 35px #966fe9, 0px 0px 94px rgba(159, 120, 241, 0.7),
        inset 4px 0px 10px rgba(204, 187, 241, 0.74),
        inset 3px 2px 8px rgba(207, 167, 248, 0.98),
        inset 0px 0px 40px rgba(174, 136, 255, 0.89);
    }
    .player-2-borders{
        border: 12px solid rgba(238, 177, 59, 0.75);
        box-shadow: 4px 0px 7px rgba(0, 0, 0, 0.3),
        5px 5px 65px rgba(238, 177, 59, 0.75),
        0px 0px 20px rgba(238, 177, 59, 0.75),
        inset 4px 0px 5px rgba(255, 232, 188, 0.6),
        inset 2px 2px 15px rgba(235, 155, 0, 0.7),
        inset 5px 5px 25px rgba(255, 232, 188, 0.8),
        inset 0px 0px 116px rgba(255, 201, 100, 0.153);
    }
`;

export default GlobalStyle;
