import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 1 point will be dedcuted </p>
      </div>
      
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
   background-color: #e5dfeb;
   max-width: 500px;
   max-height: 300px;
   border-radius: 10px;
   margin: 10px auto 0;
   padding: 10px;



   h2{
    font-size:25px;
   }
   .text{
    margin-top:5px;
   }
`;
