import AuthMiddleware from "../features/authMiddleware";
import LoginPage from "./login";
import HomePage from "./Welcome";

const pagesData = [
  {
    path: '/',
    element: (
      <AuthMiddleware>
        <HomePage />
      </AuthMiddleware>
    ),
  },
  {
    path: '/account/login',
    element: <LoginPage />,
  },
];

export default pagesData;
