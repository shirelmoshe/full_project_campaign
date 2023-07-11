CREATE PROCEDURE [dbo].[spUser_Insert]
@userName NCHAR (50), @cellphoneNumber NCHAR (50), @email NCHAR (50), @twitterUsername NCHAR (50), @UserType NCHAR (50)
AS
BEGIN
    INSERT INTO dbo.[User] (userName, cellphoneNumber, email, twitterUsername, UserType)
    VALUES (@userName, @cellphoneNumber, @email, @twitterUsername, @UserType);
END
