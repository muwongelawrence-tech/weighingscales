import { FormatListNumberedRtlTwoTone } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: 'name',

  initialState:{

    name : ""
    
  },
  reducers: {
    setName: (state , action) => {
    
      state.name = action.payload.name;
    },
    removeName: (state) => {
      state.name = "";
    }
    
  }
  
});

export const {  setName, removeName } = nameSlice.actions;

export const selectName = (state) =>  state.name.name;

export default nameSlice.reducer;
