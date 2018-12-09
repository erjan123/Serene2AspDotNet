using Serenity.Services;

namespace Serene2AspDotNet.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}