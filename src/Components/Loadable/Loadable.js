import { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import './Loadable.css';
export const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      }
    >
      <Navbar />
      <Component {...props} />
    </Suspense>
  );
};
