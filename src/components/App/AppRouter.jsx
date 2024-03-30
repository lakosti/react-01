import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import MailBoxPages from "../../pages/HomePage";
import css from "../../App.module.css";
import classNames from "classnames";
import Welcome from "../../pages/Welcome";
import ProductDetail from "../../pages/ProductDetail";
import Products from "../../pages/Products";
import SearchPage from "../../pages/SearchPage";
const AppRouter = () => {
  //?у функцію приходять пропси ми з ним витягуємо isActive потім пишемо утилітарний клас, стилі якого будуть завди потім за умовою додаємо інший клас

  const getNavLinkClassNames = ({ isActive }) =>
    classNames(css.headerLink, {
      [css.active]: isActive,
    });

  return (
    <div>
      <header className={css.header}>
        <NavLink className={getNavLinkClassNames} to="/">
          Welcome
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/home">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/products" end>
          Products
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/search">
          Find Products
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<MailBoxPages />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId/*" element={<ProductDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
