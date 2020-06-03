import React from 'react';
import Sidemenu from '../../components/sidemenu';
import ReactCardCarousel from 'react-card-carousel';

import {
    Container,
    Showcase,
    InnerContent,
    TitleText,
    ProfileImage,
    OuterContent,
    WelcomeText,
    CardAlive
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
                    <WelcomeText>Bem-vindo, Thales</WelcomeText>
                </OuterContent>

                <ProfileImage src="/images/profile2.png" />
            </Showcase>

        <div>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                <CardAlive>
                    First Card
                </CardAlive>
                <CardAlive>
                    Second Card
                </CardAlive>
            </ReactCardCarousel>
        </div>
            

        </Container>
    );
}

export default homePage;
