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
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<BaseLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route
              path="add"
              element={
                <ProtectedRoute>
                  <AddComicPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="user"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="user/edit"
              element={
                <ProtectedRoute>
                  <EditProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="comic/:comicId" element={<ComicPage />} />
            <Route
              path="comic/:comicId/add-chapter"
              element={
                <ProtectedRoute>
                  <AddChapterPage />
                </ProtectedRoute>
              }
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
