CREATE TABLE [dbo].[Twitter]
(
	[teitterUserId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [associationName] NCHAR(50) NULL, 
    [hashtag] NCHAR(50) NULL, 
    [email] NCHAR(50) NULL, 
    [userName] NCHAR(50) NULL, 
    [twitterUsername] NCHAR(50) NULL, 
    [CampaignName] NCHAR(50) NULL, 
    [userMoney] FLOAT NULL, 
    [lastCheckedDateTime] DATETIME NULL, 

)
