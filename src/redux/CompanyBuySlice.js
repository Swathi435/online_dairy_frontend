import { createSlice } from "@reduxjs/toolkit";
import CompanyBuysMilk from "../components/models/CompanyBuysMilk";

const CompanyBuySlice = createSlice({

    name : 'companybuysmilk',

    initialState:{
        companybuysmilkState:new CompanyBuysMilk(),
        companybuysmilkList:[]
    },

    reducers:{
        companyBuyMilk:(state,action) => {
            console.log('CompanyBuySlice reducers Buymilk');
            state.customerList=action.payload;
        }
    }

});

export const {companyBuysMilk}=CompanyBuySlice.actions;

export default CompanyBuySlice.reducer;