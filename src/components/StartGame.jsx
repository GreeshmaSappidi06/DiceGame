import styled from "styled-components";
import {Button} from "../styled/Button.js";


const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
           <img src="/images/probability.png" alt="Dice image"/>
        </div>
       
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
    );
};

export default StartGame;

const Container = styled.div`
 max-width:1180px;
 height:100vh;
 display:flex;
 justify-content:space-evenly;
 gap:25px;
 margin: 0 auto;
 align-items:center;

 .content {
    
    h1{
       font-size:70px;
       white-space:nowrap;
     }}
`;


