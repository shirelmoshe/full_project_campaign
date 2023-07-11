using CampaingModel;

namespace DataAccess.Data
{
    public interface ICampaignData
    {
        Task DeleteCampaign(int id);
        Task<Campaign> GetCampaign(int id);
        Task<List<Campaign>> GetMyCampaign(string email);
        Task<IEnumerable<Campaign>> GetCampaigns();
        Task InsertCampaign(Campaign campaign);
        Task UpdateCampaign(Campaign campaign);
    }
}