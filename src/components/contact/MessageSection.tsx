import { contactFormImg } from '@/assets/contact'
import { TextField } from '@mui/material'
import { useFormik,FormikHelpers } from 'formik';
import * as Yup from "yup";
import React from 'react'
import Swal from 'sweetalert2';
type FormType = {
    name: string;
    email: string;
    subject:string; 
    message: string;
  };

export default function MessageSection() {
    let initialValues: FormType = {
        name: "",
        email: "",
        subject:"",
        message: "",
      };
      const formik = useFormik({
        initialValues,
    
        validationSchema: Yup.object({
          name: Yup.string()
            .required("* Name is required")
            .min(2, "* Enter a valid name"),
          email: Yup.string()
            .email("* Enter a valid E-mail")
            .required("* E-mail is required"),
            subject: Yup.string().required("* subject is required"),
    
       
          message: Yup.string().required("* Write some Message"),
        }),
        onSubmit: (values: FormType, props: FormikHelpers<FormType>) => {
          console.log(values);
        
          props.resetForm();
          Swal.fire({
            title: "Message send Successfully",
            icon: "success",
          });
        },
      });
  return (
    <section className='w-full main-container flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center my-24 '>
      <div style={{backgroundImage:`url(${contactFormImg.src})`}} className='w-full h-[80vh] '></div>
      <div className='w-full lg:relative'>
            <span className='lg:absolute lg:top-1/2 lg:-left-10 lg:-translate-y-1/2 bg-white w-full p-6 flex flex-col items-start justify-center gap-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <p className='text-xl text-red-600 tracking-wider uppercase'>give a review</p>
                <h1 className='text-3xl font-bold tracking-wide capitalize'>leave a message</h1>
                <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc aliquam.</p>
                <form onSubmit={formik.handleSubmit} className='w-full flex flex-col items-start justify-center gap-4'>
                    <span className='center w-full gap-2'>
                        <TextField 
                        className='w-full'
                        type={"text"}
                        placeholder="Enter your name"
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(
                            formik.touched.name  &&
                              formik.errors.name 
                          )}
                          helperText={
                            formik.touched.name  &&
                            formik.errors.name
                          }
                        />
                        <TextField
                        className='w-full'
                        name='email'
                        type={"email"}
                        placeholder="Enter your email address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(
                            formik.touched.email  &&
                              formik.errors.email 
                          )}
                          helperText={
                            formik.touched.email  &&
                            formik.errors.email
                          }
                        />
                    </span>
                    <TextField 
                    className='w-full'
                    name='subject'
                    type={"text"}
                    placeholder="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                        formik.touched.subject &&
                          formik.errors.subject 
                      )}
                      helperText={
                        formik.touched.subject  &&
                        formik.errors.subject
                      }
                    />
                    <TextField 
                    className='w-full' 
                    rows={"7"} 
                    multiline
                    name='message'
                    type={"text"}
                    placeholder="Leave your message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                        formik.touched.message  &&
                          formik.errors.message 
                      )}
                      helperText={
                        formik.touched.message  &&
                        formik.errors.message
                      }
                    />
                    <button className='w-full rounded-md bg-gradient-to-r from-blue-600 to-red-600 text-white text-lg tracking-wider p-4 uppercase'
                    type='submit'
                    
                    >send message</button>
                </form>
            </span>
      </div>
    </section>
  )
}
