'use client'

import Logo from "@/elements/Logo";
import LoginAPI from './loginUser';

import { logIn,logOut } from '@/Redux/slices/auth-slice';
import Button from "@/elements/Button";
import { Controller,useForm } from "react-hook-form";

import { useSelector } from "react-redux";

const inputFields = [
  { id: 'email', type: 'text', placeholder: 'Enter email', label: 'Email' },
  { id: 'password', type: 'password', placeholder: 'Enter Password', label: 'Password' },
];






export default function LoginPage (){
  const theme = useSelector((state)=> state.themeReducer.value);
 
  const {
    register,
    control,
     
    handleSubmit,
    formState: { errors },
  } = useForm() as any;

  const onSubmit= (data:any)=>{
   
    console.log(data);

    const x= LoginAPI(data.email, data.password); 
    console.log(x)

  }
   
  console.log(theme)
 

return (
    
    <div
   
    className={` bg-${theme.name}  z-2  w-screen h-screen top-0 left-0 absolute flex items-center justify-center`}>


    <div className="w-full max-w-xs">
            <div className="w-full shadow-lg  bg-inner py-4  max-w-xs">
                <div className="rounded-lg flex flex-col space-y-4 justify-center  px-8 py-6 mb-4">
                  
                        <Logo width={70} classes='flex  justify-center '  height={70} />
                    
                    <div className="text-white text-xl text-center mb-4 font-bold">
                        Sign In
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
      {inputFields.map((f,key) => (
        <div className="mb-4" key={key}>
          <Controller
            rules={{ required: true }}
            name={f.id}
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <div>
                <label htmlFor={f.id} className="block text-white font-bold mb-2">{f.label}</label>
                <input
                  {...field}
                  type={f.type}
                  id={f.id}
                  placeholder={`Enter ${f.label}`}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
         
       
          {/* <label htmlFor={field.id} className="block text-white font-bold mb-2">{field.label}</label>
          <input
            type={field.type}
            id={field.id}
            placeholder={field.placeholder}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          /> */}
       
        </div>
      ))}
      <div className="mb-6 flex justify-center">
        <Button  type='submit' 
        name='Sign in'
        classes='font-bold bg-blue-800 mt-3 py-2 px-4 rounded text-white focus:shadow-outline transition-transform duration-200 hover:bg-blue-700 hover:scale-105'
        />
      </div>
    </form>
                </div>
              
            </div>
        </div>
    </div>
);
 }
 