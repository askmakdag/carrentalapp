import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RentalCarModel, VehicleRentalCoreModel} from "../types/models";
import RentalService from '../services/rentalService';
import {AvailableVehicle} from "../types/models/AvailableVehicle";

export interface InitialState {
    vehRentalCore: Partial<VehicleRentalCoreModel>,
    availableVehicles: AvailableVehicle[],
    selectedVehicle: AvailableVehicle | null,
    loading: boolean,
}

// Define the initial state using that type
const initialState: InitialState = {
    vehRentalCore: {},
    availableVehicles: [],
    selectedVehicle: null,
    loading: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setSelectedVehicle: (state, action) => {
            state.selectedVehicle = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getTheFeed.pending, (state: InitialState) => {
            state.loading = true;
        })
        builder.addCase(getTheFeed.fulfilled, (state: InitialState, action: PayloadAction<RentalCarModel[]>) => {
            state.availableVehicles = listTheVehicles(action.payload?.[0]);
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

export const getTheFeed = createAsyncThunk('main/getTheFeed', async () => {
    return RentalService.getAll().then(({data}) => data);
});

export const {setSelectedVehicle} = mainSlice.actions;
export default mainSlice.reducer;
