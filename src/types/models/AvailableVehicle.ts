import {VendorModel} from "./vendor.model";
import {VehicleModel} from "./vehicle.model";
import {TotalChargeModel} from "./total-charge.model";

export interface AvailableVehicle {
    '@Status': string
    Vendor: VendorModel,
    Vehicle: VehicleModel,
    TotalCharge: TotalChargeModel,
}
