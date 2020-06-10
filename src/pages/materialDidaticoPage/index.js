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
import { IoIosArrowBack } from "react-icons/io";

function materialDidaticoPage({history}) {
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

export default materialDidaticoPage;
