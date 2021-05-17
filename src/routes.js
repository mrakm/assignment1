import DisplayBid from "./vews/DisplayBidPage";
import UserBid from "./vews/UserBid";

export const indexRoutes = [
  { path: "/", name: "Home", component: DisplayBid },
  { path: "/user/:id", name: "user", component: UserBid },
];
