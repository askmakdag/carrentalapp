import {StyledCard} from "./styled/Card";
import {Bag, Door, Person} from "../assets";
import {VehicleAvailabilityModel, VehicleModel} from "../types/models";

export default function Card({item: {Vehicle, TotalCharge}}: {item: VehicleAvailabilityModel}) {
    console.log('item: ', Vehicle);
    return <>
        <StyledCard>
            <div>
                <h6>{Vehicle.VehMakeModel['@Name']}</h6>
                <img src={Vehicle?.PictureURL} alt={'selam'} style={{}}/>
                <CardCountsRow vehicle={Vehicle}/>
                <CardBottomInfoRow vehicle={Vehicle} />
            </div>
        </StyledCard>
    </>
}


export function CardCountsRow({vehicle}: {vehicle: VehicleModel}) {
    return (
        <ul>
            <li>
                <h3>{vehicle['@PassengerQuantity']}</h3>
                <img src={Person} alt={'person'} style={{height: 18, width: 18}}/>
            </li>

            <li>
                <h3>{vehicle['@BaggageQuantity']}</h3>
                <img src={Bag} alt={'person'} style={{height: 18, width: 18}}/>
            </li>
            <li>
                <h3>{vehicle['@DoorCount']}</h3>
                <img src={Door} alt={'person'} style={{height: 18, width: 18}}/>
            </li>
        </ul>
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

export function RightRowWithIcon({vehicle}: { vehicle: VehicleModel }) {
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
