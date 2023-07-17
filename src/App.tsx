import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddChapterPage,
  AddComicPage,
  ComicPage,
  EditProfilePage,
  LoginPage,
  ReaderPage,
  RegisterPage,
  UserPage,
} from "./pages";
import { BaseLayout, ReaderLayout } from "./layouts";
import { Alert } from "./components/Alert/Alert";

function App() {
  return (
    <>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<BaseLayout />}>
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
