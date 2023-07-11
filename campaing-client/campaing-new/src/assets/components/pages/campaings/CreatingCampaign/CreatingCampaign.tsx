
 import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import axios from "axios";
import { axiosInstance } from "../../../../services/apiCampaign";


const schema = z.object({
  associationName: z.string().min(3, { message: "associationName must be at least 3 characters" }),
  hashtag: z.string().min(3, { message: "hashtag must be at least 3 characters" }),
  email: z.string().email({
    message: "Invalid email. Please enter a valid email address",
  }),
  uri: z.string().min(3, { message: "uri must be at least 3 characters" }),
  campaignName: z.string().min(3, { message: "campaignName must be at least 3 characters" }),
  img: z.string().min(10, { message: "img must be at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;

export const CreatingCampaign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  
  const addCampaign = useMutation<FormData, Error, FormData>((createCampaign: FormData) =>
    axios.post(`${axiosInstance}/AddCampaign`, createCampaign).then((res) => res.data)
  );

  const onSubmit = (data: FormData) => {
    console.log(data);
    addCampaign.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {addCampaign.error && <p>Error</p>}
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
          <label htmlFor="uri">URI</label>
          <input {...register("uri")} id="uri" type="text" />
          {errors.uri?.message && <p>{errors.uri.message}</p>}
        </div>

        <div>
          <label htmlFor="campaignName">Campaign Name</label>
          <input {...register("campaignName")} id="campaignName" type="text" />
          {errors.campaignName?.message && <p>{errors.campaignName.message}</p>}
        </div>

        <div>
          <label htmlFor="img">Image</label>
          <input {...register("img")} id="img" type="text" />
         
          {errors.img?.message && <p>{errors.img.message}</p>}
        </div>

        <button type="submit" disabled={ addCampaign.isLoading}>
          {addCampaign.isLoading ? 'Submitting' : 'Submit'}
        </button>
      </form>
    </>
  );
};
