export const UserMoneyT = ({
    associationName,
    hashtag,
    userName,
    twitterUsername,
    campaignName,
    userMoney,
    lastCheckedDateTime
  }: {
    associationName: string;
    hashtag: string;
    userName: string;
    twitterUsername: string;
    campaignName: string;
    userMoney: number;
    lastCheckedDateTime: string;
  }) => {
    return (
      <>
        <tr>
          <td>{associationName}</td>
          <td>{hashtag}</td>
          <td>{userName}</td>
          <td>{twitterUsername}</td>
          <td>{campaignName}</td>
          <td>{userMoney}</td>
          <td>{lastCheckedDateTime}</td>
        </tr>
      </>
    );
  };
  