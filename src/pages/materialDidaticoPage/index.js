import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import {
    Container,
    CardDead,
    CardTitle,
    TextInput,
    CardButton,
    TextTitleCad,
    MainTitle,
    TitleText,
} from './styles';

import Sidemenu from '../../components/sidemenu';

function materialDidaticoPage() {
    return (
        <Container>
            <Sidemenu />

            <MainTitle>
                <TitleText>Material Didático</TitleText>
            </MainTitle>

            <CardDead>
                <CardTitle>
                    <TextTitleCad>MATERIAL DIDÁTICO</TextTitleCad>
                </CardTitle>
                <TextInput type="text" />
                <CardButton>
                    <IoIosCheckmarkCircle onClick={() => { alert('Material Adicionado!'); }}
                        style={{
                            background: '#fff',
                            color: '#4585B9',
                            fontSize: '50px',
                            borderRadius: '50%',
                            marginTop: '9',
                        }}
                    />
                </CardButton>
            </CardDead>

            <CardDead>
                <CardTitle>
                    <TextTitleCad>Material Didático Digital</TextTitleCad>
                </CardTitle>
                <TextInput />
                <CardButton>
                    <IoIosCheckmarkCircle onClick={() => { alert('Material Adicionado!'); }}
                        style={{
                            background: '#fff',
                            color: '#4585B9',
                            fontSize: '50px',
                            borderRadius: '50%',
                            marginTop: '9',
                        }}
                    />
                </CardButton>
            </CardDead>
        </Container>
    );
}

export default materialDidaticoPage;
