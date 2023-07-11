import { useGetAllUsers } from "../../../../services/apiUser";
import { User } from "../../../interfaces/User";
import { UserTableRow } from "./UserTableRow";

export const UsersTable = () => {
  const { data: money, error, isLoading } = useGetAllUsers();

  if (error) return <p>{error.message}</p>;
  if (isLoading)
    return (
      <p>
        is loading 
      </p>
    );

  const handleDelete = (userId: number) => {
    console.log(`Deleting user with ID ${userId}`);
    // Implement your deletion logic here
  };

  return (
    <>
      <table className="table table-striped">
        <thead className="table table-striped">
          {/* ... */}
        </thead>
        <tbody className="table table-striped">
          {money &&
            money.map((response: User, index: number) => {
              const {
                userId,
                userName,
                cellphoneNumber,
                email,
                twitterUsername,
                userType
              } = response;
              return (
                <UserTableRow
                  key={index}
                  userId={userId}
                  userName={userName}
                  cellphoneNumber={cellphoneNumber}
                  email={email}
                  twitterUsername={twitterUsername}
                  userType={userType}
                  onDelete={() => handleDelete(response.userId)} // Pass the userId to handleDelete
                />
              );
            })}
        </tbody>
      </table>
    </>
  );
};
