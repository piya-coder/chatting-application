import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { ChattingPage } from "./Pages/ChattingPage";
import { NotificationPage } from "./Pages/NotificationPage";
import { SettingsPage } from "./Pages/SettingsPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { EmailVerifiedPage } from "./Component/Home/HomeComponent/EmailVerifiedPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/s" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />}>
      <Route path="/notification" element={<NotificationPage />} > </Route>
      <Route path="/chatting" element={<ChattingPage />} >    </Route>
      <Route path="/settings" element={<SettingsPage />} >    </Route>
      </Route>
      <Route path="/emailVerified" element={<EmailVerifiedPage />} />
      <Route path="/*" element={<h1>Error Page</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
