if not exists (select 1 from dbo.[Campaing])
begin 
  insert into dbo.[Campaing] (associationName,email,uri,hashtag,campaignName,img) 
values('shirel','shirel','uri','hashtag','campaignName','img')
end