CREATE PROCEDURE [dbo].[spUser_Update]
    @userId INT,
    @userName NCHAR(50),
    @cellphoneNumber NCHAR(50),
    @email NCHAR(50),
    @twitterUsername NCHAR(50),
    @UserType NCHAR(50)
AS
BEGIN 
    UPDATE dbo.[User]
    SET userName = @userName,
        cellphoneNumber = @cellphoneNumber,
        email = @email,
        twitterUsername = @twitterUsername
     
    WHERE userId = @userId
END
