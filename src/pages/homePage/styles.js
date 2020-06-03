import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const Showcase = styled.div`
    color: #000000;
    height: 100vh;
    position: relative;
`;

export const InnerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 30%;
    color: #2b2b2b;
`;

export const TitleText = styled.h1`
    font-size: 3rem;
    color: #fff;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border: 2px dashed #000000;
    box-sizing: border-box;
    padding: 1px 1px;
    border-radius: 50px 50px 50px 50px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    left: 49%;
`;

export const OuterContent = styled.div`
    text-align: center;
    height: auto;
    top: 10%;
    color: #2b2b2b;
`;

export const WelcomeText = styled.p`
    font-size: 1.7rem;
    margin-left: -10px;
    color: #fff;
`;
