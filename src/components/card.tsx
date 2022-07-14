import CardLeft from "./card-left";
import {VehicleAvailabilityModel, VehicleRentalCoreModel, VendorModel} from "../types/models";
import CardMiddle from "./card-middle";
import {StyledCard} from "./styles/card.styled";
import CardRight from "./card-right";

export type Props = {item: VehicleAvailabilityModel, vendor: VendorModel, vehRentalCore: VehicleRentalCoreModel};
export default function Card({item, vendor,  vehRentalCore}: Props) {
    return (
        <StyledCard>
            <CardLeft item={item} vendor={vendor} vehRentalCore={vehRentalCore} />
            <CardMiddle />
            <CardRight charge={item.TotalCharge}/>
        </StyledCard>
    )
}
