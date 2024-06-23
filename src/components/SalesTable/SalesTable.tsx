import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import styles from './SalesTable.module.css';

const headers = [
  { key: 'weekEnding', label: 'Week Ending' },
  { key: 'retailSales', label: 'Retail Sales' },
  { key: 'wholesaleSales', label: 'Wholesale Sales' },
  { key: 'unitsSold', label: 'Units Sold' },
  { key: 'retailerMargin', label: 'Retailer Margin' }
];

const SalesTable: React.FC = () => {
  const sales = useAppSelector((state => state.product.product?.sales || []));
  const [sortedSales, setSortedSales] = useState(sales);
  const [sortKeyDir, setSortKeyDir] = useState<{ key: string; dir: 'asc' | 'desc' }>({ key: 'weekEnding', dir: 'asc' });

  useEffect(() => {
    setSortedSales(sales);
  }, [sales]);

  const sortSalesData = (key: string) => {
    let dir: 'asc' | 'desc' = 'asc';
    if (sortKeyDir.key === key && sortKeyDir.dir === 'asc') {
      dir = 'desc';
    }

    const sortedArray = [...sales].sort((a, b) => {
      const aValue = a[key as keyof typeof a];
      const bValue = b[key as keyof typeof b];

      if (aValue < bValue) {
        return dir === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return dir === 'asc' ? 1 : -1;
      }
      return 0;
    });

    setSortKeyDir({ key, dir });
    setSortedSales(sortedArray);
  };

  return (
    <div className={styles.tableSection}>
      <table>
        <thead>
          {headers.map((header) => (
            <th key={header.key} onClick={() => sortSalesData(header.key)}>
              {header.label} &#8597;
            </th>
          ))}
        </thead>
        <tbody>
          { sortedSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales}   </td>
              <td>${sale.wholesaleSales}</td>
              <td>{sale.unitsSold}     </td>
              <td>${sale.retailerMargin}</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}


export default SalesTable;
