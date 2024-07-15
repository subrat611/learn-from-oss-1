> **⚠️ NOTE: The Order In Which I Have Written Explains How I Read The Codebase.**

## App.jsx

### Code

```jsx
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
```

### Explanation

- React's `lazy` and `Suspense` features to load the `MainOs` component asynchronously.

- The `lazy` function allows you to dynamically import a component. **This means the component is not included in the initial JavaScript bundle and will only be loaded when it is needed.**

- `Suspense` is a component that wraps lazy-loaded components. **It allows you to specify a fallback UI (like a loading spinner or placeholder) that will be displayed while the lazy component is being loaded.**

### Benefits of lazy and Suspense

**1. Improved Performance**

- Reduced Initial Load Time: By splitting your code and loading components only when needed, you can reduce the initial load time of your application.

- Smaller Initial Bundle Size: Lazy loading helps in creating smaller initial JavaScript bundles, which means quicker load times and less bandwidth usage.

**2. Better User Experience**

- Smooth Loading States: With Suspense, you can show loading indicators or placeholders, providing a smoother user experience while waiting for components to load.

- Perceived Performance: Users perceive applications as faster when they see immediate feedback, such as loading spinners, rather than waiting with no indication of progress.

**3. Efficient Resource Usage**

- On-Demand Loading: Resources are loaded only when needed, which means that users don't have to download code for features they may not use immediately, or at all, in their session.

### How lazy and Suspense Work Together

> Lazy:
>
> When you use lazy to import a component, it returns a promise that resolves to the component. This allows React to handle it as an asynchronous operation.
>
> Suspense:
>
> When React encounters a lazy-loaded component wrapped in Suspense, it shows the fallback UI (like <PageLoader /> or <p>Loading...</p>) until the promise returned by lazy resolves. Once resolved, it replaces the fallback UI with the loaded component.

### Example Scenario

> Imagine an application with multiple routes and some of them are rarely accessed.
>
> Instead of loading all components at once, you can load each route’s component only when the user navigates to it.
>
> This significantly reduces the initial load time and enhances performance.

### Advanced Usage Tips

- **Error Boundaries:** Combine Suspense with error boundaries to handle loading errors gracefully.

- **React Router Integration:** Use React.lazy with React Router to lazy load route components, making routing efficient.

- **Chunking Strategies:** Implement chunking strategies for more efficient code splitting, such as grouping related components together.
