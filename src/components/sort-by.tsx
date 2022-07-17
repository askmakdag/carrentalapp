import React, {useEffect} from "react";
import {StyledSortBy} from "./styles/soty-by.styled";
import Text from "./text.styled";
import {useAppDispatch, useAppSelector} from "../hooks/store-hooks";
import {sortTheVehicles} from "../store/mainSlice";
import {OrderByEnum} from "../types/enums/order-by.enum";

export default function SortBy() {
    const dispatch = useAppDispatch();
    const {orderBy, availableVehicles} = useAppSelector(s => s.main);

    useEffect(() => {
        if (availableVehicles.length !== 0 && !orderBy) {
            dispatch(sortTheVehicles(OrderByEnum.LowToHigh));
        }
    }, [availableVehicles]);

    useEffect(() => {
        if (orderBy) {
            dispatch(sortTheVehicles(OrderByEnum.LowToHigh));
        }
    }, [orderBy]);

    return (
        <StyledSortBy>
            <div className={'left'}>
                <Text size={'small'} weight={'regular'}>24 Cars available</Text>
            </div>

            <div className={'right'}>
                <Text size={'medium'} weight={'regular'}>Sort By Price -- </Text>

                <div className={'dropdown'}>
                    <Text size={'medium'} weight={'regular'}>Low To High</Text>
                </div>
            </div>
        </StyledSortBy>
    );
}
