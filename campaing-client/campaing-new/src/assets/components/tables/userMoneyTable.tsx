
import { useMoney } from "../../services/apiUser";
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Twitter } from "../interfaces/Twitter";
import { UserMoneyT } from "./userMoney"; // Import UserMoneyT component

export const UserMoneyTable = () => {
  const { data: money, error, isLoading } = useMoney('cat');

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>is loading <PacmanLoader color="#36d7b7" /></p>;
  return (
    <>
      <table className="table table-striped">
        <thead className="table table-striped">
          <tr>
            <th scope="col">associationName</th>
            <th scope="col">hashtag</th>
            <th scope="col">userName</th>
            <th scope="col">twitterUsername</th>
            <th scope="col">campaignName</th>
            <th scope="col">userMoney</th>
            <th scope="col">lastCheckedDateTime</th>
          </tr>
        </thead>
        <tbody className="table table-striped">
          {money &&
            money.map((response: Twitter, index: number) => {
              const {
                associationName,
                hashtag,
                userName,
                twitterUsername,
                campaignName,
                userMoney,
                lastCheckedDateTime
              } = response;
              return (
                <UserMoneyT
                  key={index}
                  associationName={associationName}
                  hashtag={hashtag}
                  userName={userName}
                  twitterUsername={twitterUsername}
                  campaignName={campaignName}
                  userMoney={userMoney}
                  lastCheckedDateTime={lastCheckedDateTime}
                ></UserMoneyT>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
