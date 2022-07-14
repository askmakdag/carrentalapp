import React from "react";
import {CheckCircle} from "phosphor-react";
import Text from "./text.styled";
import {StyledAlert} from "./styles/alert.styled";

export default function AlertLine({message, type}: {message: string, type: string}) {
    return (
        <StyledAlert type={type}>
            <CheckCircle size={22} weight={'fill'} />
            <Text size={'medium'} weight={'regular'}  className={'text'}>{message}</Text>
        </StyledAlert>
    );
}
