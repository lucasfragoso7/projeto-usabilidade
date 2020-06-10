import React from 'react';
import {
    Container,
    MainTitle,
    TitleText,
    MainTable,
    TextSubtitle,
    DescricaoTable,
    PrazoTable,
    StatusTable,
    FirstColumnTableOne,
    FirstColumnTableTwo,
    FirstColumnTableThree,
    SecondColumnTableOne,
    SecondColumnTableTwo,
    SecondColumnTableThree,
    ThirdColumnTableOne,
    ThirdColumnTableTwo,
    ThirdColumnTableThree,
    NormalText,
} from './styles';

import Sidemenu from '../../components/sidemenu';
import { IoIosArrowBack } from "react-icons/io";

function entregaAtividadePage({history}) {
    return (
        <Container>
            <Sidemenu />

            <MainTitle>
                <TitleText>ENTREGA DE EXERCÍCIOS</TitleText>
            </MainTitle>

            <MainTable>
                <TextSubtitle>Fevereiro - Atividade 03</TextSubtitle>
            </MainTable>

            <DescricaoTable>
                <TextSubtitle>Descrição</TextSubtitle>
            </DescricaoTable>

            <PrazoTable>
                <TextSubtitle>Prazo</TextSubtitle>
            </PrazoTable>

            <StatusTable>
                <TextSubtitle>Status</TextSubtitle>
            </StatusTable>

            {/* Coluna da Descrição */}
            <FirstColumnTableOne>
                <NormalText>Resuma o texto lido em sala em inglês</NormalText>
            </FirstColumnTableOne>

            <FirstColumnTableTwo>
                <NormalText>
                    Identifique os Phrasal Verbs contidos no texto
                </NormalText>
            </FirstColumnTableTwo>

            <FirstColumnTableThree>
                <NormalText>
                    Aplique o uso do Past Perfect Continuous no seu dia-a-dia
                </NormalText>
            </FirstColumnTableThree>

            {/* Coluna do Prazo */}
            <SecondColumnTableOne>
                <NormalText>10/02/2020</NormalText>
            </SecondColumnTableOne>

            <SecondColumnTableTwo>
                <NormalText>11/02/2020</NormalText>
            </SecondColumnTableTwo>

            <SecondColumnTableThree>
                <NormalText>15/02/2020</NormalText>
            </SecondColumnTableThree>

            {/* Coluna do Status */}
            <ThirdColumnTableOne>
                <NormalText>CONCLUIDA</NormalText>
            </ThirdColumnTableOne>

            <ThirdColumnTableTwo>
                <NormalText>EM ANDAMENTO</NormalText>
            </ThirdColumnTableTwo>

            <ThirdColumnTableThree>
                <NormalText>NÃO INICIADA</NormalText>
            </ThirdColumnTableThree>

            <IoIosArrowBack onClick={() => history.push('/home')} 
                        style={{
                            background: 'linear-gradient(#679ece)',
                            color: '#FFF',
                            fontSize: '50px',
                            borderRadius: '0 30px 30px 0',
                            cursor: 'pointer',
                            position: 'absolute',
                            left: '1px',
                            top: '392px'
                        }}
                    />
        </Container>
    );
}

export default entregaAtividadePage;
