const touristDestinations = {
    "destinations": {
        "TropicalBeachResorts": [
            {
                "name": "Mirissa",
                "description": "Known for its beautiful sandy beach and calm waters, ideal for swimming and whale watching.",
                "imageUrl": "https://somethingoffreedom.com/wp-content/uploads/2018/01/Palm-tree-grove-Mirissa.jpg",
                "mapsUrl": "https://maps.app.goo.gl/aDbWaRzcfnDtzeu98"
            },
            {
                "name": "Unawatuna",
                "description": "Famous for its picturesque beach and coral reefs, perfect for snorkeling and diving.",
                "imageUrl": "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1545185358676-7L0N8XO0PI9WK30OWTG6/The_Common_Wanderer_Sri_Lanka_Unwatuna_things_to_do-11.jpg",
                "mapsUrl": "https://maps.app.goo.gl/biMtpAYa1a3N2cpLA"
            },
            {
                "name": "Bentota",
                "description": "Offers a range of water sports and a serene beach for relaxation.",
                "imageUrl": "https://www.suryalanka.com/wp-content/uploads/2020/07/bentota-beach.jpg",
                "mapsUrl": "https://maps.app.goo.gl/uYKZZgHuSERUQbBW9"
            },
            {
                "name": "Trincomalee",
                "description": "Known for its pristine beaches and excellent diving spots, especially around Pigeon Island.",
                "imageUrl": "https://www.thewildlifediaries.com/wp-content/uploads/2023/08/Lovers-leap-trincomalee-1024x768.jpg",
                "mapsUrl": "https://maps.app.goo.gl/yUzf7QC22d71sHZ86"
            }
        ],
        "MountainRetreats": [
            {
                "name": "Ella",
                "description": "Surrounded by lush greenery and tea plantations, offering stunning views and hiking opportunities.",
                "imageUrl": "https://us.lakpura.com/cdn/shop/files/demodara-nine-arch-bridge-ella-sri-lanka-scaled-1_77c0b1eb-4170-472a-b6df-950903726734.jpg?v=1654085052&width=3840",
                "mapsUrl": "https://maps.app.goo.gl/2PMYTzjwMLvVBUVs7"
            },
            {
                "name": "Nuwara Eliya",
                "description": "Known for its cool climate, beautiful gardens, and colonial architecture, often referred to as 'Little England.'",
                "imageUrl": "https://mahaweli.lk/wp-content/uploads/2022/05/Nuwara-Eliya-City-Tour.jpg",
                "mapsUrl": "https://maps.app.goo.gl/aY31a6J3KxdXf9Hx6"
            },
            {
                "name": "Haputale",
                "description": "Offers panoramic views of the surrounding hills and tea estates, with plenty of hiking trails.",
                "imageUrl": "https://nexttravelsrilanka.com/wp-content/uploads/2021/05/A-man-at-the-top-of-Knuckles-Mountain-Range-the-Fascinating-Wonder-of-Nature-in-Sri-Lanka..jpg",
                "mapsUrl": "https://maps.app.goo.gl/esv75en69V3GiUdn7"
            },
            {
                "name": "Knuckles Mountain Range",
                "description": "A UNESCO World Heritage Site with diverse flora and fauna, ideal for trekking and camping.",
                "imageUrl": "https://nexttravelsrilanka.com/wp-content/uploads/2021/05/A-man-at-the-top-of-Knuckles-Mountain-Range-the-Fascinating-Wonder-of-Nature-in-Sri-Lanka..jpg",
                "mapsUrl": "https://maps.app.goo.gl/mScQnk2csWj4o4DQA"
            }
        ],
        "UrbanWellnessCenters": [
            {
                "name": "Colombo",
                "description": "The capital city, offering a blend of modern amenities and wellness centers such as spas and yoga studios.",
                "imageUrl": "https://www.tripsavvy.com/thmb/KFeUYO8NYN2xJagLdvcMx8Unipk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colombo-sri-lanka-12fb929f68f145379077137d65531e81.jpg",
                "mapsUrl": "https://maps.app.goo.gl/DP3VJjeECsunAEDj8"
            },
            {
                "name": "Kandy",
                "description": "A cultural hub with wellness centers offering traditional Ayurvedic treatments and therapies.",
                "imageUrl": "https://www.kandyescapes.com/wp-content/uploads/2020/04/street-tour-mob.jpg",
                "mapsUrl": "https://maps.app.goo.gl/96PsAh93LCggjZM59"
            },
            {
                "name": "Galle",
                "description": "Known for its historic fort and cobblestone streets, with wellness centers offering relaxation and rejuvenation.",
                "imageUrl": "https://afar.brightspotcdn.com/dims4/default/cabd852/2147483647/strip/true/crop/1600x800+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F65%2F34%2Facbaa757c112666ad291d14c8427%2Foriginal-257f690912cb23806c7ade7b9b406cd9.jpg",
                "mapsUrl": "https://maps.app.goo.gl/4UZSg4UJTLb49Ppu9"
            },
            {
                "name": "Negombo",
                "description": "Offers a mix of wellness centers and beach resorts, perfect for a relaxing getaway near the airport.",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKlSzta8_EoxDPMbxVaXekS7_q9lj1onaouZAnM8AKA&s",
                "mapsUrl": "https://maps.app.goo.gl/z3yUqw9rSbcj3bLx5"
            }
        ],
        "RuralOrCountrysideRetreats": [
            {
                "name": "Sigiriya",
                "description": "Home to the ancient rock fortress, offering a glimpse into Sri Lanka's rich history and surrounded by rural landscapes.",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Beauty_of_Sigiriya_by_Binuka.jpg",
                "mapsUrl": "https://maps.app.goo.gl/vnk4uuFWS1WYjm6UA"
            },
            {
                "name": "Dambulla",
                "description": "Known for its cave temples and rural countryside, providing a peaceful retreat away from the city.",
                "imageUrl": "https://www.p4panorama.com/wp-content/uploads/2022/02/dambulla-cave-temple_srilanka.jpg",
                "mapsUrl": "https://maps.app.goo.gl/CVVPJncgz1d6PuRq8"
            },
            {
                "name": "Ella",
                "description": "Besides being a mountain retreat, Ella offers a peaceful countryside setting with tea plantations and waterfalls.",
                "imageUrl": "https://us.lakpura.com/cdn/shop/files/demodara-nine-arch-bridge-ella-sri-lanka-scaled-1_77c0b1eb-4170-472a-b6df-950903726734.jpg?v=1654085052&width=3840",
                "mapsUrl": "https://maps.app.goo.gl/2PMYTzjwMLvVBUVs7"
            },
            {
                "name": "Tissamaharama",
                "description": "Located near Yala National Park, offering a tranquil setting with wildlife and nature experiences.",
                "imageUrl": "https://www.reddottours.com/uploads/Activities/Tissamaharama/Tissamaharama-header.jpg",
                "mapsUrl": "https://maps.app.goo.gl/RsQd69FAkaRCgEoNAs"
            }
        ]
    }
}

module.exports = touristDestinations
