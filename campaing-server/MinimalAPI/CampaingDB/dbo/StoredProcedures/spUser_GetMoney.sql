CREATE PROCEDURE [dbo].[spUser_GetMoney]
	@email NCHAR(50) 
	
AS
	select * from dbo.[Twitter] where email=@email
RETURN 0
