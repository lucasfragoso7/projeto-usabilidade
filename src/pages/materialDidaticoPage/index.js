import React from 'react';
import { Container, CardDead, Button, CardTitle, TextInput, CardButton, TextTitleCad, MainTitle, TitleText, ExitIcon } from './styles';
import { IoIosExit, IoIosAddCircleOutline } from 'react-icons/io';

function materialDidaticoPage({ history }) {
    return (
        <Container >
            <MainTitle>
                <TitleText>Material Didático</TitleText>
            </MainTitle>
            <ExitIcon fontSize={50}>
                <IoIosExit onClick={() => history.push('/home')} ></IoIosExit>
            </ExitIcon>

            <CardDead>
                <CardTitle>

                    <TextTitleCad>Material Didatico</TextTitleCad>
                </CardTitle>
                <TextInput type={'text'}>

                </TextInput>
                <CardButton>
                <IoIosAddCircleOutline style={{ background: '#fff', color: '#4585B9', fontSize: '50px', borderRadius: '50%', marginLeft: '45%', transform: 'translateY(-50%)' }} />
                </CardButton>

            </CardDead>

            <CardDead>
                <CardTitle>
                    <TextTitleCad>Material Didatico Digital</TextTitleCad>
                </CardTitle>
                <TextInput>

                </TextInput>
                <CardButton >
                    <IoIosAddCircleOutline style={{ background: '#fff', color: '#4585B9', fontSize: '50px', borderRadius: '50%', marginLeft: '45%', transform: 'translateY(-50%)' }} />
                </CardButton>

            </CardDead>


        </Container>
    );
}

export default materialDidaticoPage;
