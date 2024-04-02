import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../HTTPS/Loader/Loader";
import Layout from "../Layout/Layout";

const MailBoxPages = lazy(() => import("../../pages/HomePage"));
const Welcome = lazy(() => import("../../pages/Welcome"));
const ProductDetail = lazy(() => import("../../pages/ProductDetail"));
const Products = lazy(() => import("../../pages/Products"));
const SearchPage = lazy(() => import("../../pages/SearchPage"));

const AppRouter = () => {
  //?у функцію приходять пропси ми з ним витягуємо isActive потім пишемо утилітарний клас, стилі якого будуть завди потім за умовою додаємо інший клас

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<MailBoxPages />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId/*" element={<ProductDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRouter;
