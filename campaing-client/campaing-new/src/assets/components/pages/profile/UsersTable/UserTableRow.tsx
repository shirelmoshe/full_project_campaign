import { useDeleteUser } from "../../../../services/apiUser";


export const UserTableRow = ({
  userId,
  userName,
  cellphoneNumber,
  email,
  twitterUsername,
  userType,

  onDelete
}: {
  userName: string;
  cellphoneNumber: string;
  email: string;
  twitterUsername: string;
  userType: string;
  userId: number;
  onDelete: () => void;
}) => {
  const deleteUser = useDeleteUser();
  console.log(userId)

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${userName}?`)) {
      await deleteUser(userId);
      onDelete();
    }
  };

  return (
    <>
      <tr>
        <td>{userName}</td>
        <td>{cellphoneNumber}</td>
        <td>{email}</td>
        <td>{twitterUsername}</td>
        <td>{userType}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
};

