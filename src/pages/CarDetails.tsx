import React from "react";
import Card from "../components/card/card";
import {Container} from "../components/styles/container.styled";
import {useAppSelector} from "../hooks/store-hooks";

export default function CarDetails() {
        const {selectedVehicle} = useAppSelector(s => s.main);
        return (
            <Container>
                {selectedVehicle && <Card item={selectedVehicle} />}
            </Container>
        );
}
