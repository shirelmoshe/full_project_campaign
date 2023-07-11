CREATE PROCEDURE [dbo].[spUser_Get]
@userId int 
AS
begin
	select * from dbo.[User]  where userId = @userId
end