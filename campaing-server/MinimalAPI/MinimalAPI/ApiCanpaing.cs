using CampaingModel;
using DataAccess.Data;

namespace MinimalAPI
{
    public static class ApiCanpaing
    {
        public static void ConfigureApi(this WebApplication app)
        {
            // All of my API endpoint mapping
            app.MapGet("/Campaign", GetCampaings);
            app.MapGet("/Campaing/{id}", GetCampaing);
            app.MapGet("/myCampaign/{email}", GetMyCampaign);
            app.MapPost("/AddCampaign", InsertCampaing);
            app.MapPut("", UpdateCampaing);
            app.MapDelete("", DeleteCampaing);


            app.MapPost("/Donation", InsertDonation);
            app.MapGet("GetTwitter/{email}", GetTwitter);
            app.MapGet("Product", GetDonations);
            app.MapGet("ProductByUser/{email}", GetDonationsByUser);

            app.MapPost("/CampaignSupport", InsertTitter);
            app.MapGet("GetTwitter", GetTwitters);

            app.MapPost("/addUser", InsertUser);
            app.MapGet("{id}", GetTwitter);
            app.MapPost("/InsertTitter", InsertTitter);
            app.MapGet("", GetTwitters);


            app.MapGet("/User/{id}", GetUser);
            app.MapGet("/Users", GetUsers);
            app.MapPut("/UserUpdate/{id}", UpdateUser);
            app.MapDelete("DeleteUser/{id}", DeleteUser);




            /*
          
           
           
            app.MapDelete("", DeleteTwitter);
           
            */
        }

        private static async Task<IResult> GetCampaings(ICampaignData data)
        {
            try
            {
                return Results.Ok(await data.GetCampaigns());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetCampaing(int id, ICampaignData data)
        {
            try
            {
                var results = await data.GetCampaign(id);
                if (results == null) return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> InsertCampaing(Campaign campaign, ICampaignData data)
        {
            try
            {
                await data.InsertCampaign(campaign);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> UpdateCampaing(Campaign campaign, ICampaignData data)
        {
            try
            {
                await data.UpdateCampaign(campaign);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> DeleteCampaing(int id, ICampaignData data)
        {
            try
            {
                await data.DeleteCampaign(id);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetTwitters(ITwitterData data)
        {
            try
            {
                return Results.Ok(await data.GetTwitters());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetTwitter(string email, ITwitterData data)
        {
            try
            {
                var results = await data.GetTwitter(email);
                if (results == null )
                    return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }


        private static async Task<IResult> InsertTitter(Twitter twitter, ITwitterData data)
        {
            try
            {
                await data.InsertTwitter(twitter);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> UpdateTwitter(Twitter twitter, ITwitterData data)
        {
            try
            {
                await data.UpdateTwitter(twitter);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> DeleteTwitter(int id, ITwitterData data)
        {
            try
            {
                await data.DeleteTwitter(id);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
        


        private static async Task<IResult> InsertDonation(Donation donation, IDonationData data)
        {
            try
            {
                await data.InsertDonation(donation);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> InsertUser (User user, IUserData data)
        {
            try
            {
                await data.InsertUser(user);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
        
              private static async Task<IResult> GetDonations(IDonationData data)
        {
            try
            {
                return Results.Ok(await data.GetDonations());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }


        private static async Task<IResult> GetUser(int id, IUserData data)
        {
            try
            {
                var results = await data.GetUser(id);
                if (results == null) return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> UpdateUser(User user, IUserData data)
        {
            try
            {
                await data.UpdateUser(user);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }


        private static async Task<IResult> GetUsers(IUserData data)
        {
            try
            {
                return Results.Ok(await data.GetUsers());
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> GetDonationsByUser(string Email, IDonationData data)
        {
            try
            {
                var results = await data.GetDonationsByUser(Email);
                if (results == null) return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        private static async Task<IResult> DeleteUser(int id, IUserData data)
        {
            try
            {
                await data.DeleteUser(id);
                return Results.Ok();
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

       

        private static async Task<IResult> GetMyCampaign(string email, ICampaignData data)
        {
            try
            {
                var results = await data.GetMyCampaign(email);
                if (results == null)
                    return Results.NotFound();
                return Results.Ok(results);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

    }
}
    
