import ProfileCard from "./solutions/ProfileCard";
import AddToBag from "./solutions/AddToBag";
import MobileNavigation from "./solutions/MobileNavigation";
import ContactUs from "./solutions/ContactUs";
import Recipe from "./solutions/Recipe";
import ImageCarousel from "./solutions/ImageCarousel";
import CreateAccount from "./solutions/CreateAccount";
import MusicEvents from "./solutions/MusicEvents";
import PasswordGenerator from "./solutions/PasswordGenerator";
import SignUpPage from "./solutions/SignUpPage";
import HotelBooking from "./solutions/HotelBooking";
import RestaurantReservation from "./solutions/RestaurantReservation";
import TaskBoard from "./solutions/TaskBoard";
import ShoppingList from "./solutions/ShoppingList";
import Notifications from "./solutions/Notifications";
import FurFriends from "./solutions/FurFriends";
import ArticleSlider from "./solutions/ArticleSlider";
import ImagesPreview from "./solutions/ImagesPreview";
import UploadImages from "./solutions/UploadImages";
import CardWallet from "./solutions/CardWallet";
import PricingPlans from "./solutions/PricingPlans";
import Messages from "./solutions/Messages";
import HomePage from "./solutions/HomePage";

type Challenges = {
  slug: string;
  solution: JSX.Element;
}[];

export const challenges: Challenges = [
  {
    slug: "profile-card",
    solution: <ProfileCard />,
  },
  {
    slug: "add-to-bag",
    solution: <AddToBag />,
  },
  {
    slug: "mobile-navigation",
    solution: <MobileNavigation />,
  },
  {
    slug: "contact-us",
    solution: <ContactUs />,
  },
  {
    slug: "recipe",
    solution: <Recipe />,
  },
  {
    slug: "image-carousel",
    solution: <ImageCarousel />,
  },
  {
    slug: "create-account",
    solution: <CreateAccount />,
  },
  {
    slug: "music-events",
    solution: <MusicEvents />,
  },
  {
    slug: "password-generator",
    solution: <PasswordGenerator />,
  },
  {
    slug: "sign-up-page",
    solution: <SignUpPage />,
  },
  {
    slug: "hotel-booking",
    solution: <HotelBooking />,
  },
  {
    slug: "restaurant-reservation",
    solution: <RestaurantReservation />,
  },
  {
    slug: "task-board",
    solution: <TaskBoard />,
  },
  {
    slug: "shopping-list",
    solution: <ShoppingList />,
  },
  {
    slug: "notifications",
    solution: <Notifications />,
  },
  {
    slug: "fur-friends",
    solution: <FurFriends />,
  },
  {
    slug: "article-slider",
    solution: <ArticleSlider />,
  },
  {
    slug: "images-preview",
    solution: <ImagesPreview />,
  },
  {
    slug: "upload-images",
    solution: <UploadImages />,
  },
  {
    slug: "card-wallet",
    solution: <CardWallet />,
  },
  {
    slug: "pricing-plans",
    solution: <PricingPlans />,
  },
  {
    slug: "messages",
    solution: <Messages />,
  },
  {
    slug: "home-page",
    solution: <HomePage />,
  },
];
