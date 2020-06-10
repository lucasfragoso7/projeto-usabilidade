import React from 'react';
import {
    Container,
    MainTitle,
    ClassInfoTable,
    TitleText,
    TableRow,
    TableContent,
    TextTable,
} from './styles';

import Sidemenu from '../../components/sidemenu';
import { IoIosArrowBack } from "react-icons/io";

function planejamentoPage({history}) {
    return (
        <Container>
            <Sidemenu />

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

            <MainTitle>
                <TitleText>PRÓXIMAS AULAS</TitleText>
            </MainTitle>

            <div>
                <TableRow>
                    <TableContent left>
                        <TextTable>Professor(a)</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>Daniel</TextTable>
                    </TableContent>
                </TableRow>

                <TableRow>
                    <TableContent left>
                        <TextTable>Matéria</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>Inglês</TextTable>
                    </TableContent>
                </TableRow>

                <TableRow last>
                    <TableContent left>
                        <TextTable>Nível</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>Básico e Intermediário</TextTable>
                    </TableContent>
                </TableRow>
            </div>

            <ClassInfoTable>
                <TableRow class>
                    <TableContent left>
                        <TextTable>Conteúdo</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>
                            Connectors, Pronouns, Verbs and If Clauses
                        </TextTable>
                    </TableContent>
                </TableRow>

                <TableRow class>
                    <TableContent left>
                        <TextTable>Metodologia</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>Tradicional e Instrumental</TextTable>
                    </TableContent>
                </TableRow>

                <TableRow class>
                    <TableContent left>
                        <TextTable>Cronograma</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>
                            Seg: Reading, Qui: Listening e Speaking
                        </TextTable>
                    </TableContent>
                </TableRow>

                <TableRow class>
                    <TableContent left>
                        <TextTable>Avaliação</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>
                            Unid 1: 15 de Março, Unid 2: 17 de Junho
                        </TextTable>
                    </TableContent>
                </TableRow>

                <TableRow class>
                    <TableContent left>
                        <TextTable>Referências</TextTable>
                    </TableContent>
                    <TableContent>
                        <TextTable>Global Language by McArthur</TextTable>
                    </TableContent>
                </TableRow>
            </ClassInfoTable>

        </Container>
    );
}

export default planejamentoPage;
