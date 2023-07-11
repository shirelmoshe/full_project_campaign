

import PacmanLoader from 'react-spinners/PacmanLoader';
import {DonationByUserRow} from "./DonationByUserRow"
import { DonationByUserApi } from "../../../../services/apiUser";
import { Product } from '../../../interfaces/Products';


export const DonationByUser = () => {
  const { data: money, error, isLoading } = DonationByUserApi('ElectricCompany@gamil.com');

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>is loading <PacmanLoader color="#36d7b7" /></p>;
  return (
    <>
      <table className="table table-striped">
        <thead className="table table-striped">
          <tr>
            <th scope="col">companyName</th>
            <th scope="col">product</th>
            <th scope="col">email</th>
            <th scope="col">price</th>
            <th scope="col">campaignName</th>
            <th scope="col">quantity</th>
          </tr>
        </thead>
        <tbody className="table table-striped">
          {money &&
            money.map((response: Product, index: number) => {
              const {  
        companyName, 
        product, 
        email, 
        price, 
        campaignName, 
        quantity
              } = response;
              return (
                <DonationByUserRow
                  key={index}
                  companyName={companyName}
                  product={product}
                  email={email}
                  price={price}
                  campaignName={campaignName}
                  quantity={quantity}
             
                ></DonationByUserRow>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
