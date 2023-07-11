using CampaingModel;
using DataAccess.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public class CampaignData : ICampaignData
    {
        private readonly ISqlDataAccess _db;

        public CampaignData(ISqlDataAccess db)
        {
            _db = db;
        }

        public async Task<IEnumerable<Campaign>> GetCampaigns()
        {
            var results = await _db.LoadData<Campaign, dynamic>("dbo.spCampaing_GetAll", new { });
            return results;
        }

        public async Task<List<Campaign>> GetMyCampaign(string email)
        {
            var results = await _db.LoadData<Campaign, dynamic>("dbo.spCampaing _GetMyCampaing", new { email });
            return results.ToList();
        }

        public async Task<Campaign> GetCampaign(int id)
        {
            var results = await _db.LoadData<Campaign, dynamic>("dbo.spCampaing_Get", new { CampaingId = id });
            return results.FirstOrDefault();
        }

        public Task InsertCampaign(Campaign campaign)
        {
            return _db.SaveData("dbo.spCampaing_Insert", new
            {
                campaign.associationName,
                campaign.email,
                campaign.uri,
                campaign.hashtag,
                campaign.CampaignName,
                campaign.img
            });
        }

        public Task UpdateCampaign(Campaign campaign)
        {
            return _db.SaveData("dbo.spCampaing_Update", campaign);
        }

        public Task DeleteCampaign(int id)
        {
            return _db.SaveData("dbo.spCampaing_Delete", new { CampaingId = id });
        }
    }
}

