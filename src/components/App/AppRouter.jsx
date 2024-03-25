import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import MailBoxPages from "../../pages/MailBoxPage";
import css from "../../App.module.css";
import classNames from "classnames";
import Welcome from "../Welcome";
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
        <NavLink className={getNavLinkClassNames} to="/products">
          Products
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<MailBoxPages />} />
          <Route path="/products" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRouter;
