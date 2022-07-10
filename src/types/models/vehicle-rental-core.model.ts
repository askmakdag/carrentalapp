export interface VehicleRentalCoreModel {
    "@PickUpDateTime": string,
    "@ReturnDateTime": string,
    PickUpLocation: {
        "@Name": string,
    },
    ReturnLocation: {
        "@Name": string,
    }
}
