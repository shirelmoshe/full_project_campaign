export const MyCampaignsRow = ({
    campaignId,
    associationName,
    hashtag,
    email,
    uri,
    campaignName,
    onDelete
  }: {
    campaignId: number;
    associationName: string;
    hashtag: string;
    email: string;
    uri: string;
    campaignName: string;
    onDelete: () => void;
  }) => {
    return (
      <>
        <tr>
          <td>{associationName}</td>
          <td>{hashtag}</td>
          <td>{email}</td>
          <td>{uri}</td>
          <td>{campaignName}</td>
          <td>
            <button onClick={onDelete}>Delete</button>
          </td>
        </tr>
      </>
    );
  };