CREATE TABLE [dbo].[User]
(
	[userId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [userName] NCHAR(50) NULL, 
    [cellphoneNumber] NCHAR(10) NULL, 
    [email] NCHAR(50) NULL, 
    [twitterUsername] NCHAR(50) NULL, 
    [UserType] NCHAR(20) NULL,
)
