import React, {useEffect} from 'react';
import {getTheFeed} from "../store/mainSlice";
import {Container} from "../components/styles/container.styled";
import AlertLine from "../components/alert-line";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/store-hooks";
import Card from "../components/card/card";

export default function Dashboard() {
    const dispatch = useDispatch();
    const {availableVehicles} = useAppSelector(s => s.main);

    useEffect(() => {
        if (availableVehicles.length === 0) {
            // @ts-ignore
            dispatch(getTheFeed());
        }
    }, []);

    return (
        <Container style={{paddingTop: 8}}>
            <AlertLine type={'success'} message={'Book today and be confident with our flexible cancellation policy.'} />
            <br />
            {availableVehicles.map((item, index) => {
                return <Card item={item} key={index} />
            })}
        </Container>
    );
}
