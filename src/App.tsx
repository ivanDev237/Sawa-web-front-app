import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Error404 from "./pages/Error/404";
import dashboardAdminLinks from "./routes/AdminLinks";
import authLinks from "./routes/auth";
import partnersLinks from "./routes/partnerLinks";
import store from "./store/store";
function App() {
  const routes = createBrowserRouter([
    ...dashboardAdminLinks,
    ...partnersLinks,
    ...authLinks,

    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider storageKey="theme">
          <RouterProvider router={routes} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
