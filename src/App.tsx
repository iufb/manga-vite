import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddChapterPage,
  AddComicPage,
  CatalogPage,
  ComicPage,
  EditProfilePage,
  HomePage,
  LoginPage,
  ReaderPage,
  RegisterPage,
  UserPage,
} from "./pages";
import { BaseLayout, ReaderLayout } from "./layouts";
import { Alert } from "./components/Alert/Alert";
import { useWindowSize } from "./hooks/useWindowSize";
import { MobileLayout } from "./layouts/MobileLayout/MobileLayout";

function App() {
  const { width } = useWindowSize();
  return (
    <>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/"
            element={width > 640 ? <BaseLayout /> : <MobileLayout />}
          >
            <Route path="home" element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="add" element={<AddComicPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="user/edit" element={<EditProfilePage />} />
            <Route path="comic/:comicId" element={<ComicPage />} />
            <Route
              path="comic/:comicId/add-chapter"
              element={<AddChapterPage />}
            />
          </Route>
          <Route path="/reader" element={<ReaderLayout />}>
            <Route
              path="/reader/:comicId/:chapterNumber"
              element={<ReaderPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
