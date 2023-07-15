import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditProfilePage, LoginPage, RegisterPage, UserPage } from "./pages";
import { BaseLayout } from "./layouts";
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
            <Route path="add" element={<div>add new</div>} />
            <Route path="user" element={<UserPage />} />
            <Route path="/user/edit" element={<EditProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
