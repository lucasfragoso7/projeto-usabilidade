import styled from 'styled-components';

export const Container = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 410px;
    border: 2px solid #69a1d2;
    border-radius: 50px;
    color: #ffffff;
    background-color: rgba(0, 0, 5, 0.8);
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 60px 28px;
`;

export const UserImage = styled.img`
    border-radius: 50%;
    position: absolute;
    top: -15%;
    left: 120px;
    width: 100px;
    height: 100px;
`;

export const TextTitle = styled.h1`
    margin: 0;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
`;

export const FormLabel = styled.p`
    margin: 0;
    padding: 0;
    font-weight: bold;
`;

export const FormInput = styled.input`
    width: 100%;
    margin-bottom: 22px;
    border: none;
    border-bottom: 2px solid #69a1d2;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
`;

export const FormButton = styled.button`
    border: none;
    outline: none;
    height: 40px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: medium;
    color: #ffffff;
    background: #69a1d2;
    border-radius: 15px;
    transition: 0.2s;
    width: 100%;
    margin-bottom: 5%;

    &:hover {
        cursor: pointer;
        background: rgba(111, 199, 139);
        transition: 0.2s;
    }
`;

export const Link = styled.a`
    font-weight: bold;
    text-decoration: none;
    font-size: 13px;
    line-height: 20px;
    color: #f4f8f7;
    transition: 0.2s;
    margin-left: 25%;

    &:hover {
        transition: 0.2s;
        color: #ff4d4d;
    }
`;
