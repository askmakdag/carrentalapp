import React from "react";
import {MapPin} from "phosphor-react";
import Text from "./text.styled";
import {StyledPickupReturn} from "./styles/pickup-return.styled";
import Subtitle from "./subtitle.styled";
import {useAppSelector} from "../hooks/store-hooks";
import {dateFormat} from "../helpers/format";

export default function PickupReturn() {
    const {vehRentalCore} = useAppSelector(s => s.main);
    return (
        <StyledPickupReturn>
            <div className={'header'}>
                <Subtitle size={'small'} weight={'regular'}>Search details</Subtitle>
            </div>

            <div className={'body'}>
                <div className={'pickup'}>
                    <div className={'pickup__image'}>
                        <MapPin size={20} weight={'fill'}/>
                    </div>

                    <div className={'pickup__text'} >
                        <Text size={'small'} weight={'regular'}>Pick-up</Text>
                        <Text size={'medium'} weight={'bold'}>{vehRentalCore.PickUpLocation?.['@Name']}</Text>
                        <Text size={'medium'} weight={'bold'}>{dateFormat(vehRentalCore?.['@PickUpDateTime'])}</Text>
                    </div>
                </div>

                <div className={'drop'}>
                    <div className={'drop__image'}>
                        <MapPin size={20} weight={'fill'}/>
                    </div>

                    <div className={'drop__text'}>
                        <Text size={'small'} weight={'regular'}>Drop-Off</Text>
                        <Text size={'medium'} weight={'bold'}>{vehRentalCore.ReturnLocation?.['@Name']}</Text>
                        <Text size={'medium'} weight={'bold'}>{dateFormat(vehRentalCore?.['@ReturnDateTime'])}</Text>
                    </div>
                </div>
            </div>
        </StyledPickupReturn>
    );
}
