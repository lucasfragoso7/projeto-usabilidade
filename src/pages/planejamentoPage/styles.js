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

export const ClassInfoTable = styled.div`
    margin-top: 40px;
`;

export const TableRow = styled.div`
    &:after {
        display: table;
        content: '';
        clear: both;
        width: ${(props) => (props.class ? '990px' : '500px')};
    }
`;

export const TableContent = styled.div`
    border-top-left-radius: ${(props) => (props.left ? '15px' : '0px')};
    border-bottom-left-radius: ${(props) => (props.left ? '15px' : '0px')};
    border-top-right-radius: ${(props) => (props.left ? '0px' : '15px')};
    border-bottom-right-radius: ${(props) => (props.left ? '0px' : '15px')};
    margin-bottom: 7px;
    float: left;
    width: 50%;
    height: 70px;
    padding: 10px;
    border: 1px solid whitesmoke;
    background-color: ${(props) =>
        props.left ? 'rgb(36, 50, 90, 0.9)' : '#fff'};

    color: ${(props) => (props.left ? '#fff' : '#000')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextTable = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
