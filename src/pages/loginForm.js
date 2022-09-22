import React, { useEffect, useState }  from 'react';

import { Formik }from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { removeAdmin, setAdmin } from '../slices/adminSlice';
import jwtDecode from "jwt-decode";

const validationSchema = Yup.object({
  administratorName: Yup.string().max(50).required().label("AdministratorName"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(4).max(10).required().label("Password"),
});


const AdministratorLogin = () => {
 const router = useRouter();

 const dispatch = useDispatch();

 const [redirect, setRedirect] = useState("");
 const [ user ,setUser ] = useState({});

  //decode the jwt and get the current user.
  let jwt = "";
        
  const getToken = () => {
       jwt = localStorage.getItem("token");
  }


   useEffect(() => {
    // const jwt = localStorage.getItem("token");
      getToken();
     const user = jwtDecode(jwt);
      setUser(user);
      //console.log(user);
   },[jwt]);

   //verify whether the logged in users an Admin.
  const checkAdmin = (values) => {
      //console.log(values);
     if(user.isAdmin){
         dispatch(setAdmin());
         setRedirect("");
         router.push("/");
           
      }
      else{
        dispatch(removeAdmin());
        setRedirect("Access denied wrong Admin password or email ");
     }
  };

  return ( 
    <div className = " relative bg-gray-100   h-screen ">
      <div className = "absolute left-2 right-2">
          <div className = "bg-gray-700 ml-auto mr-auto p-7 max-w-md rounded-md absolute top-20 left-0 right-0">
            <Formik
             initialValues = {{ administratorName: "" ,email:"" ,password:""}}
             onSubmit = {values => checkAdmin(values)}
             validationSchema = {validationSchema}
             >
             { ({ handleChange ,handleSubmit, errors ,touched }) => (
                <>
                   <form  className = "grid grid-cols-1">

                        <h1 className = "text-lg font-semibold mb-2 text-left text-white">Administrator Login</h1>

                        <input  type="text" placeholder = "AdministratorName" 
                          className = "input"
                          onChange = { handleChange("administratorName") }
                        />

                        {touched.administratorName &&  errors.administratorName && <p className = "text-sm text-white my-1">{errors.administratorName}</p>}

                        <input  type="email" placeholder = "Email"
                           className = "input"
                           onChange = { handleChange("email") }
                        />

                        { touched.email && errors.email && <p className = "text-sm text-white my-1">{errors.email}</p>}

                        <input  type="password" placeholder = "Password"
                          className = "input"
                          onChange = { handleChange("password") }
                        />

                         { touched.password && errors.password && <p className = "text-sm text-white my-1">{errors.password}</p>}

                        <button 
                          type = "submit"
                          className = "Submit text-white"
                          onClick = { e => {
                            e.preventDefault();
                             handleSubmit();
                          }}
                        >
                          Login
                        </button>
                        
                         { redirect && (
                            <p  className = "text-sm text-white mt-1">
                               {redirect}
                            <span onClick = {(e) => {
                              e.preventDefault();
                              router.push("/");
                                }} className = "text-sm text-white hover:underline ml-2"> back to home</span>
                           </p>
                         )}
                    </form>
                </>
             )}
            </Formik>
            
        </div>
      </div>
  </div>
   );
}
 
export default AdministratorLogin;