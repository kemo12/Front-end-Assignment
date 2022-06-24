import './App.css';
import { CreateRoutes } from './Components';
import DataProvider from './Contexts/dataContext';
function App() {
  return (
    <>
      <DataProvider>
        <CreateRoutes />
      </DataProvider>
    </>
  );
}

export default App;
