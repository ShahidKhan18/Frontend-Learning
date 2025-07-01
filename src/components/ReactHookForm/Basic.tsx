import { useForm } from "react-hook-form";

import { DevTool } from "@hookform/devtools";
import { useRef } from "react";
import axios from "axios";

import { memo } from "react";

const Input = memo(
  ({
    label,
    id,
    type,
    register,
    validation,
    oninput,
    maxlength,
    pattern,
  }: {
    label: string;
    id: string;
    type: React.HTMLInputTypeAttribute;
    register: any;
    validation?: any;
    oninput?: any;
    maxlength?: any;
    pattern?: string;

  }) => {
    return (
      <div className="flex gap-2 w-full items-center justify-between">
        <label className="w-[100px] font-bold" htmlFor="username">
          {label}
        </label>
        <span>{"------>"}</span>
        <input
          className="border-1 rounded-sm p-1  bg-gray-800 px-2"
          type={type}
          id={id}
          name={id}
          {...register(id, { ...validation })}
          onInput={oninput}
          maxLength={maxlength} 
          pattern={pattern}
        />
      </div>
    );
  }
);



const Basic = () => {
  type Inputs = {
    username: string;
    email: string;
    channel: string;
    soccial:{
      twitter:string;
      facebook:string; 
    };
    phoneNumber:string[]
  };
  const form = useForm<Inputs>({
    mode:"onSubmit",
    defaultValues:async()=>{
      const data =(await axios.get("https://jsonplaceholder.typicode.com/users/1")).data
      
      return {
        username: data?.username || "",
        email: data?.email || "",
        channel: "",
        soccial:{
          twitter:"",
          facebook:""
        },
        phoneNumber:["",""]
      }
    }
  });
  const { register, control, handleSubmit,formState } = form;
  const {errors} = formState;
  console.log(errors,"Errors from")
  const onSubmit = (data: Inputs) => {
    
    console.log("Form Submited : ", data);
  };
  const renderCount = useRef(0);
  renderCount.current++;
  return (
    <div className="h-screen   p-8">
      <form
        className="border-2 flex flex-col justify-center items-center rounded-lg p-4 mx-auto w-[80%] max-w-[600px] min-w-[400px] gap-4"
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className="uppercase text-xl mb-4 font-bold">
          Youtube Basic Form {renderCount.current / 2}
        </h1>
        <Input
          label="Usename"
          id="username"
          type="text"
          register={register}
          validation={{
            required: {
              value: true,
              message: "Username is Required",
            },
          }}
        />
        <p className="text-red-600">{errors?.username?.message}</p>
        <Input
          label="Email"
          id="email"
          type="email"
          register={register}
          validation={{
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
              message: "Invalid Email ID",
            },
            required: {
              value: true,
              message: "Email is Required",
            },
            validate: {
              notAdmin: (filedValue: string) => {
                return (
                  filedValue !== "admin@gmail.com" ||
                  "Enter a different email address"
                );
              },
              blackListed: (filedValue: string) => {
                const balckListedEmails = [
                  "blackList1@gmail.com",
                  "blackList2@gmail.com",
                  "blackList3@gmail.com",
                ];

                return (
                  !balckListedEmails.includes(filedValue) ||
                  "This email is not allowed"
                );
              },
            },
          }}
        />
        <p className="text-red-600">{errors?.email?.message}</p>
        <Input
          label="Channel"
          id="channel"
          type="text"
          register={register}
          validation={{
            required: {
              value: true,
              message: "Channel is Required",
            },
          }}
        />
        <Input
          label="Twitter"
          id="soccial.twitter"
          type="text"
          register={register}
          validation={{
            required: {
              value: true,
              message: "Twitter is Required",
            },
          }}
        />
        <Input
          label="Facebook"
          id="soccial.facebook"
          type="text"
          register={register}
          validation={{
            required: {
              value: true,
              message: "Facebook is Required",
            },
          }}
        />
        <Input
          label="Promary Phone Number"
          id="phoneNumber.0"
          type="tel"
          register={register}
          pattern="[0-9]{10}" 
          maxlength="10"
           oninput="this.value=this.value.replace(/[^0-9]/g,'')"
          validation={{
            pattern: {
              value:/^[6-9]\d{9}$/,
              message: "Invalid Mobile Number",
            },
            required: {
              value: true,
              message: "Primary Phone Number is Required",
            },
            
          }}
        />
        <Input
          label="Secondary Phone Number"
          id="phoneNumber.1"
          type="tel"
          register={register}
        />

        <button
          className="border uppercase hover:bg-gray-900/70 w-[50%] px-2 py-1 rounded-md cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
export default Basic;
