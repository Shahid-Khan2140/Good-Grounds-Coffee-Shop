import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BrewGuides from "./pages/BrewGuides";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "about", Component: About },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "order-confirmation", Component: OrderConfirmation },
      { path: "contact", Component: Contact },
      { path: "brew-guides", Component: BrewGuides },
      { path: "faq", Component: FAQ },
      { path: "privacy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsOfService },
    ],
  },
], {
  basename: import.meta.env.BASE_URL
});