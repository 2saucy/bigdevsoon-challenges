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
import MeetingSchedule from "./solutions/meeting-schedule";
import JobBoard from "./solutions/job-board";
import VideoPlayer from "./solutions/video-player";
import Invoices from "./solutions/invoices";
import Dashboard from "./solutions/dashboard";
import Newsletter from "./solutions/newsletter";
import UserProfile from "./solutions/user-profile";
import RateUs from "./solutions/rate-us";
import SleepApp from "./solutions/sleep-app";
import ExploreFlights from "./solutions/explore-flights";
import MusicFestival from "./solutions/music-festival";
import QRCodeScanner from "./solutions/qr-code-scanner";
import FAQ from "./solutions/faq";
import CreateWorkspace from "./solutions/create-workspace";
import SettingsAppearance from "./solutions/settings-appearance";
import PlayerProfile from "./solutions/player-profile";
import HostingFeatures from "./solutions/hosting-features";
import FriendRequest from "./solutions/friend-request";
import DownloadApp from "./solutions/download-app";
import AppNavigation from "./solutions/app-navigation";
import LanguageApp from "./solutions/language-app";

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
  },
  {
    slug: "meeting-schedule",
    solution: <MeetingSchedule />,
  },
  {
    slug: "job-board",
    solution: <JobBoard />,
  },
  {
    slug: "video-player",
    solution: <VideoPlayer />,
  },
  {
    slug: "invoices",
    solution: <Invoices />,
  },
  {
    slug: "newsletter",
    solution: <Newsletter />,
  },
  {
    slug: "dashboard",
    solution: <Dashboard />,
  },
  {
    slug: "rate-us",
    solution: <RateUs />,
  },
  {
    slug: "user-profile",
    solution: <UserProfile />,
  },
  {
    slug: "sleep-app",
    solution: <SleepApp />,
  },
  {
    slug: "explore-flights",
    solution: <ExploreFlights />,
  },
  {
    slug: "music-festival",
    solution: <MusicFestival />,
  },
  {
    slug: "qr-code-scanner",
    solution: <QRCodeScanner />,
  },
  {
    slug: "faq",
    solution: <FAQ />,
  },
  {
    slug: "create-workspace",
    solution: <CreateWorkspace />,
  },
  {
    slug: "settings-appearance",
    solution: <SettingsAppearance />,
  },
  {
    slug: "player-profile",
    solution: <PlayerProfile />,
  },
  {
    slug: "hosting-features",
    solution: <HostingFeatures />,
  },
  {
    slug: "friend-request",
    solution: <FriendRequest />,
  },
  {
    slug: "download-app",
    solution: <DownloadApp />,
  },
  {
    slug: "app-navigation",
    solution: <AppNavigation />,
  },
  {
    slug: "language-app",
    solution: <LanguageApp />,
  },
];
