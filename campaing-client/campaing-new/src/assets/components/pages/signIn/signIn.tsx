

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import axios from "axios";
import { axiosInstance } from "../../../services/apiCampaign";


const schema = z.object({
  userName: z.string().min(3, { message: "userName must be at least 3 characters" }),
  cellphoneNumber: z.string().min(3, { message: "cellphoneNumber must be at least 3 characters" }),
  email: z.string().email({
    message: "Invalid email. Please enter a valid email address",
  }),
  Twitterusername: z.string().min(3, { message: "Twitterusername must be at least 3 characters" }),

  UserType: z.string().min(3, { message: "UserType must be at least 3 characters" }),
 
});

type FormData = z.infer<typeof schema>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  
  const addUser = useMutation<FormData, Error, FormData>((user: FormData) =>
    axios.post(`${axiosInstance}/addUser`, user).then((res) => res.data)
  );

  const onSubmit = (data: FormData) => {
    console.log(data);
    addUser.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {addUser.error && <p>Error</p>}
        <div>
          <label htmlFor="userName">user Name</label>
          <input {...register("userName")} id="userName" type="text" />
          {errors.userName?.message && <p>{errors.userName.message}</p>}
        </div>

        <div>
          <label htmlFor="cellphoneNumber">cellphoneNumber</label>
          <input {...register("cellphoneNumber")} id="cellphoneNumber" type="text" />
          {errors.cellphoneNumber?.message && <p>{errors.cellphoneNumber.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} id="email" type="email" />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="Twitterusername">Twitter user name</label>
          <input {...register("Twitterusername")} id="Twitterusername" type="text" />
          {errors.Twitterusername?.message && <p>{errors.Twitterusername.message}</p>}
        </div>

        <div>
          <label htmlFor="UserType">User Type</label>
          <input {...register("UserType")} id="UserType" type="text" />
          {errors.UserType?.message && <p>{errors.UserType.message}</p>}
        </div>

        

        <button type="submit" disabled={ addUser.isLoading}>
          {addUser.isLoading ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </>
  );
};
