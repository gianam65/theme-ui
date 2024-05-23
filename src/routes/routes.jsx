import HomePage from "../pages/home-page";
import LoginPage from "../pages/login";
import HistoryPage from "../pages/history";
import ProductsPage from "../pages/products";
import ManagementPage from "../pages/management";
import RegisterPage from "../pages/register";
import ProfilePage from "../pages/profile";
import CartPage from "../pages/cart";
import DetailPage from "../pages/detail";
import config from "../config";
import PaymentPage from "../pages/payment/payment";
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.login, component: LoginPage, isLogin: true },
  { path: config.routes.register, component: RegisterPage, isLogin: true },
  { path: config.routes.history, component: HistoryPage },
  { path: config.routes.products, component: ProductsPage },
  { path: config.routes.management, component: ManagementPage },
  { path: config.routes.profile, component: ProfilePage },
  { path: config.routes.cart, component: CartPage },
  { path: config.routes.detail, component: DetailPage },
  { path: config.routes.payment, component: PaymentPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
