import React, { useState } from 'react';
import { Formik }from "formik";
import * as Yup from "yup";
import { register } from '../pages/api/userService';
import { login } from '../pages/api/authService';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

const validationSchema = Yup.object({
    username: Yup.string().max(50).required().label("Username"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).max(10).required().label("Password"),
  });


const SignInScreen = () => {

//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const nameRef = useRef(null);

  const router = useRouter();
  
  const [registerUser ,setRegister] = useState(false);

  //register users using firebase API

    // const register = (values) => {

    //     auth.createUserWithEmailAndPassword(
    //         // emailRef.current.value,
    //         // passwordRef.current.value,
    //         values.email,
    //         values.password

    //     ).then((authUser) => {
    //         console.log(authUser);
    //     }).catch((error) => {
    //         alert(error.message);
    //     });

    //     dispatch(setName({
    //         name : values.username
    //     }))

    // };

    // below is signing using the firebase API.

//     const signIn = (values) => {

//         auth.signInWithEmailAndPassword(
//             // emailRef.current.value,
//             // passwordRef.current.value
//              values.email,
//              values.password
//         ).then((authUser) => {
//             console.log(authUser);
//         }).catch((error) => {
//             alert(error.message);
//         });
       
//         // set users name in redux store
//         dispatch(setName({
//             name : values.username
//         }))
        
//    };



    // check authentication method 
   const checkAuthenticationMethod = async (values) => {
          if(registerUser){
              try {
               const { data , headers } =  await register(values); 

               //console.log(headers["x-auth-token"]);

               localStorage.setItem( "token", headers["x-auth-token"] );

               router.push('/');

              } catch (ex) {

                if(ex.response && ex.response.status === 400){
                    //console.log(ex.response.data);
                    toast(ex.response.data);}
                    
                
                  
              }
              
          }
          else {
            //signIn(values);    this is signing in using firebase API

               try {
                   //get the jwt to login the user.
                   const { data : jwt } = await login(values);

                   console.log(jwt);

                   localStorage.setItem("token",jwt);

                   router.push('/');


               } catch (ex) {

                    if(ex.response && ex.response.status === 400){
                         //console.log(ex.response.data);
                         toast(ex.response.data);}
                
               }
            
          }
   };


    return ( 
        <div className = "bg-gray-700 ml-auto mr-auto p-5 md:p-7 max-w-md">
            {/* //Toast container to display error messages as a result of Authentication.  */}
              <ToastContainer/>

            <Formik
             initialValues = {{ username: "" ,email:"" ,password:"" }}
             onSubmit = { values => checkAuthenticationMethod(values) }
             validationSchema = { validationSchema }
             >
                 {({ handleChange, handleSubmit , errors, touched }) => 
                 <>
                    <form action="" className = "grid grid-cols-1">
                        <h1 className = "text-lg font-semibold mb-2 text-left">Sign In</h1>
                        
                        <input onChange = {handleChange("username")} type="text" placeholder = "Username" 
                        className = "focus:outline-none border-0 p-6 w-auto h-8 m-2 text-black rounded-md"
                        />

                        {touched.username && errors.username && <p className = "text-sm text-white my-1">{errors.username}</p>}

                        <input onChange = {handleChange("email")} type="email" placeholder = "Email"
                        className = "focus:outline-none border-0 p-6 w-auto h-8 m-2 text-black rounded-md"
                        />

                        {touched.email && errors.email && <p className = "text-sm text-white my-1">{errors.email}</p>} 

                        <input onChange = {handleChange("password")} type="password" placeholder = "Password"
                        className = "focus:outline-none border-0 p-6 w-auto h-8 m-2 text-black rounded-md"
                        />

                       { touched.password && errors.password && <p className = "text-sm text-white my-1">{errors.password}</p>}
                        
                        <button type = "submit" onClick = { e => {
                            e.preventDefault();
                            handleSubmit();
                            setRegister(false); 
                        }}
                        className = "py-2 px-4 font-semibold text-lg bg-blue-700 hover:bg-blue-400 rounded-md border-0 focus:outline-none m-2"
                        >Sign In</button>

                        <h4>
                            <span className = "text-base text-gray-100"> New to African Craft Shoes?</span>
                            <span className = "cursor-pointer ml-2 hover:underline " 
                             onClick = { (e) => {
                                      e.preventDefault();
                                       handleSubmit();
                                       setRegister(true); 
                                 }} >
                              SignUp now
                            </span> 
                        </h4>
                    </form>
                 </>
                 }
             </Formik>
         
        </div>
     );
}
 
export default SignInScreen;
