import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getShoes } from "../pages/api/fakeshoesdetails";


 let products = getShoes();

const initialState = {
  items: [],
  itemsAdded :getShoes(),
  
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    
    // getData:(state, action) => {
    //   products = action.payload;
    //   //console.log(products);
    //   state.itemsAdded = action.payload;
    // },
    
    // adding product to cart reducer.
    addToBasket: (state, action) => {

      const itemExists = state.items.find(item => item._id === action.payload._id);

          if(itemExists) {

            //if product already exists on the cart increment its value .
                for(let i = 0 ; i < state.itemsAdded.length; i++){
                  if(state.itemsAdded[i]._id === action.payload._id){
                    if(state.itemsAdded[i].numberInStock === 0){ toast("item is over"); }
                      else{ 
                          state.itemsAdded[i].numberInStock--;
                          //updateShoe(state.itemsAdded[i]);
                          state.itemsAdded[i].quantity++;
                        }
                      
                    }
                }
          }
          else {
            // update the database for shoes products
            for(let i = 0 ; i < state.itemsAdded.length; i++){
              if(state.itemsAdded[i]._id === action.payload._id){
                  state.itemsAdded[i].numberInStock--;
                 // updateShoe(state.itemsAdded[i]);
                 state.itemsAdded[i].quantity++;
              }
            }
            
            //paste the payload in the items array on the cart.
            state.items = [...state.items,action.payload];

          } 
          // end of else { if it is the first time the item is added to cart. }

          for(let i = 0 ; i < state.items.length; i++){
             if(state.items[i]._id === action.payload._id){
              if(state.items[i].numberInStock === 0){ toast("item is over"); }
                 else {
                   state.items[i].numberInStock--;
                   state.items[i].quantity++;
                   state.items[i].accumulate = (state.items[i].price)*(state.items[i].quantity);
                 }
             }
          }
     
    },
  
  // end of add to Basket action reducer.

    removeFromBasket: (state, action) => {
    
    // remove the item from the checkout session page
      state.items = state.items.filter(item => item._id !== action.payload._id);

      for(let i = 0 ; i < state.items.length; i++){
        if(state.items[i]._id === action.payload._id){
          state.items[i].accumulate = 0;
        }
      }

    },
    // end of removeFromBasket action

    decreaseItem: (state,action) => {
      // decrease item in the  shoes products database
      //console.log(state.itemsAdded);

      for(let i = 0 ; i < state.itemsAdded.length; i++){
            if(state.itemsAdded[i]._id === action.payload._id){
               if(state.itemsAdded[i].quantity === 0){ toast("item is not added to cart"); }
               else { state.itemsAdded[i].numberInStock++;
                      //updateShoe(state.itemsAdded[i]);
                //state.itemsAdded[i].quantity--;
                //console.log(state.itemsAdded[i]);
              }
               
            }
      }
      
    
     // decrease item in the checkout page database  
      for(let i = 0 ; i < state.items.length; i++){
        if(state.items[i]._id === action.payload._id){
          if(state.items[i].quantity === 0){ toast("item is not added to cart"); }
          else { state.items[i].numberInStock++;
                 state.items[i].quantity--;
                 state.items[i].accumulate = (state.items[i].price)*(state.items[i].quantity);
             }
        }
     }
   },
   //end of decrease item action reducer

   // implemented with a O(n) time complexity.
   SearchItem: (state ,action) => {
      
      //check to see if search query is empty.
     if(action.payload.search.length === 0){
        
       state.itemsAdded = products;
          //filter data based on the search criteria
      } 
     else {
          state.itemsAdded = state.itemsAdded.filter(item =>
          item.category.toLowerCase().startsWith(action.payload.search.trim().toLowerCase())
       );
     }
    
   }
  },
});

export const { addToBasket, removeFromBasket , decreaseItem , SearchItem, getData , getMaterials } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectItemAdded = (state) => state.basket.itemsAdded;

export const selectRawMaterials = (state) => state.basket.rawMaterials; 

// export const selectTotal = (state) => 
// state.basket.items.reduce((total,item) => total + item.price ,0);

export const selectTotal = (state) => 
state.basket.items.reduce((total ,item ) => total + item.accumulate , 0 );

export const selectQuantity = (state) => 
state.basket.items.reduce((total ,item ) => total + item.quantity , 0 );


export default basketSlice.reducer;
