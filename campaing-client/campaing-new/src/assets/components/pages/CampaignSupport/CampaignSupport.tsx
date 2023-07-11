


  
 import { useForm } from "react-hook-form";
 import { z } from "zod";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { useMutation } from "react-query";
 import axios from "axios";
 import { axiosInstance } from "../../../services/apiCampaign"
 import "./CampaignSupport.css"
 

 const schema = z.object({
   associationName: z.string().min(3, { message: "associationName must be at least 3 characters" }),
   hashtag: z.string().min(3, { message: "hashtag must be at least 3 characters" }),
   email: z.string().email({
     message: "Invalid email. Please enter a valid email address",
   }),
   userName: z.string().min(3, { message: "userName must be at least 3 characters" }),
   twitterUsername: z.string().min(3, { message: "twitterUsername must be at least 3 characters" }),
   CampaignName: z.string().min(10, { message: "CampaignName must be at least 10 characters" }),
 });
 
 type FormData = z.infer<typeof schema>;
 
 export const CampaignSupport = () => {
   const {
     register,
     handleSubmit,
     formState: { errors},
   } = useForm<FormData>({ resolver: zodResolver(schema) });
 
   
   const addCampaignSupport = useMutation<FormData, Error, FormData>((campaignSupport: FormData) =>
     axios.post(`${axiosInstance}/CampaignSupport`, campaignSupport).then((res) => res.data)
   );
 
   const onSubmit = (data: FormData) => {
     console.log(data);
     addCampaignSupport.mutate(data);
   };
 
   return (
     <>
       <form onSubmit={handleSubmit(onSubmit)} className="formcss">
         {addCampaignSupport.error && <p>Error</p>}
         <div>
           <label htmlFor="associationName">Association Name</label>
           <input {...register("associationName")} id="associationName" type="text" />
           {errors.associationName?.message && <p>{errors.associationName.message}</p>}
         </div>
 
         <div>
           <label htmlFor="hashtag">Hashtag</label>
           <input {...register("hashtag")} id="hashtag" type="text" />
           {errors.hashtag?.message && <p>{errors.hashtag.message}</p>}
         </div>
 
         <div>
           <label htmlFor="email">Email</label>
           <input {...register("email")} id="email" type="email" />
           {errors.email?.message && <p>{errors.email.message}</p>}
         </div>
 
         <div>
           <label htmlFor="userName">userName</label>
           <input {...register("userName")} id="userName" type="text" />
           {errors.userName?.message && <p>{errors.userName.message}</p>}
         </div>
 
         <div>
           <label htmlFor="twitterUsername">twitter Username</label>
           <input {...register("twitterUsername")} id="campaignName" type="text" />
           {errors.twitterUsername?.message && <p>{errors.twitterUsername.message}</p>}
         </div>
 
         <div>
           <label htmlFor="CampaignName">CampaignName</label>
           <input {...register("CampaignName")} id="img" type="text" />
          
           {errors.CampaignName?.message && <p>{errors.CampaignName.message}</p>}
         </div>
 
         <button type="submit" disabled={ addCampaignSupport.isLoading}>
           {addCampaignSupport.isLoading ? 'Submitting' : 'Submit'}
         </button>
       </form>
     </>
   );
 };
 