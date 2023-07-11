using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CampaingModel
{
    public record class User
    {
        public int userId { get; set; }
        public string userName { get; set; }
        public string cellphoneNumber { get; set; }
        public string email { get; set; }
        public string twitterUsername { get; set; }

        public string UserType { get; set; }
       
    }
}
