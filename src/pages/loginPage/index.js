import React from 'react';
import {
    Container,
    UserImage,
    TextTitle,
    FormLabel,
    FormInput,
    FormButton,
    Link,
    FacebookLink,
} from './styles';
import { MdPerson } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

function loginPage({ history }) {
    return (
        <Container>
            <UserImage src="/images/profile.png" />
            <TextTitle>SISTEMA ACADÊMICO</TextTitle>

            <form>
                <MdPerson
                    style={{
                        color: '#f6f4f0',
                        fontSize: '25px',
                        float: 'right',
                        marginRight: '1%',
                    }}
                />
                <FormLabel>Usuário</FormLabel>
                <FormInput
                    type="text"
                    name=""
                    placeholder="Insira seu nome de usuário"
                    required
                />
                <IoMdLock
                    style={{
                        color: '#f6f4f0',
                        fontSize: '25px',
                        float: 'right',
                        marginRight: '1%',
                    }}
                />
                <FormLabel>Senha</FormLabel>
                <FormInput
                    type="password"
                    name=""
                    placeholder="Insira sua senha"
                    required
                />
                <FormButton type="submit" onClick={() => history.push('/home')}>
                    Entrar
                </FormButton>

                <FacebookLink href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%25229enixzli35kndnp0nh1bbjju84t8itosdd3la119avsc1b8li11%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Dpt_BR%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D85eb48ce-9e27-499b-814b-8cffb6963700&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25229enixzli35kndnp0nh1bbjju84t8itosdd3la119avsc1b8li11%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=pt_BR&pl_dbl=0">
                    Entrar com o Facebook
                <FaFacebookSquare
                        style={{
                            color: '#f6f4f0',
                            fontSize: '20px',
                            float: 'right',
                            marginRight: '13%',
                        }}
                    />
                </FacebookLink>

                <Link href="mailto:daniel.cunha@maisunifacisa.com.br">
                    Esqueceu sua senha?
                </Link>
            </form>

        </Container>
    );
}

export default loginPage;
