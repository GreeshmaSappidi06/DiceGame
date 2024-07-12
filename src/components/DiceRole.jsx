
import styled from 'styled-components';

const DiceRole = ({currentDice,roleDice}) => {

  return (
    <DiceContainer>
        <div className="dice" onClick = {roleDice}>
            <img src={`/images/dice${currentDice}.png`} alt={`dice ${currentDice}`}/>
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default DiceRole;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* position:fixed; */
    align-items: center;
    margin-top:-40px;
    img{

        height: 300px;
        width: 300px;
    }
    p{
        margin-top: 0;
        font-size:25px;
    }
    .dice{
        cursor: pointer;
    }
`;
