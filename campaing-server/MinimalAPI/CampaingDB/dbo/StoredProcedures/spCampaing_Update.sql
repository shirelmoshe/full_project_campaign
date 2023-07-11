CREATE PROCEDURE [dbo].[spCampaing_Update]
    @campaingId int,
	@associationName NCHAR(50), 
    @email NCHAR(50), 
    @uri NCHAR(100), 
    @hashtag NCHAR(50), 
    @campaignName NCHAR(50), 
    @img NCHAR(100)
AS
begin 
 update dbo.[Campaing]
 set associationName=@associationName,email=@email,uri=@uri,hashtag=@hashtag,campaignName=@campaignName,img=@img
 where campaingId=@campaingId
end
