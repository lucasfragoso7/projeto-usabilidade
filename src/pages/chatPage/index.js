import React from 'react';
import { FiSend } from 'react-icons/fi';
import {
    Container,
    MainTitle,
    TitleText,
    ChatBackground,
    ChatBox,
    FirstLightContainerChat,
    SecondLightContainerChat,
    BoldText,
    FirstDarkContainerChat,
    SecondDarkContainerChat,
    ContainerImg,
    TimeRight,
    Paragraph,
    RightContainer,
    UserStatus,
    TypeBox,
    InputText,
    SendButton,
} from './styles';

import Sidemenu from '../../components/sidemenu';

function chatPage() {
    return (
        <Container>
            <Sidemenu />

            <MainTitle>
                <TitleText>CHAT</TitleText>
            </MainTitle>

            <ChatBackground />

            <ChatBox>
                <FirstLightContainerChat>
                    <ContainerImg src="/images/profile.png" alt="Avatar" />
                    <Paragraph>
                        <BoldText>Aluno:</BoldText> Boa Noite! Gostaria de tirar
                        uma dúvida.
                    </Paragraph>
                    <TimeRight>22:00</TimeRight>
                </FirstLightContainerChat>

                <FirstDarkContainerChat>
                    <ContainerImg src="/images/profile2.png" alt="Avatar" />
                    <Paragraph>
                        <BoldText>Professor:</BoldText> Opa! Boa noite, Pedro.
                        Em que posso te ajudar?
                    </Paragraph>
                    <TimeRight>22:10</TimeRight>
                </FirstDarkContainerChat>

                <SecondLightContainerChat>
                    <ContainerImg src="/images/profile.png" alt="Avatar" />
                    <Paragraph>
                        <BoldText>Aluno:</BoldText> Então, a questão 1 é para
                        traduzir o texto inteiro e identificar apenas os phrasal
                        verbs, certo?
                    </Paragraph>
                    <TimeRight>22:12</TimeRight>
                </SecondLightContainerChat>

                <SecondDarkContainerChat>
                    <ContainerImg src="/images/profile2.png" alt="Avatar" />
                    <Paragraph>
                        <BoldText>Professor:</BoldText> Exatamente! Qualquer
                        dúvida, é só falar comigo por aqui. Abraço!
                    </Paragraph>
                    <TimeRight>22:13</TimeRight>
                </SecondDarkContainerChat>

                <RightContainer>
                    <Paragraph>
                        <BoldText>Participantes:</BoldText>
                    </Paragraph>
                    <UserStatus>
                        <Paragraph>Aluno</Paragraph>
                    </UserStatus>
                    <UserStatus>
                        <Paragraph>Professor</Paragraph>
                    </UserStatus>
                </RightContainer>
            </ChatBox>

            <TypeBox />

            <InputText
                type="text"
                name=""
                placeholder="Escreva uma mensagem..."
            />

            <SendButton
                type="button"
                onClick={() => {
                    alert('Mensagem Enviada!');
                }}
            >
                {' '}
                <FiSend font-size={30} />{' '}
            </SendButton>
        </Container>
    );
}

export default chatPage;
