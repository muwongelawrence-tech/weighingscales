import { FormatListNumberedRtlTwoTone } from "@material-ui/icons";
import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: 'menu',

  initialState:{

    sendMessageIsOpen:false,
    
  },
  reducers: {
    openSendMessage: (state) => {
    
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      
      state.sendMessageIsOpen = false;
    }
    
  }
  
});

export const {  openSendMessage, closeSendMessage } = menuSlice.actions;

export const selectSendMessageIsOPen = (state) =>  state.menu.sendMessageIsOpen;

export default menuSlice.reducer;
