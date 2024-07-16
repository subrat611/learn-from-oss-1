import { lazy, Suspense } from "react";

const MyApp = lazy(() => import("./MyApp"));

const DefaultApp = () => {
  // here the context, localization are added

  // <Localization>
  // <AppContextProvider>
  <Suspense fallback={<p>Loading...</p>}>
    <MyApp />
  </Suspense>;
  // </AppContextProvider>
  // </Localization>
};

const AppMainOs = () => {
  // user credential checks
  // const { isLoggedIn } = useSelector(Auth);

  /**
   * if (!isLoggedIn)
   * return (
   * <Localization>
   *    <AuthRouter />
   * </Localization>
   * );
   */

  return <DefaultApp />;
};

export default AppMainOs;
