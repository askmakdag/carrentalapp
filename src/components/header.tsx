import {Logo} from "../assets/other";
import {Container} from "./styles/container.styled";
import React from "react";
import Text from "./text.styled";
import {useNavigate} from "react-router-dom";
import {StyledHeader} from "./styles/header.styled";

export default function Header() {
    const navigate = useNavigate();
    return (
        <Container style={{ marginTop: 8, borderRadius: 4}}>
            <StyledHeader onClick={() => navigate('/')}>
                <img src={Logo} alt={'Header'} />
                <Text size={'large'} weight={'regular'}>{'Rent The Car'}</Text>
            </StyledHeader>
        </Container>
    );
}
