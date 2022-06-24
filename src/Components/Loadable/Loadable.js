import { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';

export const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div> Loading ....</div>}>
      <Navbar />
      <Component {...props} />
    </Suspense>
  );
};
