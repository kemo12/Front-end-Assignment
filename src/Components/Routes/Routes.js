import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Loadable } from './../Loadable/Loadable';
const Search = Loadable(lazy(() => import('../../Pages/Search/Search')));
const Compare = Loadable(lazy(() => import('../../Pages/Compare/Compare')));
const Error = Loadable(lazy(() => import('../../Pages/Error/Error')));

const CreateRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Search />}></Route>
      <Route exact path="/compare" element={<Compare />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </Router>
);

export default CreateRoutes;
