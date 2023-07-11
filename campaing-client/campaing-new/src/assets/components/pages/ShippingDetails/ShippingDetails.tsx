import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Product } from "../../interfaces/Products";

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  address: z.string().min(3, { message: 'Address must be at least 3 characters' }),
  city: z.string().min(3, { message: 'City must be at least 3 characters' }),
  country: z.string().min(3, { message: 'Country must be at least 3 characters' }),
  buyerEmail: z.string().email({
    message: 'Invalid email. Please enter a valid email address',
  }),
});

type FormData = z.infer<typeof schema>;

type ShippingDetailsProps = {
  handleShipping: (data: FormData) => void;
  product: Product;
};

const ShippingDetails: React.FC<ShippingDetailsProps> = ({ handleShipping, product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    handleShipping(data);
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Shipping Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input {...register("name")} id="name" type="text" />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input {...register("address")} id="address" type="text" />
          {errors.address && <p className="error-message">{errors.address.message}</p>}
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input {...register("city")} id="city" type="text" />
          {errors.city && <p className="error-message">{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input {...register("country")} id="country" type="text" />
          {errors.country && <p className="error-message">{errors.country.message}</p>}
        </div>
        <div>
          <label htmlFor="buyerEmail">Email:</label>
          <input {...register("buyerEmail")} id="buyerEmail" type="email" />
          {errors.buyerEmail && <p className="error-message">{errors.buyerEmail.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShippingDetails;
