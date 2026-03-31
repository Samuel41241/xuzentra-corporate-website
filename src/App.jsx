import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { supabase } from "./lib/supabase";

import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import IndustriesPage from "./pages/IndustriesPage";
import Contact from "./pages/Contact";
import Investor from "./pages/Investor";
import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";
import AdminLogin from "./pages/AdminLogin";
import AdminInquiries from "./pages/AdminInquiries";
import AdminJobs from "./pages/AdminJobs";
import AdminJobEditor from "./pages/AdminJobEditor";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, sessionData) => {
      setSession(sessionData ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="products" element={<Products />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="investor" element={<Investor />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/:slug" element={<CareerDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin/login" element={<AdminLogin />} />

        <Route
          path="admin/inquiries"
          element={
            <ProtectedRoute session={session}>
              <AdminInquiries />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/jobs"
          element={
            <ProtectedRoute session={session}>
              <AdminJobs />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/jobs/new"
          element={
            <ProtectedRoute session={session}>
              <AdminJobEditor />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin/jobs/:id/edit"
          element={
            <ProtectedRoute session={session}>
              <AdminJobEditor />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;