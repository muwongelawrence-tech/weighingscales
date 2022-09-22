import React from 'react';
import { useSelector } from 'react-redux';
import { selectRawMaterials } from '../slices/basketSlice';
import RawMaterial from './rawMaterial';


const RawMaterialFeed = () => {
  const products = useSelector(selectRawMaterials);

    return ( 
        <div className ="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0,4).map(({_id,title,price,description,category,image, numberInStock })=> (
              <RawMaterial
               key ={_id}
               _id = {_id}
               title = {title}
               price = {price}
               description = {description}
               category = {category}
               image = {image}
               numberInStock = {numberInStock}
               //quantity = {quantity}
              />
            ))}

            <img className = "md:col-span-full" src="https://links.papareact.com/dyz" alt=""/>
            
           

            {products.slice(4,products.length).map(({_id,title,price,description,category,image,numberInStock })=> (
              <RawMaterial
              key ={_id}
              _id = {_id}
              title = {title}
              price = {price}
              description = {description}
              category = {category}
              image = {image}
              numberInStock = {numberInStock}
              //quantity = {quantity}
             />
            ))}


        </div>
     );
}
 
export default RawMaterialFeed;