import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/themeContext";
import Error404 from "./pages/Error/404";
import dashboardAdminLinks from "./routes/AdminLinks";
import authLinks from "./routes/auth";
import partnersLinks from "./routes/partnerLinks";
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
    <div className="App font-poppins">
      <ThemeProvider storageKey="theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </div>
  );
}

export default App
