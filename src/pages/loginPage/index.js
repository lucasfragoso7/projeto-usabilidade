import React from 'react';
import {
    Container,
    UserImage,
    TextTitle,
    FormLabel,
    FormInput,
    FormButton,
    Link,
} from './styles';

function loginPage({ history }) {
    return (
        <Container>
            <UserImage src="/images/profile.png" />
            <TextTitle>SISTEMA ACADÊMICO</TextTitle>

            <form>
                <FormLabel>Usuário</FormLabel>
                <FormInput
                    type="text"
                    name=""
                    placeholder="Nome de usuário ou Email"
                    required
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
                <Link href="mailto:thales.porto@maisunifacisa.com.br">
                    Esqueceu sua senha?
                </Link>
            </form>
        </Container>
    );
}

export default loginPage;
