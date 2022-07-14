import {StyledCardLeft} from "./styles/CardLeft.styled";
import {Alamo, Bag, Door, Fuel, Person, Plane} from "../assets";
import {VehicleAvailabilityModel, VehicleRentalCoreModel, VendorModel} from "../types/models";
import React from "react";
import Subtitle from "./subtitle.styled";
import Text from "./text.styled";
import {Check} from "phosphor-react";

export type Props = {item: VehicleAvailabilityModel, vendor: VendorModel, vehRentalCore: VehicleRentalCoreModel};

export default function CardLeft({item: {Vehicle}, vehRentalCore}: Props) {

    return (
        <StyledCardLeft>
            <div className={'card__header'}>
                <Subtitle size={'medium'} weight={'regular'}>{Vehicle.VehMakeModel['@Name']}</Subtitle>
            </div>

            <div className={'card__body'}>
                <div className={'card__info--left'}>
                    <div className={'card__info--image'}>
                        <img src={Vehicle?.PictureURL}  alt={''} />
                    </div>
                    <div className={'card__info--properties'}>
                        <ul>
                            <CardInfoProperty image={Person} desc={Vehicle['@PassengerQuantity']} />
                            <CardInfoProperty image={Bag} desc={Vehicle['@BaggageQuantity']} />
                            <CardInfoProperty image={Door} desc={Vehicle['@DoorCount']} />
                        </ul>
                    </div>
                </div>

                <div className={'card__info--right'}>
                    <RightRowWithIconRow image={Plane} title={'Pick-Up Location'} desc={vehRentalCore.PickUpLocation['@Name']}/>
                    <RightRowWithIconRow image={Fuel} title={'Fuel Type'} desc={Vehicle['@FuelType']}/>
                </div>
            </div>

            <div className={'card__footer'}>
                <div className={'card__info--bottom'}>
                    <ul>
                        <CardInfoBottomProperty text={`${Vehicle['@TransmissionType']} Transmission`} />
                        <CardInfoBottomProperty text={'Air Conditioning'} />
                    </ul>
                </div>

                <div className={'card__brand'}>
                    <img src={Alamo} alt={''} />
                    <span>5.8</span>
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
        <div className={'card__info--right__row'}>
            <div className={'card__info--right__image'}>
                <img src={image} style={{paddingTop: 4}}  alt={''}/>
            </div>

            <div className={'card__info--right__desc'}>
                <Text size={'small'} weight={'regular'}>{title}:</Text>
                <Text size={'medium'} weight={'regular'}>{desc}</Text>
            </div>
        </div>
    )
}
