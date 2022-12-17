import styled from "styled-components";


export const FriendsList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
gap: 14px;
`;

export const FriendItem = styled.li`
background-color: #ffffff;
display: flex;
align-items: center;
gap: 12px;
width: 250px;
padding: 8px;
border-radius: 4px;
font-weight: 600;
box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%);
`;

export const Status = styled.span`
width: 14px;
height: 14px;
border-radius: 50%;
background-color: ${p => p.bgColor ? 'green' : 'red'};
`;

export const FriendPicture = styled.img`
width: 68px;
height: 68px;
background-color: whitesmoke;
border-radius: 5px;
`;