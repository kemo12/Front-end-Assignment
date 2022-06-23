import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Compare, Erorr, Search } from '../../Pages';

const CreateRoutes = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Search />}></Route>
      <Route exact path="/compare" element={<Compare />}></Route>
      <Route path="*" element={<Erorr />}></Route>
    </Routes>
  </Router>
);

export default CreateRoutes;
