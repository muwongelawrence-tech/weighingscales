import React from 'react';
import { Formik }from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { updateShoe } from "../api/shoesService";
import { useEffect } from 'react';


const validationSchema = Yup.object({
    title: Yup.string().max(50).required().label("Title"),
    price: Yup.number().min(0).max(15000).required().label("Price"),
    description: Yup.string().min(5).max(100).required().label("Description"),
    category: Yup.string().required().label("Category"),
    numberInStock: Yup.number().min(1).max(200).required().label("NumberInStock")

  });

  
const ShoeForm = () => {

   const router = useRouter();
  
  let _id = "";

 

  //  //call the useEffect hook after the component has mounted.
   useEffect(()=> {
   _id = router.query.id;
    
  });

  

  async function save(values){
     try {
        //console.log(_id);

      const update_shoe = { _id, ...values };

      //console.log(update_shoe);
      
       const { data } = await updateShoe(update_shoe);

       //console.log(data);

       router.push("/");
       
     }
     catch(err){
       console.error(err);
     }
  };

   return ( 
       <div className = " relative bg-gray-800   h-screen ">
        <div className = "absolute left-2 right-2">
            <div className = "bg-gray-600 ml-auto mr-auto p-7 max-w-md rounded-md absolute top-0 left-0 right-0">
              <Formik
               initialValues = {{ 
                 title: "" ,
                 price: "",
                 description: "",
                 category:"",
                 numberInStock:""
                }}

                onSubmit = { values => save(values) }
                validationSchema = { validationSchema }
               >
               { ({ handleChange ,handleSubmit, errors , values ,touched }) => (
                  <>
                     <form  className = "grid grid-cols-1" onSubmit = { handleSubmit }>
  
                          <h1 className = "text-lg font-semibold mb-2 text-left text-white">Edit shoe</h1>
  
                          <input  type="text" placeholder = "Title" 
                            className = "input"
                        
                            onChange = { handleChange("title") }
                          />
  
                          { touched.title &&  errors.title && <p className = "text-sm text-white my-1">{errors.title}</p>}
  
                          <input  type="number" placeholder = "Price"
                             className = "input h-10"
                             
                             onChange = { handleChange("price") }
                          />
  
                          {touched.price && errors.price && <p className = "text-sm text-white my-1">{errors.price}</p>}
  
                          <input  type="text" placeholder = "Category"
                            className = "input"
                          
                            onChange = {handleChange("category")}
                          />
  
                          {touched.category && errors.category && <p className = "text-sm text-white my-1">{errors.category}</p>}
                           
                           <input  type="number" placeholder = "NumberInStock"
                            className = "input"
                            
                            onChange = {handleChange("numberInStock")}
                          />
                           {touched.numberInStock && errors.numberInStock && <p className = "text-sm text-white my-1">{errors.numberInStock}</p>}

                           <textarea  placeholder = "Description"
                             className = "focus:outline-none border-0 p-4 md:p-10 w-auto m-2 text-black rounded-md resize-none "
                              rows = "3" cols = "30"
                              onChange = {handleChange("description")}
                              
                            >
                              
                            </textarea>                           
                            
                            { touched.description &&  errors.description && <p className = "text-sm text-white my-1">{errors.description}</p>}
                        

                          <button 
                            type="submit"
                            className = "Submit text-white"
                          >
                            Save
                          </button>
                         
                      </form>
                  </>
               )}
              </Formik>
              
          </div>
        </div>
    </div>
     );
}
 
export default ShoeForm;