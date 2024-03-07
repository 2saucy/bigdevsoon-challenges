import ProfileCard from "./solutions/profile-card";
import AddToBag from "./solutions/add-to-bag";
import MobileNavigation from "./solutions/mobile-navigation";
import ContactUs from "./solutions/contact-us";
import Recipe from "./solutions/Recipe";
import ImageCarousel from "./solutions/image-carousel";
import CreateAccount from "./solutions/create-account";
import MusicEvents from "./solutions/music-events";
import PasswordGenerator from "./solutions/password-generator";
import SignUpPage from "./solutions/sign-up-page";
import HotelBooking from "./solutions/hotel-booking";
import RestaurantReservation from "./solutions/restaurant-reservation";
import TaskBoard from "./solutions/task-board";
import ShoppingList from "./solutions/shopping-list";
import Notifications from "./solutions/Notifications";
import FurFriends from "./solutions/fur-friends";
import ArticleSlider from "./solutions/article-slider";
import ImagesPreview from "./solutions/images-preview";
import UploadImages from "./solutions/upload-image";
import CardWallet from "./solutions/card-wallet";
import PricingPlans from "./solutions/pricing-plans";
import Messages from "./solutions/Messages";
import HomePage from "./solutions/home-page";
import MovieTicket from "./solutions/movie-ticket";

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
  {
    slug: "movie-ticket",
    solution: <MovieTicket />,
  }
];
