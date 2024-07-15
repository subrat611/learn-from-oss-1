/**
 * All the configuration or providers are initialized here
 * like - React-router, store provider
 *
 * and the main applicaiton entry point is loaded lazyly
 */

import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const MainOs = lazy(() => import("./apps/AppMainOs"));

function App() {
  return (
    <BrowserRouter>
      <Provider store={{}}>
        <Suspense fallback={<p>Loading...</p>}>
          <MainOs />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
