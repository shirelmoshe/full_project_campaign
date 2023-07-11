CREATE PROCEDURE [dbo].[spDonation_Insert]
    @CompanyName NCHAR(50), 
    @Product NCHAR(50), 
    @Email NCHAR(50), 
    @Price NCHAR(50), 
    @CampaignName NCHAR(50), 
    @Quantity INT
AS
begin 
insert into dbo.[Donation] (CompanyName,Product,Email,Price,CampaignName,Quantity) 
values(@CompanyName,@Product,@Email,@Price,@CampaignName,@Quantity)
end

