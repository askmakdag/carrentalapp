import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
    },
    reducers: {
        setCars: (state, action: PayloadAction<number>) => {

        },
    },
});

export const {setCars} = carsSlice.actions
export default carsSlice.reducer;
