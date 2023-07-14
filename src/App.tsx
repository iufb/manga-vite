import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages";
import { BaseLayout } from "./layouts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<BaseLayout />}>
            <Route path="add" element={<div>add new</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
