import {StyledCardLeft} from "./styles/card-left.styled";
import {Bag, Door, Fuel, Person, Plane} from "../assets";
import {VehicleAvailabilityModel, VehicleRentalCoreModel, VendorModel} from "../types/models";
import React from "react";
import Subtitle from "./subtitle.styled";
import Text from "./text.styled";
import {Check} from "phosphor-react";
import {Vendors} from "../types/constants/vendors.const";

export type Props = {item: VehicleAvailabilityModel, vendor: VendorModel, vehRentalCore: VehicleRentalCoreModel};

export default function CardLeft({item: {Vehicle}, vendor, vehRentalCore}: Props) {
    // @ts-ignore
    const theVendor = Vendors[vendor['@Code']];
    return (
        <StyledCardLeft>
            <div className={'card__header'}>
                <Subtitle size={'medium'} weight={'regular'}>{Vehicle.VehMakeModel['@Name']}</Subtitle>
            </div>

            <div className={'card__body'}>
                <div className={'info__left'}>
                    <div className={'info__left__image'}>
                        <img src={Vehicle?.PictureURL}  alt={''} />
                    </div>

                    <div className={'info__left__properties'}>
                        <ul>
                            <CardInfoProperty image={Person} desc={Vehicle['@PassengerQuantity']} />
                            <CardInfoProperty image={Bag} desc={Vehicle['@BaggageQuantity']} />
                            <CardInfoProperty image={Door} desc={Vehicle['@DoorCount']} />
                        </ul>
                    </div>
                </div>

                <div className={'info__right'}>
                    <RightRowWithIconRow image={Plane} title={'Pick-Up Location'} desc={vehRentalCore.PickUpLocation['@Name']}/>
                    <RightRowWithIconRow image={Fuel} title={'Fuel Type'} desc={Vehicle['@FuelType']}/>
                </div>
            </div>

            <div className={'card__footer'}>
                <div className={'info__bottom'}>
                    <ul>
                        <CardInfoBottomProperty text={`${Vehicle['@TransmissionType']} Transmission`} />
                        <CardInfoBottomProperty text={'Air Conditioning'} />
                    </ul>
                </div>

                <div className={'brand'}>
                    <img src={theVendor} alt={''} />
                    <span style={getColorByRating(+vendor['@Rating'])}>{vendor['@Rating']}</span>
                </div>
            </div>
        </StyledCardLeft>
    );
}

export function CardInfoProperty({image, desc}: { image: string, desc: string}) {
    return (
        <li>
            <span>{desc}</span>
            <img src={image}  alt={''} />
        </li>

    )
}

export function CardInfoBottomProperty({text}: { text: string}) {
    return (
        <li>
            <Check size={12} weight={'bold'} style={{marginRight: 4}}/>
            <Text size={'small'} weight={'semiBold'}>{text}</Text>
        </li>
    )
}

export function RightRowWithIconRow({image, title, desc}: {image: string, title: string, desc: string}) {
    return (
        <div className={'info__right__row'}>
            <div>
                <img src={image} style={{paddingTop: 4}}  alt={''}/>
            </div>

            <div>
                <Text size={'small'} weight={'regular'}>{title}:</Text>
                <Text size={'medium'} weight={'regular'}>{desc}</Text>
            </div>
        </div>
    )
}

const getColorByRating = (rating: number) => {
    if (rating < 5)
        return {backgroundColor: '#FF3333'};
    else if (rating < 6)
        return {backgroundColor: '#FFD500', color: '#000'};
    else if (rating < 7.5)
        return {backgroundColor: '#548206'};
    else
        return {backgroundColor: '#004B18'};
}
