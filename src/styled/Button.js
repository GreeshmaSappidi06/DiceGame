import styled from "styled-components";

export const Button = styled.button`
   color:white;
   background:black;
   padding:10px 18px;

   height:45px;
   min-width:200px;
   border-radius:5px;
   border:none;
   transition: 0.4s background ease-in;
   font-size: 15px;
   cursor: pointer;

   &:hover {
    background-color: white;
    border:1px solid black;
    color:black;
    transition: 0.3s background ease-in;
   }
`;

export const OutlinedButton = styled(Button)`
   color:black;
   background:white;
   padding:10px 18px;

   height:45px;
   min-width:200px;
   border-radius:5px;
   border:1px solid black;
   transition: 0.4s background ease-in;
   font-size: 15px;
   cursor: pointer;

   &:hover {
    background-color: black;
    border:1px solid black;
    color:white;
    transition: 0.3s background ease-in;
   }
`;

