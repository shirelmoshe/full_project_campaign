using CampaingModel;

namespace DataAccess.Data
{
    public interface ITwitterData
    {
        Task DeleteTwitter(int id);
    
        Task<List<Twitter>> GetTwitter(string email);
        Task<IEnumerable<Twitter>> GetTwitters();
        Task InsertTwitter(Twitter twitter);
        Task UpdateTwitter(Twitter twitter);
    }
}