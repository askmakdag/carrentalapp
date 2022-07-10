import {StyledCard} from "./styled/Card.styled";
import {Bag, Door, Fuel, Person, Plane} from "../assets";
import {VehicleAvailabilityModel, VehicleModel, VehicleRentalCoreModel, VendorModel} from "../types/models";
import StyledText from "./styled/Text.styled";

export type Props = {item: VehicleAvailabilityModel, vendor: VendorModel, vehRentalCore: VehicleRentalCoreModel};

export default function Card({item: {Vehicle}, vehRentalCore}: Props) {
    //console.log('item: ', Vehicle);

    return (
        <StyledCard>
            <div>
                <StyledText variant={'bodySmall'}>{Vehicle.VehMakeModel['@Name']}</StyledText>
                <img src={Vehicle?.PictureURL} alt={'selam'}/>
                <CardCountsRow vehicle={Vehicle}/>
                <CardBottomInfoRow vehicle={Vehicle} />
            </div>
            <RightRowWithIcon vehRentalCore={vehRentalCore} vehicle={Vehicle}/>
        </StyledCard>
    );
}

export function CardCountsRow({vehicle}: {vehicle: VehicleModel}) {
    return (
        <ul>
            <CardCountsRowItem title={vehicle['@PassengerQuantity']} image={Person} />
            <CardCountsRowItem title={vehicle['@BaggageQuantity']} image={Bag} />
            <CardCountsRowItem title={vehicle['@DoorCount']} image={Door} />
        </ul>
    )
}

export function CardCountsRowItem({title, image}: {image: string, title: string}) {
    return(
        <li>
            <h3>{title}</h3>
            <img src={image} alt={'person'} style={{height: 18, width: 18}}/>
        </li>
    )
}

export function CardBottomInfoRow({vehicle}: { vehicle: VehicleModel }) {
    return (
        <ul>
            <li>
                <h6>{`${vehicle['@TransmissionType']} Transmission`}</h6>
            </li>
            <li>
                <h6>{'Air Conditioning'}</h6>
            </li>
        </ul>
    )
}

export function RightRowWithIcon({vehRentalCore, vehicle}: {vehRentalCore: VehicleRentalCoreModel, vehicle: VehicleModel}) {
    return (
        <ul style={{ flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'red', width: '50%'}}>
            <RightRowWithIconRow image={Plane} title={'Pick-Up Location:'} value={vehRentalCore.PickUpLocation['@Name']} />
            <RightRowWithIconRow image={Fuel} title={'Fuel Type:'} value={vehicle['@FuelType']} />
        </ul>
    )
}

export function RightRowWithIconRow({image, title, value}: {image: string, title: string, value: string}) {
    return (
        <li style={{ flexDirection: 'row', backgroundColor: 'green', width: '90%', margin: 16}}>
            <img src={image} alt={'Plane'} style={{height: 18, width: 18}}/>
            <div>
                <h6 style={{fontSize: 11, margin: 4}}>{title}</h6>
                <h6 style={{fontSize: 11, margin: 4}}>{value}</h6>
            </div>
        </li>
    )
}
