import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useUpdateUserDetails } from '../../../../services/apiUser';
import { useProfile } from '../../../../services/apiProfile';
import { User } from '../../../interfaces/User';

const UserDetailsPage = ({ userId }: { userId: number }) => {
  const queryClient = useQueryClient();
  const { updateUser } = useUpdateUserDetails();

  // Fetch user data using the useProfile hook
  const { data: user } = useProfile(userId);

  const [updatedUser, setUpdatedUser] = useState<User | undefined>(user); // Provide a default value of undefined

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser!,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (user && updatedUser) {
      const updatedUserData: User = {
        ...user,
        ...updatedUser,
      };

      await updateUser(userId, updatedUserData);
      queryClient.invalidateQueries('GetTwitter');
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Display a loading state while fetching user data
  }

  return (
    <div>
      <h1>Update User Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={updatedUser?.userName || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Cellphone Number:</label>
          <input
            type="text"
            name="cellphoneNumber"
            value={updatedUser?.cellphoneNumber || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={updatedUser?.email || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Twitter Username:</label>
          <input
            type="text"
            name="twitterUsername"
            value={updatedUser?.twitterUsername || ''}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserDetailsPage;
