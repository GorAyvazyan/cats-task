import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Chat = lazy(() => import(/* webpackChunkName: "Cats" */ "pages/Main"));
const Router = () => {
  return (
    <>
      <Suspense fallback={<p>Loading ....</p>}>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Router;
