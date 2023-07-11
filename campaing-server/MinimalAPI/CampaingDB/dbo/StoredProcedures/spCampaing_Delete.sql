CREATE PROCEDURE [dbo].[spCampaing_Delete]
	@campaingId int
AS
begin
delete 
from dbo.[Campaing]
where campaingId=@campaingId
end
