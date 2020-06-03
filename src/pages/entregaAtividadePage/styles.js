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
    width: 63%;
    height: 10px;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgba(0, 0, 5, 0.7);
    border: 2px solid #c4c4c4;
    top: 30%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-size: large;
`;

export const TextSubtitle = styled.h2`
    margin-top: -15px;
    color: #fff;
`;

/* Tabela Descricao */
export const DescricaoTable = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #4585B9;
    border: 2px solid #c4c4c4;
    top: 40%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Tabela Prazo */
export const PrazoTable = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #4585B9;
    border: 2px solid #c4c4c4;
    top: 40%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Tabela Status */
export const StatusTable = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: #4585B9;
    border: 2px solid #c4c4c4;
    top: 40%;
    left: 71%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Primeira Coluna abaixo da Descrição */
export const FirstColumnTableOne = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    top: 50%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const FirstColumnTableTwo = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    top: 60%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const FirstColumnTableThree = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    top: 70%;
    left: 29%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Segunda Coluna abaixo do Prazo */
export const SecondColumnTableOne = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const SecondColumnTableTwo = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    top: 60%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

export const SecondColumnTableThree = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    top: 70%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
`;

/* Terceira Coluna abaixo do Status */
export const ThirdColumnTableOne = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    position: absolute;
    padding: 35px;
    text-align: center;
    opacity: 80%;
    transition: 0.2s;
    top: 50%;
    left: 71%;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-family: bold;

    &:hover {
        cursor: pointer;
        background: rgba(111, 199, 139);
        transition: 0.5s all ease-out;
    }
`;

export const ThirdColumnTableTwo = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    position: absolute;
    padding: 35px;
    text-align: center;
    opacity: 80%;
    transition: 0.2s;
    top: 60%;
    left: 71%;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-family: bold;

    &:hover {
        cursor: pointer;
        background: rgba(250, 216, 89, 1);
        transition: 0.5s all ease-out;
    }
`;

export const ThirdColumnTableThree = styled.div`
    width: 20.2%;
    height: 9%;
    border: 1px solid whitesmoke;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(255, 249, 222);
    border: 2px solid #c4c4c4;
    position: absolute;
    padding: 35px;
    text-align: center;
    opacity: 80%;
    transition: 0.2s;
    top: 70%;
    left: 71%;
    transform: translate(-50%, -50%);
    padding: 35px;
    text-align: center;
    font-family: bold;

    &:hover {
        cursor: pointer;
        background: rgba(214, 69, 65, 1);
        transition: 0.5s all ease-out;
    }
`;

export const NormalText = styled.h3`
    margin-top: -15px;
    color: #2b2b2b;
    font-size: 16px;
    font-weight: normal;
`;

/* ICONS */
export const ExitIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 10%;
    height: 10%;
    cursor: pointer;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: var(--primary-color);
    font-size: ${(props) => `${props.fontSize}px`};
    color: #fff;
    opacity: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        color: rgba(214, 69, 65, 1);
        transition: 0.5s all ease-out;
    }
`;
