import {VehicleRentalCoreModel} from "./vehicle-rental-core.model";
import {VehicleVendorAvailabilityModel} from "./vehicle-vendor-availability.model";

export interface RentalCarModel {
    VehAvailRSCore: {
        VehRentalCore: VehicleRentalCoreModel,
        VehVendorAvails: VehicleVendorAvailabilityModel[]
    }
}
