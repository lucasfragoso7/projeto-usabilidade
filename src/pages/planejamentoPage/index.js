import React from 'react';
import { Container, MainTitle, ProfessorFirstTable, TitleText, TextTableOne, ProfessorSecondTable, TextTableTwo, MateriaFirstTable, MateriaSecondTable, NivelFirstTable, NivelSecondTable, ConteudoFirstTable, ConteudoSecondTable, MetodologiaFirstTable, MetodologiaSecondTable, CronogramaFirstTable, CronogramaSecondTable, AvaliacaoFirstTable, AvaliacaoSecondTable, ReferenciaFirstTable, ReferenciaSecondTable, ExitIcon } from './styles';
import { IoIosExit } from 'react-icons/io';

function planejamentoPage({ history }) {
    return (
        <Container>
            <MainTitle>
                <TitleText>PLANEJAMENTO DE AULAS</TitleText>
            </MainTitle>

            <ProfessorFirstTable>
                <TextTableOne>Professor(a)</TextTableOne>
            </ProfessorFirstTable>

            <ProfessorSecondTable>
                <TextTableTwo>Daniel</TextTableTwo>
            </ProfessorSecondTable>

            <MateriaFirstTable>
                <TextTableOne>Matéria</TextTableOne>
            </MateriaFirstTable>

            <MateriaSecondTable>
                <TextTableTwo>Inglês</TextTableTwo>
            </MateriaSecondTable>

            <NivelFirstTable>
                <TextTableOne>Nivel</TextTableOne>
            </NivelFirstTable>

            <NivelSecondTable>
                <TextTableTwo>Básico</TextTableTwo>
            </NivelSecondTable>

            <ConteudoFirstTable>
                <TextTableOne>Conteúdo</TextTableOne>
            </ConteudoFirstTable>

            <ConteudoSecondTable>
                <TextTableTwo>Connectors, Pronouns, Verbs e If Clauses</TextTableTwo>
            </ConteudoSecondTable>

            <MetodologiaFirstTable>
                <TextTableOne>Metodologia</TextTableOne>
            </MetodologiaFirstTable>

            <MetodologiaSecondTable>
                <TextTableTwo>Tradicional e Instrumental</TextTableTwo>
            </MetodologiaSecondTable>

            <CronogramaFirstTable>
                <TextTableOne>Cronograma</TextTableOne>
            </CronogramaFirstTable>

            <CronogramaSecondTable>
                <TextTableTwo>Seg: Reading, Qui: Listening e Speaking</TextTableTwo>
            </CronogramaSecondTable>

            <AvaliacaoFirstTable>
                <TextTableOne>Avaliação</TextTableOne>
            </AvaliacaoFirstTable>

            <AvaliacaoSecondTable>
                <TextTableTwo>Unid 1: 15 de Março, Unid 2: 17 de Junho</TextTableTwo>
            </AvaliacaoSecondTable>

            <ReferenciaFirstTable>
                <TextTableOne>Referência</TextTableOne>
            </ReferenciaFirstTable>

            <ReferenciaSecondTable>
                <TextTableTwo>Global Language by McArthur</TextTableTwo>
            </ReferenciaSecondTable>

            <ExitIcon fontSize={50}>
                <IoIosExit onClick={() => history.push('/home')} ></IoIosExit>
            </ExitIcon>

        </Container>
    );
}

export default planejamentoPage;
