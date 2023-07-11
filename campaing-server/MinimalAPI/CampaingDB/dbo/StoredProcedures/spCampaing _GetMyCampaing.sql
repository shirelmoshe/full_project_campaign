CREATE PROCEDURE [dbo].[spCampaing _GetMyCampaing]
	 @email NCHAR(50)

AS
begin
SELECT * from dbo.[Campaing] where  email=@email
end