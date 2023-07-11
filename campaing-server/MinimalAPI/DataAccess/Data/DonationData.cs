using CampaingModel;
using DataAccess.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Data
{
    public class DonationData : IDonationData
    {
        private readonly ISqlDataAccess _db;

        public DonationData(ISqlDataAccess db)
        {
            _db = db;
        }

        public Task<IEnumerable<Donation>> GetDonations() =>
            _db.LoadData<Donation, dynamic>("dbo.spProduct_GetAll", new { });

        public async Task<Donation?> GetDonation(int id)
        {
            var results = await _db.LoadData<Donation, dynamic>(
                "",
                new { productsId = id });
            return results.FirstOrDefault();
        }

        public Task InsertDonation(Donation donation) =>
            _db.SaveData("spDonation_Insert", new { donation.CompanyName, donation.Product, donation.Email, donation.Price, donation.CampaignName ,donation.Quantity});

        public async Task<List<Donation>> GetDonationsByUser(string Email)
        {
            var results = await _db.LoadData<Donation, dynamic>("dbo.spDonation_GetMyDonation", new { Email = Email });
            return results.ToList();
        }

     
    }
}

