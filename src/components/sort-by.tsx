import React, {useEffect} from "react";
import {StyledSortBy} from "./styles/soty-by.styled";
import Text from "./text.styled";
import {useAppDispatch, useAppSelector} from "../hooks/store-hooks";
import {sortTheVehicles} from "../store/mainSlice";
import {OrderByEnum} from "../types/enums/order-by.enum";

export default function SortBy() {
    const dispatch = useAppDispatch();
    const {sortBy, orderBy, availableVehicles} = useAppSelector(s => s.main);

    useEffect(() => {
        if (availableVehicles.length !== 0 && !orderBy) {
            dispatch(sortTheVehicles(OrderByEnum.LowToHigh));
        }
    }, [availableVehicles]);

    const onSelected = (e) => {
        dispatch(sortTheVehicles(e.target.value));
    }

    return (
        <StyledSortBy>
            <div className={'left'}>
                <Text size={'medium'} weight={'bold'} style={{marginRight: 4}}>{availableVehicles.length}</Text>
                <Text size={'small'} weight={'regular'}>cars available</Text>
            </div>

            <div className={'right'}>
                <Text size={'large'} weight={'regular'}>Sort By: </Text>

                <select className={'dropdown'} onChange={onSelected}>
                    <option value={OrderByEnum.LowToHigh}>{sortBy} (low to high)</option>
                    <option value={OrderByEnum.HighToLow}>{sortBy} (high to low)</option>
                </select>
            </div>
        </StyledSortBy>
    );
}
