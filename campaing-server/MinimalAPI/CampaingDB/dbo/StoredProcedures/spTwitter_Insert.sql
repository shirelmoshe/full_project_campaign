CREATE PROCEDURE [dbo].[spTwitter_Insert]
	
   	
    @associationName NCHAR(50), 
    @hashtag NCHAR(50), 
    @email NCHAR(50), 
    @userName NCHAR(50), 
    @twitterUsername NCHAR(50), 
    @CampaignName NCHAR(50)

AS
begin 
insert into dbo.[Twitter] (associationName,hashtag,email,userName,twitterUsername,CampaignName) 
values(@associationName,@hashtag,@email,@userName,@twitterUsername,@CampaignName)
end
