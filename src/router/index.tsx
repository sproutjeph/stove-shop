import { useRoutes, Routes, Route } from "react-router-dom";
import {
  CounterExample,
  ErrorPage,
  HomePage,
  AuthPage,
  PricingPage,
  CartPage,
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

        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Router;