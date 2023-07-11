CREATE TABLE [dbo].[Donation]
(
    [productsId] INT NOT NULL PRIMARY KEY IDENTITY, 
    [CompanyName] NCHAR(50) NULL, 
    [Product] NCHAR(50) NULL, 
    [Email] NCHAR(50) NULL, 
    [Price] NCHAR(50) NULL, 
    [CampaignName] NCHAR(50) NULL, 
    [Quantity] INT NULL
)
