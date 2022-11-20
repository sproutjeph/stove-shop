import { Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  AuthPage,
  PricingPage,
  CartPage,
  CheckOut,
  ProfileLayout,
} from "../views";

function Router() {
  return (
    <>
      <Routes>
        <Route element={<AuthPage />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<h1>Forgot Password</h1>} />
        </Route>

        <Route path="/" element={<HomePage />} />

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/profile" element={<ProfileLayout />} />

        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Router;
