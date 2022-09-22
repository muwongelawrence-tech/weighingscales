import { FormatListNumberedRtlTwoTone } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: 'admin',

  initialState:{

    admin : false
    
  },
  reducers: {
    setAdmin: (state) => {
    
      state.admin = true;
    },
    removeAdmin: (state) => {
      
      state.admin = false;
    }
    
  }
  
});

export const {  setAdmin, removeAdmin } = adminSlice.actions;

export const selectAdmin = (state) =>  state.admin.admin;

export default adminSlice.reducer;
