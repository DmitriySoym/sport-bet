import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage, DetailPage, NotFoundPage } from "pages";
import { MainTemplate } from "template";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.DETAIL} element={<DetailPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </Route>
  )
);
