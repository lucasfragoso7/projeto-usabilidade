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

export const TitleText = styled.h1`
    margin-top: 4%;
    border: 2px outset transparent;
    height: 70px;
    border-left: #fff;
    border-right: #fff;
    border-bottom-color: #fff;
`;

export const MainTable = styled.div`
    width: 70%;
    height: 10px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgba(0, 0, 5, 0.7);
    border: 2px solid #c4c4c4;
    padding: 35px;
    text-align: center;
    font-size: large;
`;

export const TextSubtitle = styled.h2`
    margin-top: -15px;
    color: #fff;
`;

export const CardDays = styled.div`
    margin-right: 30px;
    width: 150px;
    height: 70px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    border-radius: 10px;
`;

export const CardDate = styled.div`
    margin-right: 30px;
    width: 150px;
    height: 70px;
    background-color: blue;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    color: #fff;
    padding-right: 8px;
    font-size: 24px;
    border-radius: 10px;
`;
