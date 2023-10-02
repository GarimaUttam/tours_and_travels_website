import dashboard from "../images/dashboard.png";
import memoryimg from "../images/memory.png";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/img1.jpg";
import place2 from "../images/img2.jpg";
import place3 from "../images/img3.jpg";
import place4 from "../images/img4.jpg";
import place5 from "../images/img5.jpg";
import place6 from "../images/img6.jpg";
import place7 from "../images/img7.jpg";
import place8 from "../images/img8.jpg";
import place9 from "../images/img9.jpg";

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
// import youtube from '../images/gmail.png';
// import youtube from '../images/whatsapp.png';

import banner from '../images/banner.jpg';

export const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];

export const navlinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  "title": "Its a Gig World Out",
  "subtitle": "Then, Go Explore",
  "text": "We provide you always your dream places. We always make our customer happy by proving many choices.",
  "btn1": "Get Started",
  "btn2": "Get Demo",
  "img": dashboard,
};

export const memory = {
  "title": "Sweet Memories",
  "subtitle": "Come To Life Again",
  "text": "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
  "img": memoryimg,
  "experience": [
    { "number": "10", "title": "Year Experience" },
    { "number": "400", "title": "Year Collaboration" },
    { "number": "30k+", "title": "Happy Customer" },
  ],
};

export const placesAPI = [
  { "placeImg": place1, "location": "Las Vegas", "distance": "To Do: Bellagio Hotel,Las Vegas Strip,Luxor Hotel,Casino" },
  { "placeImg": place2, "location": "Paris", "distance": "To Do: Eiffel Tower,Cathédrale Notre-Dame de Paris" },
  { "placeImg": place3, "location": "London", "distance": "To Do: Buckingham Palace, Tower of London, The British Museum" },
  { "placeImg": place4, "location": "Hawaii", "distance": "To Do: Hawaiʻi Volcanoes National Park, Hanauma Bay" },
  { "placeImg": place5, "location": "Mumbai", "distance": "To Do: Chhatrapati Shivaji Terminus,Elephanta Caves" },
  { "placeImg": place6, "location": "Seoul", "distance": "To Do: N Seoul Tower,Gyeongbokgung Palace,Bukchon Hanok Village" },
  { "placeImg": place7, "location": "Shanghai", "distance": "To Do: Shanghai Tower,Yu Garden, Oriental Pearl TV Tower" },
  { "placeImg": place8, "location": "Dubai", "distance": "To Do: Burj Khalifa, Dubai Mall, Burj Al Arab,Palm Island" },
  { "placeImg": place9, "location": "New York", "distance": "To Do: Central Park, The Metropolitan Museum of Art, Statue of Liberty" }
];

export const pricingapi = {
  "title": "Choose The Plan That Suits You",
  "text": "Many attractive offers by becomming a premium member",
  "btn1": "Monthly",
  "btn2": "Yearly",
  "plans": [
    {
      "planicon": standardicon,
      "title": "Standard Membership",
      "text": "Suitable for all users",
      "plantype": "Free / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Free",
    },
    {
      "planicon": preminumicon,
      "title": "Preminum Membership",
      "text": "Suitable for enthusiast travelers",
      "plantype": "₹499 / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "Advanced Travel Stats" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Started",
    },
  ],
};

export const bannerAPI = {
  "title": "The Greet Outdoors",
  "text": "Whislist Curated By Travigo.",
  "imgSrc": banner,
  "btnText": "Explore More"
}

export const footerAPI = {
  "titles": [ {"title": "About"},{"title": "Company"},{"title": "Support"} ],
  "links": [
    [
      {"link": "About US"},
      {"link": "Features"},
      {"link": "News"},
      {"link": "Menu"},
    ],
    [
      {"link": "Why Travigo?"},
      {"link": "Partner with Us"},
      {"link": "FAQ"},
      {"link": "Blog"},
    ],
    [
      {"link": "Account"},
      {"link": "Support Center"},
      {"link": "Feedback"},
      {"link": "Contact Us"},
      {"link": "Accesbility"},
    ],
  ],
  "sociallinks": [
    {"icon": facebook},{"icon": instagram},{"icon": twitter},{"icon": youtube},
  ]
};
