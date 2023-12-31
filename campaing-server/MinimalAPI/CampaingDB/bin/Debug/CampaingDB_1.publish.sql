﻿/*
Deployment script for CampaingDB

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "CampaingDB"
:setvar DefaultFilePrefix "CampaingDB"
:setvar DefaultDataPath "C:\Users\SHIREL\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"
:setvar DefaultLogPath "C:\Users\SHIREL\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Creating Table [dbo].[Twitter]...';


GO
CREATE TABLE [dbo].[Twitter] (
    [teitterUserId]       INT        IDENTITY (1, 1) NOT NULL,
    [associationName]     NCHAR (50) NULL,
    [hashtag]             NCHAR (50) NULL,
    [email]               NCHAR (50) NULL,
    [userName]            NCHAR (50) NULL,
    [twitterUsername]     NCHAR (50) NULL,
    [CampaignName]        NCHAR (50) NULL,
    [userMoney]           FLOAT (53) NULL,
    [lastCheckedDateTime] DATETIME   NULL,
    PRIMARY KEY CLUSTERED ([teitterUserId] ASC)
);


GO
PRINT N'Creating Procedure [dbo].[spTwitter_Get]...';


GO
CREATE PROCEDURE [dbo].[spTwitter_Get]

AS
begin
	select * from dbo.[Twitter]
end
GO
PRINT N'Creating Procedure [dbo].[spTwitter_Insert]...';


GO
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
GO
if not exists (select 1 from dbo.[Campaing])
begin 
  insert into dbo.[Campaing] (associationName,email,uri,hashtag,campaignName,img) 
values('shirel','shirel','uri','hashtag','campaignName','img')
end
GO

GO
PRINT N'Update complete.';


GO
