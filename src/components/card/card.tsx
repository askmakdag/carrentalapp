import CardLeft from "./card-left";
import CardMiddle from "./card-middle";
import {StyledCard} from "../styles/card/card.styled";
import CardRight from "./card-right";
import {AvailableVehicle} from "../../types/models/AvailableVehicle";

export default function Card({item}: {item: AvailableVehicle}) {
    return (
        <StyledCard>
            <CardLeft item={item}/>
            <CardMiddle />
            <CardRight item={item}/>
        </StyledCard>
    )
}
