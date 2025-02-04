
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
// import Products from "./pages/Products";
// import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/layout/DashboardLayout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route
        path="/categories"
        element={
          <DashboardLayout>
            <Categories />
          </DashboardLayout>
        }
      />
      {/* <Route
        path="/products"
        element={
          <DashboardLayout>
            <Products />
          </DashboardLayout>
        }
      /> */}
    </Routes>
  </BrowserRouter>
);

export default App;