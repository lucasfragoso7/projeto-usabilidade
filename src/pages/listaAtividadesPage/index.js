import React from 'react';
import {
    Container,
    MainTitle,
    TitleText,
    MainTable,
    TextSubtitle,
    CardDays,
    CardDate,
} from './styles';
import Sidemenu from '../../components/sidemenu';

function listaAtividadesPage() {
    return (
        <Container>
            <Sidemenu />
            <MainTitle>
                <TitleText>AGENDA ACADÊMICA</TitleText>
            </MainTitle>

            <MainTable>
                <TextSubtitle>4 de Junho, 2020</TextSubtitle>
            </MainTable>

            <div>
                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'].map(
                        (element) => {
                            return <CardDays>{element}</CardDays>;
                        }
                    )}
                </div>

                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {['1', '2', '3', '4', '5', '6', '7'].map((element) => {
                        return <CardDate>{element}</CardDate>;
                    })}
                </div>

                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {['8', '9', '10', '11', '12', '13', '14'].map((element) => {
                        return <CardDate>{element}</CardDate>;
                    })}
                </div>

                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {['15', '16', '17', '18', '19', '20', '21'].map(
                        (element) => {
                            return <CardDate>{element}</CardDate>;
                        }
                    )}
                </div>

                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {['22', '23', '24', '25', '26', '27', '28'].map(
                        (element) => {
                            return <CardDate>{element}</CardDate>;
                        }
                    )}
                </div>

                <div style={{ display: 'flex', marginTop: '30px' }}>
                    {['29', '30'].map((element) => {
                        return <CardDate>{element}</CardDate>;
                    })}
                </div>
            </div>
        </Container>
    );
}

export default listaAtividadesPage;
