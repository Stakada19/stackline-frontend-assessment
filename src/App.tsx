import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import { useAppDispatch } from './hooks/hooks';
import { fetchProduct } from './features/product/productSlice';
import styles from './App.module.css';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SalesChart from './components/SalesChart/SalesChart';
import SalesTable from './components/SalesTable/SalesTable';


const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <div className={styles.productDetailsSection}>
          <ProductDetails />
        </div>
        <div className={styles.main}>
          <div className={styles.chartSection}>
            <SalesChart />
          </div>
          <div className={styles.tableSection}>
            <SalesTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
