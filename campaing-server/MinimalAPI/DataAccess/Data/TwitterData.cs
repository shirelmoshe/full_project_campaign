using CampaingModel;
using DataAccess.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public class TwitterData : ITwitterData
    {
        private readonly ISqlDataAccess _db;

        public TwitterData(ISqlDataAccess db)
        {
            _db = db;
        }

        public Task<IEnumerable<Twitter>> GetTwitters() =>
            _db.LoadData<Twitter, dynamic>("spTwitter_Get", new { });

    
        public async Task<List<Twitter>> GetTwitter(string email)
        {
            var results = await _db.LoadData<Twitter, dynamic>("spUser_GetMoney", new { email = email });
            return results.ToList();
        }

        public Task InsertTwitter(Twitter twitter) =>
            _db.SaveData("dbo.spTwitter_Insert", new { twitter.associationName, twitter.hashtag, twitter.email, twitter.userName, twitter.twitterUsername, twitter.CampaignName });

        public Task UpdateTwitter(Twitter twitter) =>
            _db.SaveData("", twitter);

        public Task DeleteTwitter(int id) =>
            _db.SaveData("", new { teitterUserId = id });
    }
}

