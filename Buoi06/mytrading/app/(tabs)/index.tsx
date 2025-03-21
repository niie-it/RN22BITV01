import { StyleSheet, View, Text } from 'react-native';
import { StockButton } from '@/components/StockButton';
import { useEffect, useState } from 'react';
import { API, APIx, StockData} from '../api';

export default function HomeScreen() {
  const stockList = [
    {name: 'VIN GROUP', code: 'VNM'},
    {name: 'VIETJET', code: 'VJC'},
    {name: 'MASAN', code: 'MSN'},
    {name: 'VINAMILK', code: 'VNM'},
    {name: 'IBM', code: 'IBM'},
    {name: 'Carvan Co.', code: 'CVNA'},
    {name: 'NIKE Co', code: 'NIKE'},
  ];
  const [stock, setStock] = useState({
    name: 'VIN GROUP',
    code: 'VNM',
    index: 8700,
    change: '+1.2%'
  });
  
  const getStockData = (code: string) => {
    APIx(code)
    .then((data: StockData) => {
      if(data) {
        setStock({
          ...stock,
          index: data.stockIndex,
          change: data.stockChange
        });
      }
    });
  }

  useEffect(()=> {
    getStockData(stock.code);
  }, [stock.code]);

  const changeStock = (name: string, code: string) => {
    setStock({
      name: name,
      code: code,
      index: 0,
      change: '0%'
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stockName}>{stock.name}</Text>
        <Text style={styles.stockIndex}>
          {stock.code}
        </Text>
        <Text style={styles.stockChange}>
          {stock.index} ({stock.change})
        </Text>
      </View>
      <View style={styles.footer}>
      <StockButton name="VIN GROUP" code="VIN" onPress={() => changeStock(stock.name, stock.code)} />
      {stockList.map((stock, index) => (
        <StockButton code={stock.code} key={index} name={stock.name} onPress={() => changeStock(stock.name, stock.code)} />
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer:{
    flex: 1, backgroundColor: 'pink',
    flexDirection: 'row', flexWrap: 'wrap'
  },
  container:{flex: 1},
  header:{
    flex: 1, justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'yellow'
  },
  stockName:{ fontSize: 40},
  stockIndex:{ fontSize: 80},
  stockChange:{ fontSize: 40, color: 'red'},
});
