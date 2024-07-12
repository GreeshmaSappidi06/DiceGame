import React from 'react'
import TotalScore  from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import DiceRole from './DiceRole';
import Rules from './Rules';
import { useState } from 'react';
import {Button, OutlinedButton} from "../styled/Button";


const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice,setCurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules,setShowRules] = useState(false);

    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random()*(max-min)+min);
    };

    const roleDice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev) => prev+randomNumber);
        }
        else{
            setScore((prev) => prev-1);
        }
        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }
  return (

    <MainContainer>
        <div className='UpperSection'>
        <NumberSelector 
           setError={setError}
           error = {error}
           selectedNumber={selectedNumber}
           setSelectedNumber={setSelectedNumber}
        />
        <TotalScore score={score}/>
       
        </div>
        <div className='BottomSection'>
        <DiceRole
            currentDice={currentDice}
            roleDice={roleDice}
        />
        <div className='Btn'>
            <OutlinedButton onClick={resetScore}>
                Reset Score
            </OutlinedButton>
            <Button onClick={() => setShowRules((prev) => !prev)}>
               {showRules ? "Hide" : "Show"} Rules
            </Button>
            {showRules && <Rules/>}
        </div>
        </div>
      
        
    </MainContainer>
  );
};

export default GamePlay; 

const MainContainer = styled.main`
    .UpperSection{
    
        display: flex;
        justify-content: space-evenly;
    }

    .Btn{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px;
        margin-top:-40px;   

        /* margin-top: ${(props) => (props.showRules ? '-100px' : '-150px')}; */
    }

    .BottomSection{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 30px;
    }
`;