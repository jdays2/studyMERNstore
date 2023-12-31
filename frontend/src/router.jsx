import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ShippingPage } from './pages/ShippingPage';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { PaymentPage } from './pages/PaymentPage';
import { PlaceOrderPage } from './pages/PlaceOrderPage';
import { OrderPage } from './pages/OrderPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminRoute } from './components/routes/AdminRoute';
import { OrderListPage } from './pages/admin/OrderListPage';
import { ProductListPage } from './pages/admin/ProductListPage';
import { ProductEditPage } from './pages/admin/ProductEditPage';
import { UserListPage } from './pages/admin/UserListPage';
import { UserEditPage } from './pages/admin/UserEditPage';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}>
			<Route
				index="true"
				element={<HomePage />}
			/>
			<Route
				path="/pages/:pageNumber"
				element={<HomePage />}
			/>
			<Route
				path="/search/:keyword"
				element={<HomePage />}
			/>
			<Route
				path="/search/:keyword/pages/:pageNumber"
				element={<HomePage />}
			/>
			<Route
				path="/product/:id"
				element={<ProductPage />}
			/>
			<Route
				path="/cart"
				element={<CartPage />}
			/>
			<Route
				path="/login"
				element={<LoginPage />}
			/>
			<Route
				path="/registration"
				element={<RegisterPage />}
			/>

			<Route
				path=""
				element={<PrivateRoute />}>
				<Route
					path="/shipping"
					element={<ShippingPage />}
				/>
				<Route
					path="/payment"
					element={<PaymentPage />}
				/>
				<Route
					path="/place-order"
					element={<PlaceOrderPage />}
				/>
				<Route
					path="/order/:id"
					element={<OrderPage />}
				/>
				<Route
					path="/profile"
					element={<ProfilePage />}
				/>
			</Route>

			<Route
				path=""
				element={<AdminRoute />}>
				<Route
					path="/admin/order-list"
					element={<OrderListPage />}
				/>
				<Route
					path="/admin/product-list"
					element={<ProductListPage />}
				/>
				<Route
					path="/admin/product-list/page/:pageNumber"
					element={<ProductListPage />}
				/>
				<Route
					path="/admin/user-list"
					element={<UserListPage />}
				/>
				<Route
					path="/admin/product/:id/edit"
					element={<ProductEditPage />}
				/>
				<Route
					path="/admin/user/:id/edit"
					element={<UserEditPage />}
				/>
			</Route>
		</Route>,
	),
);
