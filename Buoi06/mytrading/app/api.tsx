let rootURL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=WXQOQDBTDAA7KIC5&symbol=';
export type StockData = {
    stockIndex: number;
    stockChange: string;
};
export const API = (code: string): Promise<StockData> => {
  return new Promise((resolve, reject) => {
    let url = `${rootURL}${code}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data['Global Quote']) {
        resolve({
          stockIndex: data['Global Quote']['05. price'],
          stockChange: data['Global Quote']['10. change percent']
        });
      } else {
        console.log('No data');
        reject(null);
      }
    })
    .catch(err => {
      console.log(err);
      reject(null);
    });
  });
};