import React from 'react';
import './campaings.css';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { CampaignCard } from './cardCamping/cardCampign';
import { Campaign } from '../../../interfaces/Campaing';
import { Col, Row } from 'react-bootstrap';
import { useCampaign } from '../../../../services/apiCampaign';

function Campaings() {
  const { data: campaigns, error, isLoading } = useCampaign();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>is loading <PacmanLoader color="#36d7b7" /></p>;

  return (
    <div className="campaign-container">
      <Row>
        {campaigns && campaigns.map((campaign: Campaign, campaignId: number) => (
          <Col key={campaignId} md={2} xs={6} lg={3} className="g-3">
            <CampaignCard campaign={campaign} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Campaings;
