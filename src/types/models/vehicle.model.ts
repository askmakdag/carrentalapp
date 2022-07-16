import {TransmissionTypeEnum, FuelTypeEnum, DriveTypeEnum, BaggageQuantityEnum, PassengerQuantityEnum} from "../enums";
import {DoorCountEnum} from "../enums/door-count.enum";

export interface VehicleModel {
    "@ID": string,
    "@AirConditionInd": boolean,
    "@TransmissionType": TransmissionTypeEnum,
    "@FuelType": FuelTypeEnum,
    "@DriveType": DriveTypeEnum,
    "@PassengerQuantity": PassengerQuantityEnum,
    "@BaggageQuantity": BaggageQuantityEnum,
    "@Code": string,
    "@CodeContext": string,
    "@DoorCount": DoorCountEnum,
    "VehMakeModel": {
        "@Name": string
    },
    "PictureURL": string,
}

