import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Main = lazy(() => import(/* webpackChunkName: "Cats" */ "pages/Main"));
const Router = () => {
  return (
    <>
      <Suspense fallback={<p>Loading ....</p>}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
