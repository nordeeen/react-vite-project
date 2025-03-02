import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './route';
import ProtectedRoute from './route/protectedRoute';

function App() {
  const renderRoute = (route: (typeof routes)[number], index: number) => {
    const Component = route.component;
    const element = route.isProtected ? (
      <ProtectedRoute>
        <Component />
      </ProtectedRoute>
    ) : (
      <Component />
    );

    return <Route key={index} path={route.path} element={element} />;
  };

  return (
    <BrowserRouter>
      <Routes>{routes.map(renderRoute)}</Routes>
    </BrowserRouter>
  );
}

export default App;