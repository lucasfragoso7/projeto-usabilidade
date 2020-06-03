import React from 'react';
import Sidemenu from '../../components/sidemenu';
import {
    Container,
    Showcase,
    InnerContent,
    TitleText,
    ProfileImage,
    OuterContent,
    WelcomeText,
} from './styles';

function homePage() {
    return (
        <Container>
            <Sidemenu />

            <Showcase>
                <InnerContent>
                    <TitleText>PORTAL DO ALUNO</TitleText>
                </InnerContent>

                <OuterContent>
                    <WelcomeText>Bem-Vindo Thales</WelcomeText>
                </OuterContent>

                <ProfileImage src="/images/profile2.png" />
            </Showcase>
        </Container>
    );
}

export default homePage;
