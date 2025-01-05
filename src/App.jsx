import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from './store/authStore';
import pagesData from './pages/pagesData';
import './App.css';

const router = createBrowserRouter(pagesData);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
