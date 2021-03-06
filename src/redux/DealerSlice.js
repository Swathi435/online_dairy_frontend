import { createSlice } from "@reduxjs/toolkit";
import Dealer from "../components/models/Dealer";


// step 3 for redux - create slices for each components 
const DealerSlice = createSlice({

    name: 'dealer',

    initialState: {
       

        dealerState: new Dealer(),
        dealerList: []


    },

    reducers: {

        getDealById: (state, action) => {
            console.log('dealer slice reducer');
            state.dealerState = action.payload;
        },

        getAllDealers: (state, action) => {
            console.log('dealer Slice reducers getAllfarmer');
            state.dealerList = action.payload;
        },
        deletedealById: (state, action) => {
            console.log('farmSlice reducers deleteFarmerById');
            state.dealerList = action.payload;
        },
        

    
    }
});

export const {getDealById , getAllDealers, deletedealById} = DealerSlice.actions;

export default DealerSlice.reducer;