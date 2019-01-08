import Styled from 'styled-components';
let blue = '#1fb5bf';
export const StyledForm = Styled.form`
    border-radius: 5px;
    width: 40%;
    min-width: 320px;
    max-width: 475px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: black;

    @media(max-width: 40em){
        width: 95%;
        position: relative;
        margin: 2.5% auto 0 auto;
        left: 0%;
        transform: translate(0%,0%)
    }

    h2 {
        width: 100%;
        color: light-gray;
        font-family: 'open sans condensed';
        font-size: 1.35em;
        display: block;
        background: grey;
        width: 100%;
        text-transform: uppercase;
        padding: .75em 1em .75em 1.5em;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        border: 1px solid dark-gray;
        margin: 0;
        font-weight: 200;
      }

    input {
        display: block;
        margin: auto auto;
        width: 100%;
        margin-bottom: 2em;
        padding: .5em 0;
        border: none;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 1.25em;
        color: #757575;

        &:focus {
          outline: none;
        }
    }

    .btn {
        display: inline-block;
        background: ${blue};
        border: 1px solid dark-blue;
        padding: .5em 2em;
        color: white;
        margin-right: .5em;
        box-shadow: inset 0px 1px 0px fadeout(white, 80%); 
        &:hover {
          background: ${blue};
        }
        &:active {
          background: ${blue}; 
          box-shadow: inset 0px 1px 1px fadeout(black, 90%); 
        }
        &:focus {
          outline: none;
        }
      }
      
      .forgot {
        color: ${blue};
        line-height: .5em;
        position: relative;
        top: 2.5em;
        text-decoration: none;
        font-size: .75em;
        margin:0;
        padding: 0;
        float: right;
        
        &:hover {
          color: ${blue};
        }
        &:active{ 
        }
      }
`;
