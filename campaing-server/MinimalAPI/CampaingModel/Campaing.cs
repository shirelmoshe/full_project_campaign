using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CampaingModel
{
  public record class Campaign
    {
        public int campaingId { get; set; }
        public string associationName { get; set; }
        public string email { get; set; }
        
        public string uri { get; set; }
        public string hashtag { get; set; }
        public string CampaignName { get; set; }
        public string img { get; set; }


    }
}
