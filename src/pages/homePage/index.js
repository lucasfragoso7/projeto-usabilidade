import React from 'react';
import Sidemenu from '../../components/sidemenu';
// import ReactCardCarousel from 'react-card-carousel';

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
                    <TitleText>PORTAL ACADÊMICO</TitleText>
                </InnerContent>

                <OuterContent>
                    <WelcomeText>Bem-vindo, Daniel</WelcomeText>
                </OuterContent>

                <ProfileImage src="/images/profile2.png" />
            </Showcase>

        {/* <div>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                <CardAlive>
                Inglês
                </CardAlive>
                <CardAlive>
                Matemática
                </CardAlive>
                <CardAlive>
                Biologia
                </CardAlive>
            </ReactCardCarousel>
        </div> */}
            

        </Container>
    );
}

export default homePage;
