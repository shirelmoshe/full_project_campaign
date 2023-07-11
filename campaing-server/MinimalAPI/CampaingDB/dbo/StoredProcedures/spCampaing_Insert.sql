CREATE PROCEDURE [dbo].[spCampaing_Insert]
	
    @associationName NCHAR(50), 
    @email NCHAR(50), 
    @uri NCHAR(100), 
    @hashtag NCHAR(50), 
    @campaignName NCHAR(50), 
    @img NVARCHAR(MAX)
AS
begin 
insert into dbo.[Campaing] (associationName,email,uri,hashtag,campaignName,img) 
values(@associationName,@email,@uri,@hashtag,@campaignName,@img)
end
