import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch, useSelector } from 'react-redux';
import  Link  from 'next/link';
import { addToBasket, selectItemAdded} from '../slices/basketSlice';
import { selectAdmin } from '../slices/adminSlice';
import { setEditId, updateShoe } from '../pages/api/shoesService';
import { useRouter } from 'next/router';

const MAX_RATING = 5;
const MIN_RATING = 3;

const Product = ({ _id ,title ,price ,description ,category ,image , numberInStock, quantity  }) => {

    const [rating] = useState(
        Math.floor(Math.random()*(MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

        const admin = useSelector(selectAdmin);

        const router = useRouter();

        const newShoe = {  _id ,title ,price , description, category , image , numberInStock };

        const dispatch = useDispatch();

        const hideElement = numberInStock === 0 ? "hidden" : "";

        const addItemToCart = async (e) => {
            e.preventDefault();
            const product = { _id, title, price, description, category, image, rating, numberInStock, quantity };
            // sending the product as an action to the Redux store.
            
            dispatch(addToBasket(product));

            
              // newShoe.numberInStock--;

              //console.log(newShoe);

              // const { data } =   await updateShoe(newShoe); 

              // console.log( data );

        

      };

      // const ChangeData = (e) => {
      //   e.preventDefault();
      //   setEditId(_id);
      // }

    return ( 
        <div className = {`relative flex flex-col m-5 bg-white z-30 p-10 rounded-md ${ hideElement }`}>

          <p className ="absolute top-2 right-2 text-xs italic text-gray-400">{ category }</p>

          <Image src = { image } height ={ 200 } width = { 200 } 
          objectFit = "contain"
          className = "transform motion-safe:hover:scale-110 "
          />

          <h4 className = "my-3 ">{ title }</h4>

            <div className = "flex">
            { Array(rating).fill().map((_ , i) => (
                <StarIcon
                 key = {i} 
                className = "h-5 text-yellow-500"
                />
            ))}
       
           </div>  
           <p className = "text-xs my-2 line-clamp-2">{description}</p>
            <div className = "mb-5 ">
                <Currency  quantity = {price}  currency = "UGX"/>
            </div>
           
            <p className = "text-sm my-1 ">
              <span className ="text-blue-600"> Available :</span>
              <span className = "pl-2 text-pink-600">{ numberInStock }</span>
            </p>

        {/* { admin && (

              //  <Link 
              //  href= {`/shoeForm/[id]`} 
              //  as = {`/shoeForm/${_id}`}
              //   >
              //  <a className ="mb-2 text-sm text-gray-600 italic hover:underline" >Edit product</a>
              // </Link>
              <span
                className = "mb-2 text-sm text-gray-600 italic hover:underline"
                onClick = { e => {
                  e.preventDefault();
                  router.push(`/shoeForm/${_id}`);
                  
                }}
              >Edit product</span>
        )} */}

           < button onClick ={ addItemToCart } className = "button mt-auto  rounded-sm">Add to Cart</button>
        
        </div>
     );
}
 
export default Product;