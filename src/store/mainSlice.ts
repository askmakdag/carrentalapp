import {createAsyncThunk, createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {RentalCarModel, VehicleRentalCoreModel} from "../types/models";
import RentalService from '../services/rentalService';
import {AvailableVehicle} from "../types/models/AvailableVehicle";
import {SortByEnum} from "../types/enums/sort-by.enum";
import {OrderByEnum} from "../types/enums/order-by.enum";

export interface InitialState {
    vehRentalCore: Partial<VehicleRentalCoreModel>,
    availableVehicles: AvailableVehicle[],
    selectedVehicle: AvailableVehicle | null,
    loading: boolean,
    sortBy: SortByEnum,
    orderBy: OrderByEnum,
}

// Define the initial state using that type
const initialState: InitialState = {
    vehRentalCore: {},
    availableVehicles: [],
    selectedVehicle: null,
    loading: false,
    sortBy: SortByEnum.Price,
    orderBy: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSelectedVehicle: (state: InitialState, action: PayloadAction<AvailableVehicle>) => {
            state.selectedVehicle = action.payload;
        },
        sortTheVehicles: (state: InitialState, action: PayloadAction<OrderByEnum> ) => {
            state.orderBy = action.payload;
            state.availableVehicles = sortBy(current(state).availableVehicles, SortByEnum.Price, action.payload);
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getTheFeed.pending, (state: InitialState) => {
            state.loading = true;
        })
        builder.addCase(getTheFeed.fulfilled, (state: InitialState, action: PayloadAction<RentalCarModel[]>) => {
            state.availableVehicles = listTheVehicles(action.payload?.[0]);
            state.vehRentalCore = action.payload?.[0].VehAvailRSCore.VehRentalCore;
            state.loading = false;
        })
        builder.addCase(getTheFeed.rejected, (state: InitialState) => {
            state.loading = false;
        })
    }
});

const listTheVehicles = (data: RentalCarModel) => {
    return data.VehAvailRSCore.VehVendorAvails.map((VVAItem) => {
            return VVAItem.VehAvails.map((VAItem) =>{
                return {
                    Vendor: VVAItem.Vendor,
                    ...VAItem,
                }
            });
    }).flat();
}

const sortBy = (list: AvailableVehicle[], type: SortByEnum, orderBy: OrderByEnum) => {
    if (type === SortByEnum.Price) {
        return list.slice().sort(compareByPrice);
    }

    return list;
}

function compareByPrice(a: AvailableVehicle, b: AvailableVehicle) {
    if (+a.TotalCharge["@RateTotalAmount"] < +b.TotalCharge["@RateTotalAmount"]) {
        return -1;
    }
    if (+a.TotalCharge["@RateTotalAmount"] > +b.TotalCharge["@RateTotalAmount"]) {
        return 1;
    }
    return 0;
}

export const getTheFeed = createAsyncThunk('main/getTheFeed', async () => {
    return RentalService.getAll().then(({data}) => data);
});

export const {setSelectedVehicle, sortTheVehicles} = mainSlice.actions;
export default mainSlice.reducer;
