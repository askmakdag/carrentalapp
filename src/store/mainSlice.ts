import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RentalCarModel } from "../types/models";
import RentalService from '../services/rentalService';

export interface InitialState {
    feed?: RentalCarModel[],
    loading: boolean,
}

// Define the initial state using that type
const initialState: InitialState = {
    feed: [],
    loading: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(getTheFeed.pending, (state: InitialState) => {
            state.loading = true;
        })
        builder.addCase(getTheFeed.fulfilled, (state: InitialState, action: PayloadAction<RentalCarModel[]>) => {
            state.feed = action.payload;
            state.loading = false;
        })
        builder.addCase(getTheFeed.rejected, (state: InitialState) => {
            state.loading = false;
        })
    }
});

export const getTheFeed = createAsyncThunk('main/getTheFeed', async () => {
    return RentalService.getAll().then(({data}) => data);
});

export default mainSlice.reducer;
