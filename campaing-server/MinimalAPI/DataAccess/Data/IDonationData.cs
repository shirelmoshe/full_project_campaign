using CampaingModel;

namespace DataAccess.Data
{
    public interface IDonationData
    {
        Task<Donation?> GetDonation(int id);
        Task<IEnumerable<Donation>> GetDonations();
        Task InsertDonation(Donation donation);

      
        Task<List<Donation>> GetDonationsByUser(string Email);
    }
}