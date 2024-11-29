import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Layout from '../layout/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import AuthorPage from '../pages/AuthorPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';

function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
