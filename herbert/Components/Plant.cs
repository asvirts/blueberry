using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace herbert.Components
{
    public class PlantData
    {
        [JsonPropertyName("data")]
        public List<Plant> Data { get; set; }
    }

    public class Plant
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("common_name")]
        public string? CommonName { get; set; }

        [JsonPropertyName("scientific_name")]
        public List<string>? scientific_name { get; set; }

        [JsonPropertyName("other_name")]
        public List<string>? OtherName { get; set; }

        [JsonPropertyName("cycle")]
        public string? Cycle { get; set; }

        [JsonPropertyName("watering")]
        public string? Watering { get; set; }

        [JsonPropertyName("sunlight")]
        public List<string>? Sunlight { get; set; }

        [JsonPropertyName("default_image")]
        public DefaultImage? DefaultImage { get; set; }
    }

    public class DefaultImage
    {
        public int license { get; set; }
        public string license_name { get; set; }
        public string license_url { get; set; }
        public string original_url { get; set; }
        public string regular_url { get; set; }
        public string medium_url { get; set; }
        public string small_url { get; set; }
        public string thumbnail { get; set; }
    }

    public class Root
    {
        public List<Plant> data { get; set; }
        public int to { get; set; }
        public int per_page { get; set; }
        public int current_page { get; set; }
        public int from { get; set; }
        public int last_page { get; set; }
        public int total { get; set; }
    }


}
