import React, { Component } from 'react';
import Crypton from './crypton.js';
class App extends Component {



    render () {
        const coinData = {
            name: 'Bitcoin',
            symbol: 'BTC',
            image: './src/components/btc.png'
          }
          console.log(coinData.image)
            return (
                <div>
                  <Crypton
                    name={coinData.name}
                    symbol={coinData.symbol}
                    logo={coinData.image}
                  />
                </div>
            
        );
    }
};

export default App;