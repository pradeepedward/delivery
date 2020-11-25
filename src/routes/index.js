import React from "react";
import { Redirect } from "react-router-dom";

// Pages Component
import Chat from "../pages/Chat/Chat";

// Pages Calendar
import Calendar from "../pages/Calendar/index";

// User profile
import UserProfile from "../pages/Authentication/UserProfile";

//Tasks
import TasksList from "../pages/Tasks/tasks-list";
import TasksKanban from "../pages/Tasks/tasks-kanban";
import TasksCreate from "../pages/Tasks/tasks-create";

//Projects
import ProjectsGrid from "../pages/Projects/projects-grid";
import ProjectsList from "../pages/Projects/projects-list";
import ProjectsOverview from "../pages/Projects/projects-overview";
import ProjectsCreate from "../pages/Projects/projects-create";

//Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProductDetail";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../pages/Ecommerce/EcommerceShops";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct";

//Email
import EmailInbox from "../pages/Email/email-inbox";
import EmailRead from "../pages/Email/email-read";

//Invoices
import InvoicesList from "../pages/Invoices/invoices-list";
import InvoiceDetail from "../pages/Invoices/invoices-detail";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

 // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";

  // Dashboard
import Dashboard from "../pages/Dashboard/index";
import DashboardSaas from "../pages/Dashboard-saas/index";
import DashboardCrypto from "../pages/Dashboard-crypto/index";

 //Crypto
import CryptoWallet from "../pages/Crypto/crypto-wallet";
import CryptoBuySell from "../pages/Crypto/crypto-buy-sell";
import CryptoExchange from "../pages/Crypto/crypto-exchange";
import CryptoLending from "../pages/Crypto/crypto-lending";
import CryptoOrders from "../pages/Crypto/crypto-orders";
import CryptoKYCApplication from "../pages/Crypto/crypto-kyc-application";
import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index";

// Charts
import ChartApex from "../pages/Charts/Apexcharts";
import ChartistChart from "../pages/Charts/ChartistChart";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import EChart from "../pages/Charts/EChart";
import SparklineChart from "../pages/Charts/SparklineChart";
import ToastUIChart from "../pages/Charts/ToastUIChart";
import ChartsKnob from "../pages/Charts/charts-knob";

// Maps
import MapsGoogle from "../pages/Maps/MapsGoogle";
import MapsVector from "../pages/Maps/MapsVector";
import MapsLeaflet from "../pages/Maps/MapsLeaflet";

//Icons
import IconBoxicons from "../pages/Icons/IconBoxicons";
import IconDripicons from "../pages/Icons/IconDripicons";
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign";
import IconFontawesome from "../pages/Icons/IconFontawesome";

//Tables
import BasicTables from "../pages/Tables/BasicTables";
import DatatableTables from "../pages/Tables/DatatableTables";
import ResponsiveTables from "../pages/Tables/ResponsiveTables";
import EditableTables from "../pages/Tables/EditableTables";

// Forms
import FormElements from "../pages/Forms/FormElements";
import FormAdvanced from "../pages/Forms/FormAdvanced";
import FormEditors from "../pages/Forms/FormEditors";
import FormValidations from "../pages/Forms/FormValidations";
import FormMask from "../pages/Forms/FormMask";
import FormRepeater from "../pages/Forms/FormRepeater";
import FormUpload from "../pages/Forms/FormUpload";
import FormWizard from "../pages/Forms/FormWizard";
import FormXeditable from "../pages/Forms/FormXeditable";

//Ui
import UiAlert from "../pages/Ui/UiAlert";
import UiButtons from "../pages/Ui/UiButtons";
import UiCards from "../pages/Ui/UiCards";
import UiCarousel from "../pages/Ui/UiCarousel";
import UiColors from "../pages/Ui/UiColors";
import UiDropdown from "../pages/Ui/UiDropdown";
import UiGeneral from "../pages/Ui/UiGeneral";
import UiGrid from "../pages/Ui/UiGrid";
import UiImages from "../pages/Ui/UiImages";
import UiLightbox from "../pages/Ui/UiLightbox";
import UiModal from "../pages/Ui/UiModal";
import UiProgressbar from "../pages/Ui/UiProgressbar";
import UiSweetAlert from "../pages/Ui/UiSweetAlert";
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions";
import UiTypography from "../pages/Ui/UiTypography";
import UiVideo from "../pages/Ui/UiVideo";
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout";
import UiRating from "../pages/Ui/UiRating";
import UiRangeSlider from "../pages/Ui/UiRangeSlider";
import UiNotifications from "../pages/Ui/ui-notifications";
import UiImageCropper from "../pages/Ui/ui-image-cropper";

//Pages
import PagesStarter from "../pages/Utility/pages-starter";
import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import PagesTimeline from "../pages/Utility/pages-timeline";
import PagesFaqs from "../pages/Utility/pages-faqs";
import PagesPricing from "../pages/Utility/pages-pricing";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";

//Contacts
// import ContactsGrid from "../pages/Contacts/contacts-grid";
// import ContactsList from "../pages/Contacts/contacts-list";
// import ContactsProfile from "../pages/Contacts/contacts-profile";
import NewOrders from "../pages/Orders/newOrders";
import OrdersPickup from "../pages/Orders/orderPickup";
import DeliveredOrders from "../pages/Orders/deliveredOrders";
import ProcessingOrders from "../pages/Orders/processingOrders";
import OrdersDashboard from "../pages/Orders/orderDashboard";
import CancelledOrders from "../pages/Orders/cancelledOrders";
import AddRestaurant from "../pages/Vendor/Restaurant/addRestaurant";
import RestaurantList from "../pages/Vendor/Restaurant/restaurantList";
import AddCity from "../pages/City/addCity";
import CityList from "../pages/City/cityList";
import AddFood from "../pages/Food/addFood";
import FoodList from "../pages/Food/foodList";
import AddDeliveryBoy from "../pages/DeliveryBoy/addDeliveryBoy";
import DeliveryBoyList from "../pages/DeliveryBoy/deliveryBoyList";
import RestaurantDocument from "../pages/Document/restaurantDocument";
import DeliveryBoyDocument from "../pages/Document/deliveryBoyDocument";
import AddPromoCode from "../pages/PromoCode/addPromoCode";
import PromoCodeList from "../pages/PromoCode/promoCodeList";
import AddRestaurantBanner from "../pages/RestaurantBanner/addRestaurantBanner";
import RestaurantBannerList from "../pages/RestaurantBanner/restaurantBannerList";
import RestaurantPayouts from "../pages/Payouts/restaurantPayouts";
import DeliveryPayouts from "../pages/Payouts/deliveryPayouts";
import RestaurantApprovals from "../pages/Approvals/restaurantApprovals";
import DeliveryApprovals from "../pages/Approvals/delievryApprovals";
import OrdersReport from "../pages/Reports/ordersReport";
import DeliveryBoyReport from "../pages/Reports/deliveryBoyReports";
import UsersReport from "../pages/Reports/usersReport";
import RestaurantReport from "../pages/Reports/restaurantReports";
import WebUsersReport from "../pages/Reports/webUsersReport";
import AddUsers from "../pages/WebUsers/addUsers";
import UsersList from "../pages/WebUsers/usersList";
import LandingPage from "../pages/Home";
import RestaurantManagement from "../pages/Home/restaurantManagement";
import FoodManagement from "../pages/Home/foodManagement";
import CityManagement from "../pages/Home/cityManagement";
import PromocodeManagement from "../pages/Home/promoCodeManagement";
import UserManagement from "../pages/Home/userManagement";
import WebUserManagement from "../pages/Home/webUserManagement";
import UserOrders from "../pages/WebUsers/userOrders";
import UserBlog from "../pages/WebUsers/userBlog";
import UserProfile1 from "../pages/WebUsers/userProfile";
import DeliveryManagement from "../pages/Home/deliveryManagement";
import DeliveryProfile from "../pages/DeliveryBoy/deliveryProfile";
import DeliveryOrderCompleted from "../pages/DeliveryBoy/deliveryOrderCompleted";
import OrderMangament from "../pages/Home/orderManagement";
import ReportManagement from "../pages/Home/reportManagement";
import MasterManagement from "../pages/Home/masterManagement";
import SurgePricing from "../pages/Master/surgePricing";
import Category from "../pages/Master/category";
import Banners from "../pages/Master/banners";
import RefundOrders from "../pages/Orders/refundOrders";
import AddFoodRestaurant from "../pages/Food/addFoodRestaurant";
import PaymentGateway from "../pages/Master/paymentGateway";
import AddHomemade from "../pages/Vendor/Homemade/addHomeMade";
import HomemadeList from "../pages/Vendor/Homemade/homemadeList";
import HomemadeDocument from "../pages/Document/homemadeDocument";
import HomemadeApprovals from "../pages/Approvals/homemadeApprovals";
import HomemadePayouts from "../pages/Payouts/homemadePayouts";
import HomemadeReport from "../pages/Reports/homemadeReports";
import FastFoodApprovals from "../pages/Approvals/fastfoodApprovals";
import GroceryApprovals from "../pages/Approvals/groceryApprovals";
import FastFoodPayouts from "../pages/Payouts/fastfoodPayouts";
import GroceryPayouts from "../pages/Payouts/groceryPayouts";
import FastFoodReport from "../pages/Reports/fastfoodReports";
import GroceryReport from "../pages/Reports/groceryReports";
import GroceryDocument from "../pages/Document/groceryDocument";
import FastFoodDocument from "../pages/Document/fastfoodDocument";
import AddGrocery from "../pages/Vendor/Grocery/addGrocery";
import GroceryList from "../pages/Vendor/Grocery/groceryList";
import AddFastFood from "../pages/Vendor/FastFood/addFastFood";
import FastFoodList from "../pages/Vendor/FastFood/fastfoodList";
import Zone from "../pages/City/zone";
import FoodRestaurantList from "../pages/Food/foodRestaurantList";
import AddFoodHomemade from "../pages/Food/addFoodHomemade";
import FoodHomemadeList from "../pages/Food/foodHomemadeList";
import FoodFastFoodList from "../pages/Food/foodFastFoodList";
import HomemadeFoodManagement from "../pages/Home/homemadeFoodManagement";
import FastfoodFoodManagement from "../pages/Home/fastfoodFoodManagement";
import AddFoodFastFood from "../pages/Food/addFoodFastFood";

const authProtectedRoutes = [

	{ path: "/dashboard", component: Dashboard },
	{ path: "/dashboard-saas", component: DashboardSaas },
	{ path: "/dashboard-crypto", component: DashboardCrypto },

	//Orders
	{ path: "/orders-dashboard", component: OrdersDashboard},
	{ path: "/new-orders", component: NewOrders},
	{ path: "/processing-orders", component: ProcessingOrders},
	{ path: "/orders-pickup", component: OrdersPickup},
	{ path: "/delivered-orders", component: DeliveredOrders},
	{ path: "/cancelled-orders", component: CancelledOrders},
	{ path: "/refund-orders", component: RefundOrders},

	//Vendor
	{ path: "/add-restaurant", component: AddRestaurant},
	{ path: "/restaurant-list", component: RestaurantList},
	{ path: "/add-homemade", component: AddHomemade},
	{ path: "/homemade-list", component: HomemadeList},
	{ path: "/add-grocery", component: AddGrocery},
	{ path: "/grocery-list", component: GroceryList},
	{ path: "/add-fastfood", component: AddFastFood},
	{ path: "/fastfood-list", component: FastFoodList},

	//City
	{ path: "/add-city", component: AddCity},
	{ path: "/city-list", component: CityList},
	{ path: "/add-zone", component: Zone},

	//Food
	{ path: "/add-Food-Category", component: AddFood},
	{ path: "/food-Category", component: FoodList},
	{ path: "/add-Food-Restaurant", component: AddFoodRestaurant},
	{ path: "/food-Restaurant-List", component: FoodRestaurantList},
	{ path: "/add-Food-Homemade", component: AddFoodHomemade},
	{ path: "/food-Homemade-List", component: FoodHomemadeList},
	{ path: "/add-Food-FastFood", component: AddFoodFastFood},
	{ path: "/food-Fastfood-List", component: FoodFastFoodList},

	//Delivery Boy
	{ path: "/add-delivery-boy", component: AddDeliveryBoy},
	{ path: "/delivery-boy-list", component: DeliveryBoyList},
	{ path: "/delivery-partner-profile", component: DeliveryProfile},
	{ path: "/delivery-order-completed", component: DeliveryOrderCompleted},
	{ path: "/delivery-partner-profile", component: DeliveryProfile},

	//Doxument
	{ path: "/restaurant-document", component: RestaurantDocument},
	{ path: "/delivery-boy-document", component: DeliveryBoyDocument},
	{ path: "/homemade-document", component: HomemadeDocument},
	{ path: "/grocery-document", component: GroceryDocument},
	{ path: "/fastfood-document", component: FastFoodDocument},

	//PromoCode
	{ path: "/add-promocode", component: AddPromoCode},
	{ path: "/promocode-list", component: PromoCodeList},

	//Restaurant Banner
	{ path: "/add-vendor-banner", component: AddRestaurantBanner},
	{ path: "/restaurant-banner-list", component: RestaurantBannerList},

	//Payouts
	{ path: "/restaurant-payouts", component: RestaurantPayouts},
	{ path: "/delivery-payouts", component: DeliveryPayouts},
	{ path: "/homemade-payouts", component: HomemadePayouts},
	{ path: "/fastfood-payouts", component: FastFoodPayouts},
	{ path: "/grocery-payouts", component: GroceryPayouts},

	//Approvals
	{ path: "/restaurant-approvals", component: RestaurantApprovals},
	{ path: "/delivery-approvals", component: DeliveryApprovals},
	{ path: "/homemade-approvals", component: HomemadeApprovals},
	{ path: "/fastfood-approvals", component: FastFoodApprovals},
	{ path: "/grocery-approvals", component: GroceryApprovals},

	//Reports
	{ path: "/orders-report", component: OrdersReport},
	{ path: "/delivery-boy-report", component: DeliveryBoyReport},
	{ path: "/users-report", component: UsersReport},
	{ path: "/restaurant-report", component: RestaurantReport},
	{ path: "/web-users-report", component: WebUsersReport},
	{ path: "/homemade-report", component: HomemadeReport},
	{ path: "/fastfood-report", component: FastFoodReport},
	{ path: "/grocery-report", component: GroceryReport},


	//Web user
	{ path: "/add-webuser", component: AddUsers},
	{ path: "/webuser-list", component: UsersList},
	{ path: "/user-orders", component: UserOrders},
	{ path: "/user-profile", component: UserProfile1},
	{ path: "/user-blog", component: UserBlog},

	//Master
	{ path: "/master-surge-pricing", component: SurgePricing},
	{ path: "/master-category", component: Category},
	{ path: "/master-banners", component: Banners},
	{ path: "/master-payment-gateway", component: PaymentGateway},



	//Crypto
	{ path : "/crypto-wallet", component : CryptoWallet },
	{ path : "/crypto-buy-sell", component : CryptoBuySell },
	{ path : "/crypto-exchange", component : CryptoExchange },
	{ path : "/crypto-lending", component : CryptoLending },
	{ path : "/crypto-orders", component : CryptoOrders },
	{ path : "/crypto-kyc-application", component : CryptoKYCApplication },
	
	//profile
	{ path: "/profile", component: UserProfile },

	//chat
	{ path: "/chat", component: Chat },

	//calendar
	{ path: "/calendar", component: Calendar },

	//Ecommerce
	{ path: "/ecommerce-products", component: EcommerceProducts },
	{ path: "/ecommerce-product-detail", component: EcommerceProductDetail },
	{ path: "/ecommerce-orders", component: EcommerceOrders },
	{ path: "/ecommerce-customers", component: EcommerceCustomers },
	{ path: "/ecommerce-cart", component: EcommerceCart },
	{ path: "/ecommerce-checkout", component: EcommerceCheckout },
	{ path: "/ecommerce-shops", component: EcommerceShops },
	{ path: "/ecommerce-add-product", component: EcommerceAddProduct },

	//Email
	{ path: "/email-inbox", component: EmailInbox },
	{ path: "/email-read", component: EmailRead },

	//Invoices
	{ path: "/invoices-list", component: InvoicesList },
	{ path: "/invoices-detail", component: InvoiceDetail },

	// Tasks
	{ path: "/tasks-list", component: TasksList },
	{ path: "/tasks-kanban", component: TasksKanban },
	{ path: "/tasks-create", component: TasksCreate },

	//Projects
	{ path: "/projects-grid", component: ProjectsGrid },
	{ path: "/projects-list", component: ProjectsList },
	{ path: "/projects-overview", component: ProjectsOverview },
	{ path: "/projects-create", component: ProjectsCreate },

	// Contacts
	// { path: "/contacts-grid", component: ContactsGrid },
	// { path: "/contacts-list", component: ContactsList },
	// { path: "/contacts-profile", component: ContactsProfile },

	//Charts
	{ path: "/apex-charts", component: ChartApex },
	{ path: "/chartist-charts", component: ChartistChart },
	{ path: "/chartjs-charts", component: ChartjsChart },
	{ path: "/e-charts", component: EChart },
	{ path: "/sparkline-charts", component: SparklineChart },
	{ path: "/tui-charts", component: ToastUIChart },
	{ path: "/charts-knob", component: ChartsKnob },

	// Icons
	{ path: "/icons-boxicons", component: IconBoxicons },
	{ path: "/icons-dripicons", component: IconDripicons },
	{ path: "/icons-materialdesign", component: IconMaterialdesign },
	{ path: "/icons-fontawesome", component: IconFontawesome },

	// Tables
	{ path: "/tables-basic", component: BasicTables },
	{ path: "/tables-datatable", component: DatatableTables },
	{ path: "/tables-responsive", component: ResponsiveTables },
	{ path: "/tables-editable", component: EditableTables },

	// Maps
	{ path: "/maps-google", component: MapsGoogle },
	{ path: "/maps-vector", component: MapsVector },
	{ path: "/maps-leaflet", component: MapsLeaflet },

	// Forms
	{ path: "/form-elements", component: FormElements },
	{ path: "/form-advanced", component: FormAdvanced },
	{ path: "/form-editors", component: FormEditors },
	{ path: "/form-mask", component: FormMask },
	{ path: "/form-repeater", component: FormRepeater },
	{ path: "/form-uploads", component: FormUpload },
	{ path: "/form-wizard", component: FormWizard },
	{ path: "/form-validation", component: FormValidations },
	{ path: "/form-xeditable", component: FormXeditable },

	// Ui
	{ path: "/ui-alerts", component: UiAlert },
	{ path: "/ui-buttons", component: UiButtons },
	{ path: "/ui-cards", component: UiCards },
	{ path: "/ui-carousel", component: UiCarousel },
	{ path: "/ui-colors", component: UiColors },
	{ path: "/ui-dropdowns", component: UiDropdown },
	{ path: "/ui-general", component: UiGeneral },
	{ path: "/ui-grid", component: UiGrid },
	{ path: "/ui-images", component: UiImages },
	{ path: "/ui-lightbox", component: UiLightbox },
	{ path: "/ui-modals", component: UiModal },
	{ path: "/ui-progressbars", component: UiProgressbar },
	{ path: "/ui-sweet-alert", component: UiSweetAlert },
	{ path: "/ui-tabs-accordions", component: UiTabsAccordions },
	{ path: "/ui-typography", component: UiTypography },
	{ path: "/ui-video", component: UiVideo },
	{ path: "/ui-session-timeout", component: UiSessionTimeout },
	{ path: "/ui-rating", component: UiRating },
	{ path: "/ui-rangeslider", component: UiRangeSlider },
	{ path: "/ui-notifications", component: UiNotifications },
	{ path: "/ui-image-cropper", component: UiImageCropper },

	//Utility
	{ path: "/pages-starter", component: PagesStarter },
	{ path: "/pages-timeline", component: PagesTimeline },
	{ path: "/pages-faqs", component: PagesFaqs },
	{ path: "/pages-pricing", component: PagesPricing },

	{ path: "/home", component: LandingPage },
	{ path: "/vendor-management", component: RestaurantManagement },
	{ path: "/food-management", component: FoodManagement },
	{ path: "/city-management", component: CityManagement },
	{ path: "/restaurant-promocode", component: PromocodeManagement },
	{ path: "/user-management", component: UserManagement },
	{ path: "/webuser-management", component: WebUserManagement },
	{ path: "/delivery-management", component: DeliveryManagement },
	{ path: "/order-management", component: OrderMangament },
	{ path: "/report", component: ReportManagement },
	{ path: "/master", component: MasterManagement },
	{ path: "/restaurant-management", component: RestaurantManagement },
	{ path: "/homemade-management", component: RestaurantManagement },
	{ path: "/fastfood-management", component: RestaurantManagement },
	{ path: "/grocery-management", component: RestaurantManagement },
	{ path: "/homemade-food-management", component: HomemadeFoodManagement },
	{ path: "/fastfood-food-management", component: FastfoodFoodManagement },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/home" /> }

];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },

	{ path: "/pages-maintenance", component: PagesMaintenance },
	{ path: "/pages-comingsoon", component: PagesComingsoon },
	{ path: "/pages-404", component: Pages404 },
	{ path: "/pages-500", component: Pages500 },
	{ path : "/crypto-ico-landing", component : CryptoIcoLanding },

	// Authentication Inner
	{ path: "/pages-login", component: Login1 },
	{ path: "/pages-register", component: Register1 },
	{ path: "/pages-forgot-pwd", component: ForgetPwd1 },
	{ path : "/auth-lock-screen", component: LockScreen }
];

export { authProtectedRoutes, publicRoutes };
