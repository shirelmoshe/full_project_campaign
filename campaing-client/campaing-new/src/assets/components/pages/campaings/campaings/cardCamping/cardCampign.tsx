import React from 'react';
import './cardCampaign.css';
import { Campaign } from '../../../../interfaces/Campaing';

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const { campaingId, associationName, email, uri, hashtag, campaignName, img } = campaign;

  return (
    <div className="box">
      <div className="box-top">
        <img className="box-image" src={img} alt={associationName} />
        <div className="title-flex">
          <h3 className="box-title">{associationName}</h3>
          <p className="user-follow-info">{email} </p>
        </div>
        <p className="description">{hashtag}</p>
        <p className="description">{campaignName}</p>
        <p className="description"><a>{uri}</a></p>

      </div>
     
    </div>
  );
};
