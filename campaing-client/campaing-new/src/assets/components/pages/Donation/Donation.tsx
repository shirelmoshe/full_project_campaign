
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import axios from "axios";
import { axiosInstance } from "../../../services/apiCampaign";

const schema = z.object({
  CompanyName: z.string().min(3, { message: 'Company Name must be at least 3 characters' }),
  Product: z.string().min(3, { message: 'Product must be at least 3 characters' }),
  CampaignName: z.string().min(3, { message: 'Campaign Name must be at least 3 characters' }),
  Price: z.number(),
  Email: z.string().email({
    message: 'Invalid email. Please enter a valid email address',
  }),
  Quantity: z.number(),
});

type FormData = z.infer<typeof schema>;

export const Donation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<FormData>({ resolver: zodResolver(schema) });


  const addDonation = useMutation<FormData, Error, FormData>((donation: FormData) =>
  axios
    .post(`${axiosInstance}/Donation`, donation)
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || 'An error occurred');
    })
);


  const onSubmit = (data: FormData) => {
    console.log(data);
    addDonation.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {addDonation.error && <p>Error</p>}
        <div>
          <label htmlFor="CompanyName">Company Name</label>
          <input {...register('CompanyName')} id="CompanyName" type="text" />
          {errors.CompanyName && <p className="error-message">{errors.CompanyName.message}</p>}
        </div>

        <div>
          <label htmlFor="Product">Product</label>
          <input {...register('Product')} id="Product" type="text" />
          {errors.Product && <p className="error-message">{errors.Product.message}</p>}
        </div>

        <div>
          <label htmlFor="CampaignName">Campaign Name</label>
          <input {...register('CampaignName')} id="CampaignName" type="text" />
          {errors.CampaignName && (
            <p className="error-message">{errors.CampaignName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="Price">Price</label>
          <input {...register("Price", { valueAsNumber: true })} id="Price" type="number" />
          {errors.Price && <p className="error-message">{errors.Price.message}</p>}
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input {...register('Email')} id="Email" type="email" />
          {errors.Email && <p className="error-message">{errors.Email.message}</p>}
        </div>

        <div>
          <label htmlFor="Quantity">Quantity</label>
          <input {...register("Quantity", { valueAsNumber: true })} id="Quantity" type="number" />
          {errors.Quantity && <p className="error-message">{errors.Quantity.message}</p>}
        </div>

        <button type="submit" disabled={addDonation.isLoading}>
          {addDonation.isLoading ? 'Submitting' : 'Submit'}
        </button>
        </form>
    </>
  );
};
