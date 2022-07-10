import {TotalChargeModel} from "./total-charge.model";
import {VehicleModel} from "./vehicle.model";
import {VehicleAvailabilityStatusEnum} from "../enums";

export interface VehicleAvailabilityModel {
    "@Status": VehicleAvailabilityStatusEnum,
    "Vehicle": VehicleModel,
    "TotalCharge": TotalChargeModel,
}
