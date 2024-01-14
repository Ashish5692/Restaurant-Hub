import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData?.restaurants[0]?.info;

  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={imageUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{`${avgRating} Stars`}</h3>
      <h3>{sla.slaString}</h3>
    </div>
  );
};

const resList = {
  restaurants: [
    {
      info: {
        id: "233067",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "obtyqt35sq55t0owwixq",
        locality: "Sapphire Mall",
        areaName: "Sector 83",
        costForTwo: "₹450 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 3.9,
        parentId: "4961",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 7.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "7.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 00:55:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-sapphire-mall-sector-83-gurgaon-233067",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "111601",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Delhi Ajmer Expressway",
        areaName: "Haryana 122051",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 3.9,
        parentId: "166",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 49,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {},
    },
    {
      info: {
        id: "286446",
        name: "McDonald's",
        cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
        locality: "Sector 80",
        areaName: "Manesar",
        costForTwo: "₹400 for two",
        cuisines: ["American"],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-sector-80-manesar-gurgaon-286446",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "217460",
        name: "Nirula's",
        cloudinaryImageId: "z3di9dfuemoorudv45tq",
        locality: "SS Omnia",
        areaName: "Sector 83",
        costForTwo: "₹500 for two",
        cuisines: [
          "Pizzas",
          "Burgers",
          "Ice Cream",
          "North Indian",
          "Fast Food",
          "Asian",
          "Pastas",
          "Desserts",
          "Beverages",
          "Snacks",
        ],
        avgRating: 3.8,
        parentId: "1738",
        avgRatingString: "3.8",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 8.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "8.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/nirulas-ss-omnia-sector-83-gurgaon-217460",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "207788",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Huda Market",
        areaName: "Manesar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        parentId: "21809",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-huda-market-manesar-gurgaon-207788",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "207862",
        name: "The Good Bowl",
        cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
        locality: "Huda Market",
        areaName: "Manesar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "7918",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-good-bowl-huda-market-manesar-gurgaon-207862",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "207859",
        name: "Sweet Truth - Cake and Desserts",
        cloudinaryImageId: "81cf6bfe2760a45a0caf2e28716ca4d7",
        locality: "Huda Market",
        areaName: "Manesar",
        costForTwo: "₹450 for two",
        cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
        avgRating: 4.2,
        parentId: "4444",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-huda-market-manesar-gurgaon-207859",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "207855",
        name: "Firangi Bake",
        cloudinaryImageId: "zuwtf4egidzfsdtjw92q",
        locality: "Huda Market",
        areaName: "Manesar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Mexican",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 3.9,
        parentId: "3952",
        avgRatingString: "3.9",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/firangi-bake-huda-market-manesar-gurgaon-207855",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "207809",
        name: "Oven Story Pizza - Standout Toppings",
        cloudinaryImageId: "b39e4312ae2e9f65c3b58faaed83f488",
        locality: "Huda Market",
        areaName: "Manesar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.3,
        parentId: "3534",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "30-42 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-huda-market-manesar-gurgaon-207809",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "222662",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Iris Broadway",
        areaName: "Sector 85",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4,
        parentId: "547",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 8,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "8.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-iris-broadway-sector-85-gurgaon-222662",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "224103",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Iris Broadway",
        areaName: "Sector 85",
        costForTwo: "₹350 for two",
        cuisines: ["Italian", "Pizzas", "Snacks"],
        avgRating: 4,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 8.1,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "8.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹179",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-iris-broadway-sector-85-gurgaon-224103",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "169693",
        name: "Keventers - Milkshakes & Desserts",
        cloudinaryImageId: "89707df532fd993b3d79a1a28038a901",
        locality: "Sapphire 83 Mall",
        areaName: "Sector 83",
        costForTwo: "₹200 for two",
        cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
        avgRating: 4.1,
        veg: true,
        parentId: "268997",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-sapphire-83-mall-sector-83-gurgaon-169693",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "240271",
        name: "Biryani Blues",
        cloudinaryImageId: "a62be02f02260c1165cd715216c3c55f",
        locality: "Sector 83",
        areaName: "Sector 83",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Hyderabadi",
          "Lucknowi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "13813",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 7.3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "7.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-14 01:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/biryani-blues-sector-83-gurgaon-240271",
        type: "WEBLINK",
      },
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={{ restaurants: [restaurant] }}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //for displaying on browser

root.render(<AppLayout />);

// // Core React - React.createElement =>JS Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// //JSX - JSX is not HTML ..it is HTML or XML like syntax
// //JSX => React.createElement => React Element- JS object => HTML Element(render)
// //Babel convert/transpile JSX to core React code.
// const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;

// //React Functional Component- fn that return JSX code

// const Title = () => <h1>I am Title</h1>;

// const HeadingComponent2 = () => {
//   return <h1>Namaste Functional component</h1>;
// };
// //Another Syntax
// const HeadingComponent = () => (
//   <div id="container">
//     {Title()}
//     <Title></Title>
//     <Title />
//     <h1>Namaste Functional component</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root")); //for displaying on browser

// root.render(<HeadingComponent />);
