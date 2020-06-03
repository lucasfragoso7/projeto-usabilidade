import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

export const MainTitle = styled.div`
    margin-bottom: 50px;
    width: 90%;
    margin-top: 0px;
    padding: 10px;
    color: #fff;
    text-align: center;
`;

export const CardDead = styled.div`
    margin: 5%;
    width: 50%;
    border-radius: 25px;
    background-color: #fff;
    border-style: solid;
    border-color: #4585b9;
`;

export const CardTitle = styled.div`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #4585b9 !important;
    padding: 10px;
`;

export const CardButton = styled.div`
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #4585b9 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    margin-left: 50%;
    padding: 1em;
    border-radius: 50%;
    border-style: none;
`;

export const TextInput = styled.input`
    border: 2px outset transparent;
    height: 50px;
    font-size: 1.2em;
`;

export const TitleText = styled.h1`
    margin-top: 4%;
    border: 2px outset transparent;
    height: 70px;
    border-left: #fff;
    border-right: #fff;
    border-bottom-color: #fff;
`;

export const TextTitleCad = styled.h1`
    color: #fff;
    text-align: center;
`;
