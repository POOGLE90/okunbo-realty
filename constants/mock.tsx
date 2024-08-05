const Tabs = [
  {
    id: 1,
    name: "Houses",
  },
  {
    id: 2,
    name: "Townhouses",
  },
  {
    id: 3,
    name: "Condos",
  },
  {
    id: 5,
    name: "Villas",
  },
  {
    id: 6,
    name: "Commercial",
  },
];

const Listings = [
  {
    id: 1,
    category: "Houses",
    items: [
      {
        id: 1,
        title: "123 Serenity Lane",
        category: "Houses",
        description:
          "A spacious and modern home with an open floor plan, large windows, and a beautifully landscaped garden, perfect for those seeking peace and tranquility.",
        price: "$850,000",
        images: [
          "/images/properties/houses/123-serenity-lane.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "123 Serenity Lane, Los Angeles, CA",
        agent: {
          name: "David Lee",
          image: "/images/team/david-lee.webp",
          email: "davidlee@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "2,500",
          },
        ],
      },
      {
        id: 2,
        title: "456 Harmony Drive",
        category: "Houses",
        description:
          "A beautiful and spacious home with a large garden, swimming pool, and stunning views of the city, perfect for those who love to entertain.",
        price: "$550,000",
        images: [
          "/images/properties/houses/456-harmony-drive.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "456 Harmony Drive, Los Angeles, CA",
        agent: {
          name: "Emily Davis",
          image: "/images/team/emily-davis.webp",
          email: "emilydavis@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 4,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 3,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "4,500",
          },
        ],
      },
      {
        id: 3,
        title: "789 Bliss Boulevard",
        category: "Houses",
        description:
          "A stunning and luxurious home with a large garden, swimming pool, and breathtaking views of the ocean, perfect for those who love the finer things in life.",
        price: "$650,000",
        images: [
          "/images/properties/houses/989-bliss-boulevard.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "989 Bliss Boulevard, Los Angeles, CA",
        agent: {
          name: "Michael Brown",
          image: "/images/team/michael-brown.webp",
          email: "michael@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2.5,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "3,200",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Townhouses",

    items: [
      {
        id: 4,
        title: "123 Modern Townhouse",
        category: "Townhouses",
        description:
          "A stylish townhouse with contemporary design, featuring a rooftop terrace, open living spaces, and modern amenities.",
        price: "$450,000",
        images: [
          "/images/properties/townhouses/123-modern-townhouse.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "123 Modern Townhouse, San Francisco, CA",
        agent: {
          name: "Ryan Cooper",
          image: "/images/team/ryan-cooper.webp",
          email: "ryancooper@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 2,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "1,800",
          },
        ],
      },
      {
        id: 5,
        title: "456 Urban Townhome",
        category: "Townhouses",
        description:
          "An urban townhome located in the heart of the city, offering convenient access to shopping, dining, and entertainment.",
        price: "$375,000",
        images: [
          "/images/properties/townhouses/456-urban-townhouse.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "456 Urban Townhome, New York, NY",
        agent: {
          name: "Olivia Hernandez",
          image: "/images/team/olivia-hernandez.webp",
          email: "olivia@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2.5,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "2,000",
          },
        ],
      },
      {
        id: 6,
        title: "789 Suburban Townhouse",
        category: "Townhouses",
        description:
          "A charming townhouse located in a quiet suburb, featuring a spacious layout, modern kitchen, and private backyard.",
        price: "$420,000",
        images: [
          "/images/properties/townhouses/789-suburban-townhouse.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "789 Suburban Townhouse, Chicago, IL",
        agent: {
          name: "Ethan Brooks",
          image: "/images/team/ethan-brooks.webp",
          email: "ethan@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 3,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "2,200",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Condos",
    items: [
      {
        id: 7,
        title: "456 City Apartment",
        category: "Condos",
        description:
          "A modern apartment in the city center with high ceilings, large windows, and a private balcony, ideal for urban living.",
        price: "$750,000",
        images: [
          "/images/properties/apartments/456-city-apartment.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "456 City Apartment, San Francisco, CA",
        agent: {
          name: "Ryan Cooper",
          image: "/images/team/ryan-cooper.webp",
          email: "ryancooper@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 2,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 2,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "1,500",
          },
        ],
      },
      {
        id: 8,
        title: "789 Downtown Loft",
        category: "Condos",
        description:
          "A chic loft in the heart of downtown, featuring an open floor plan, exposed brick, and modern finishes, perfect for trendy city living.",
        price: "$670,000",
        images: [
          "/images/properties/apartments/789-downtown-loft.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "789 Downtown Loft, New York, NY",
        agent: {
          name: "Michael Brown",
          image: "/images/team/michael-brown.webp",
          email: "michael@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 1,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 1,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "1,200",
          },
        ],
      },
      {
        id: 9,
        title: "321 Suburban Apartment",
        category: "Condos",
        description:
          "A cozy apartment in a quiet suburb, featuring a modern kitchen, spacious living area, and a private balcony.",
        price: "$500,000",
        images: [
          "/images/properties/apartments/321-suburban-apartment.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "321 Suburban Apartment, Chicago, IL",
        agent: {
          name: "David Lee",
          image: "/images/team/david-lee.webp",
          email: "davidlee@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 2,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 1.5,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "1,300",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Commercial",
    items: [
      {
        id: 10,
        title: "Downtown Office",
        category: "Commercial",
        description:
          "A prime office space located in the heart of downtown, featuring modern amenities, high-speed internet, and stunning city views.",
        price: "$2,500/month",
        images: [
          "/images/properties/commercial/downtown-office.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "123 Main Street, Los Angeles, CA",
        agent: {
          name: "Emily Davis",
          image: "/images/team/emily-davis.webp",
          email: "emilydavis@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "ruler",
            name: "sqft",
            value: "5,000",
          },
          {
            id: 2,
            icon: "floor",
            name: "Floors",
            value: 2,
          },
          {
            id: 3,
            icon: "parking",
            name: "Parking",
            value: "Yes",
          },
        ],
      },
      {
        id: 11,
        title: "Industrial Warehouse",
        category: "Commercial",
        description:
          "A spacious industrial warehouse with high ceilings, loading docks, and easy access to major highways, perfect for storage and distribution.",
        price: "$8,000/month",
        images: [
          "/images/properties/commercial/industrial-warehouse.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "456 Industrial Road, San Francisco, CA",
        agent: {
          name: "Ryan Cooper",
          image: "/images/team/ryan-cooper.webp",
          email: "ryancooper@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "ruler",
            name: "sqft",
            value: "20,000",
          },
          {
            id: 2,
            icon: "dock-door",
            name: "Dock Doors",
            value: 4,
          },
          {
            id: 3,
            icon: "parking",
            name: "Parking",
            value: "Yes",
          },
        ],
      },
      {
        id: 12,
        title: "Retail Space",
        category: "Commercial",
        description:
          "A retail space located in a busy shopping center, offering high foot traffic, ample parking, and a vibrant commercial environment.",
        price: "$4,500/month",
        images: [
          "/images/properties/commercial/retail-space.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "789 Shopping Center Blvd, New York, NY",
        agent: {
          name: "Olivia Hernandez",
          image: "/images/team/olivia-hernandez.webp",
          email: "olivia@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "ruler",
            name: "sqft",
            value: "3,000",
          },
          {
            id: 2,
            icon: "walk",
            name: "Foot Traffic",
            value: "High",
          },
          {
            id: 3,
            icon: "parking",
            name: "Parking",
            value: "Yes",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    category: "Villas",
    items: [
      {
        id: 13,
        title: "Ocean View Villa",
        category: "Villas",
        description:
          "A luxurious villa with stunning ocean views, private pool, and spacious outdoor areas.",
        price: "$1,200,000",
        images: [
          "/images/properties/villas/ocean-view-villa.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "123 Ocean Drive, Miami, FL",
        agent: {
          name: "Ethan Brooks",
          image: "/images/team/ethan-brooks.webp",
          email: "ethanbrooks@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 5,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 4,
          },
          {
            id: 3,
            icon: "parking",
            name: "sqft",
            value: "4,500",
          },
        ],
      },
      {
        id: 14,
        title: "Mountain Retreat",
        category: "Villas",
        description:
          "A serene villa nestled in the mountains, featuring modern amenities and breathtaking views.",
        price: "$950,000",
        images: [
          "/images/properties/villas/mountain-retreat.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "456 Alpine Road, Aspen, CO",
        agent: {
          name: "Olivia Hernandez",
          image: "/images/team/olivia-hernandez.webp",
          email: "olivia@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 4,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 3,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "3,800",
          },
        ],
      },
      {
        id: 15,
        title: "Luxury Estate",
        category: "Villas",
        description:
          "An expansive estate with elegant interiors, a large garden, and state-of-the-art facilities.",
        price: "$2,500,000",
        images: [
          "/images/properties/villas/luxury-estate-villa.webp",
          "/images/properties/houses/123-serenity-lane-kitchen.webp",
          "/images/properties/houses/123-serenity-lane-bathroom.webp",
          "/images/properties/houses/123-serenity-lane-living-room.webp",
          "/images/properties/houses/123-serenity-lane-bedroom.webp",
          "/images/properties/houses/123-serenity-lane-backview.webp",
          "/images/properties/houses/123-serenity-lane-playground.webp",
        ],
        address: "789 Estate Drive, Beverly Hills, CA",
        agent: {
          name: "David Lee",
          image: "/images/team/david-lee.webp",
          email: "david@support.com",
          phone: "(123) 456-7890",
        },
        features: [
          {
            id: 1,
            icon: "double-bed",
            name: "bd",
            value: 6,
          },
          {
            id: 2,
            icon: "bath",
            name: "ba",
            value: 5,
          },
          {
            id: 3,
            icon: "ruler",
            name: "sqft",
            value: "7,200",
          },
        ],
      },
    ],
  },
];

const TeamMembers = [
  {
    id: 1,
    image: "/images/team/emily-davis.webp",
    name: "Emily Davis",
    title: "Real Estate Agent",
    phone: "(123) 456-7890",
    email: "emilydavis@support.com",
    description:
      "Emily Davis has 8 years of experience in the real estate industry, focusing on first-time homebuyers and investment properties.",
    socials: [
      {
        id: 1,
        icon: "instagram",
        link: "#",
      },
      {
        id: 2,
        icon: "facebook",
        link: "#",
      },
      {
        id: 3,
        icon: "linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    image: "/images/team/michael-brown.webp",
    name: "Michael Brown",
    title: "Real Estate Specialist",
    phone: "(123) 456-7890",
    email: "michael@support.com",
    description:
      "Michael Brown has 10 years of experience in the real estate industry, specializing in luxury properties and commercial real estate.",
    socials: [
      {
        id: 1,
        icon: "instagram",
        link: "#",
      },
      {
        id: 2,
        icon: "facebook",
        link: "#",
      },
      {
        id: 3,
        icon: "linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    image: "/images/team/david-lee.webp",
    name: "David Lee",
    title: "Real Estate Agent",
    phone: "(123) 456-7890",
    email: "davidlee@support.com",
    description:
      "David Lee has 5 years of experience in the real estate industry, specializing in residential properties and investment opportunities.",
    socials: [
      {
        id: 1,
        icon: "instagram",
        link: "#",
      },
      {
        id: 2,
        icon: "facebook",
        link: "#",
      },
      {
        id: 3,
        icon: "linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    image: "/images/team/ryan-cooper.webp",
    name: "Ryan Cooper",
    title: "Real Estate Agent",
    phone: "(123) 456-7890",
    email: "ryancooper@support.com",
    description:
      "Ryan Cooper has 5 years of experience in the real estate industry, specializing in residential properties and investment opportunities.",
    socials: [
      {
        id: 1,
        icon: "instagram",
        link: "#",
      },
      {
        id: 2,
        icon: "facebook",
        link: "#",
      },
      {
        id: 3,
        icon: "linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    image: "/images/team/olivia-hernandez.webp",
    name: "Olivia Hernandez",
    title: "Real Estate Agent",
    phone: "(123) 456-7890",
    email: "olivia@support.com",
    description:
      "Olivia Hernandez has 8 years of experience in the real estate industry, focusing on first-time homebuyers and investment properties.",
    socials: [
      {
        id: 1,
        icon: "instagram",
        link: "#",
      },
      {
        id: 2,
        icon: "facebook",
        link: "#",
      },
      {
        id: 3,
        icon: "linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 6,
    image: "/images/team/ethan-brooks.webp",
    name: "Ethan Brooks",
    title: "Real Estate Agent",
    phone: "(123) 456-7890",
    email: "ethanbrooks@support.com",
    description:
      "Ethan Brooks has 3 years of experience in the real estate industry, focusing on first-time homebuyers and investment properties.",
    socials: [
      {
        id: 1,
        icon: "instagram",
        link: "#",
      },
      {
        id: 2,
        icon: "facebook",
        link: "#",
      },
      {
        id: 3,
        icon: "linkedin",
        link: "#",
      },
    ],
  },
];

export { Tabs, Listings, TeamMembers };
