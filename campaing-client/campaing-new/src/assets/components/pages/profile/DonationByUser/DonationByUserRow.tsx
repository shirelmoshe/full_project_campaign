export const DonationByUserRow= ({
    companyName, 
    product, 
    email, 
    price, 
    campaignName, 
    quantity
  }: {
   
  
    companyName:string, 
       product:string, 
       email:string, 
       price:number, 
       campaignName:string, 
       quantity:number
  }) => {
    return (
      <>
        <tr>
          <td>{companyName}</td>
          <td>{product}</td>
          <td>{email}</td>
          <td>{price}</td>
          <td>{campaignName}</td>
          <td>{quantity}</td>
       
        
        </tr>
      </>
    );
  };
  