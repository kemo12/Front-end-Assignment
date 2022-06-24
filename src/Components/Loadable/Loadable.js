import { Suspense } from 'react';
import './Loadable.css';
import Loading from './loading';
export const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};
