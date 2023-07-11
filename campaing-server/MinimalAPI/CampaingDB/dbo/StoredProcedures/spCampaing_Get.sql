CREATE PROCEDURE [dbo].[spCampaing_Get]
@campaingId int 

AS
begin 
select * from dbo.[Campaing] where campaingId=@campaingId
end
