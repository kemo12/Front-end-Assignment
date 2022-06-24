import { Suspense } from 'react';
import './Loadable.css';
export const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <div className="loaderContainer">
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
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
