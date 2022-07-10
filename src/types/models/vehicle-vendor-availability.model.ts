import {VehicleAvailabilityModel} from "./vehicle-availability.model";
import {VendorModel} from "./vendor.model";

export interface VehicleVendorAvailabilityModel {
    VehAvails: VehicleAvailabilityModel[],
    Vendor: VendorModel,
}
