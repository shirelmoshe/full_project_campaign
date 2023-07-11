CREATE TABLE [dbo].[Campaing]
(
	[campaingId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [associationName] NCHAR(50) NOT NULL, 
    [email] NCHAR(50) NOT NULL, 
    [uri] NCHAR(100) NOT NULL, 
    [hashtag] NCHAR(50) NOT NULL, 
    [campaignName] NCHAR(50) NOT NULL, 
    [img] NCHAR(100) NOT NULL

)
