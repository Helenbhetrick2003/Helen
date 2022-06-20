import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routing API
const API = lazy(() => import('./API/api'));
// Routing Components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Footers = lazy(() => import('./components/Footers'));
const Login = lazy(() => import('./components/Login'));
const Category = lazy(() => import('./components/Category'));
// Routing Pages
const Catalog = lazy(() => import('./pages/Catalog'));
const Drees = lazy(() => import('./pages/Drees'));
const Hijab = lazy(() => import('./pages/Hijab'));
const App = () => (
<Router>
 <Suspense fallback={<div>Loading...</div>}>
 <Routes>
 <Route path="/" element={<Home />} />
 {/* Routing API */}
 <Route path="API" element={<API />} />
 {/* Routing Components */}
 <Route path="Navbar" element={<Navbar />} />
 <Route path="Home" element={<Home />} />
 <Route path="Footers" element={<Footers />} />
 <Route path="Login" element={<Login />} />
 <Route path="Category" element={<Category />} />
 {/* Routing Pages */}
 <Route path="Catalog" element={<Catalog />} />
 <Route path="Drees" element={<Drees />} />
 <Route path="Hijab" element={<Hijab />} />
 </Routes>
 </Suspense>
</Router>
);
export default App;