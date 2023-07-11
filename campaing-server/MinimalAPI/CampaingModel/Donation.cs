using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CampaingModel
{
    public record class Donation
    {
        public int productsId { get; set; }
        public string CompanyName { get; set; }

        public string Product { get; set; }

        public string Email { get; set; }

        public int Price { get; set; }

        public string CampaignName { get; set; }

  
        public int Quantity { get; set; }


    }
}
