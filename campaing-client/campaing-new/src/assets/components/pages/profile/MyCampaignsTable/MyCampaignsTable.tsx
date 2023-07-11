import { useGetMyCampaigns } from "../../../../services/apiCampaign";
import { Campaign } from "../../../interfaces/Campaing";

import { MyCampaignsRow } from "./MyCampaignsTableRow";

export const MyCampaigns = () => {
  const { data: campaigns, error, isLoading } = useGetMyCampaigns('Animals@gmail.com');

  const handleDelete = (campaignId: number) => {
    console.log(`Deleting campaign with ID ${campaignId}`);
    // Implement your deletion logic here
  };

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Association Name</th>
            <th scope="col">Hashtag</th>
            <th scope="col">Email</th>
            <th scope="col">URI</th>
            <th scope="col">Campaign Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign: Campaign, index: number) => (
            <MyCampaignsRow
              key={index}
              campaignId={campaign.campaingId}
              associationName={campaign.associationName}
              hashtag={campaign.hashtag}
              email={campaign.email}
              uri={campaign.uri}
              campaignName={campaign.campaignName}
              onDelete={() => handleDelete(campaign.campaingId)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};