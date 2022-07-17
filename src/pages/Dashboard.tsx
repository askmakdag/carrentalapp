import React, {useEffect} from 'react';
import {getTheFeed} from "../store/mainSlice";
import {Container} from "../components/styles/container.styled";
import AlertLine from "../components/alert-line";
import {useAppDispatch, useAppSelector} from "../hooks/store-hooks";
import Card from "../components/card/card";
import PickupReturn from "../components/pickup-return";
import SortBy from "../components/sort-by";

export default function Dashboard() {
    const dispatch = useAppDispatch();
    const {availableVehicles} = useAppSelector(s => s.main);

    useEffect(() => {
        if (availableVehicles.length === 0) {
            dispatch(getTheFeed());
        }
    }, []);

    return (
        <Container>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1}}>
                    <PickupReturn />
                </div>

                <div style={{flex: 3, paddingLeft: 8}}>
                    <AlertLine type={'success'} message={'Book today and be confident with our flexible cancellation policy.'} />
                    <br/>

                    <SortBy />
                    <br/>

                    {availableVehicles.map((item, index) => {
                        return <Card item={item} key={index} />
                    })}
                </div>
            </div>
        </Container>
    );
}
