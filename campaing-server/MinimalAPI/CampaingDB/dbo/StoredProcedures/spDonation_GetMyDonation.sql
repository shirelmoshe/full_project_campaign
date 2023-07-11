CREATE PROCEDURE [dbo].[spDonation_GetMyDonation]
	@Email NCHAR(50) 

AS
	select * from dbo.[Donation] where Email=@Email
RETURN 0
