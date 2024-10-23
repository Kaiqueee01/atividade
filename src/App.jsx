import React from 'react';
import './App.css';

const App = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Iphone   13     ',
      preco: 'R$2800',
      image:
        'https://s2-techtudo.glbimg.com/5wpybLOrJU68cCfRuEllnei55c4=/0x0:695x438/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/z/w/Xfkim3RK6yPBrLaAVAiw/2016-12-08-1novos-macbook-pro-chegam-ao-brasil-com-preco-inicial-de-r-11499.jpg',
    },
    {
      id: 2,
      nome: 'Apple Watch Ultra 2 GPS  Cellular Caixa de titânio – 49 mm • Pulseira Oceano laranja Neutro em Carbono      ',
      preco: 'R$ 5000,00',
      image:
        'https://www.iplacecorp.com.br/ccstore/v1/images/?source=/file/v8635469563300742702/products/227183.00-apple-watch-ultra-2-gps-cellular-titanio-49mm-oceano-laranja-mreh3bz-a.jpg&height=475&width=475',
    },
    {
      id: 3,
      nome: 'AirPods Max - Prateado',
      preco: 'R$ 5499,00',
      image:
        'https://m.media-amazon.com/images/I/71qfaU-X+uL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 4,
      nome: 'Novo Tesla Roadster irá de 0 a 100 km/h em menos de 1 segundo, diz Musk',
      preco: 'R$ 100000,00',
      image:
        'https://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpg',
    },
    {
      id: 5,
      nome: 'iphone 16 pro max',
      preco: 'R$12000,00',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_918181-MLA78902600424_092024-O.webp',
    },
  ];

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <img
              src={produto.image}
              alt={produto.nome}
              style={{ width: '100px', height: 'auto' }}
            />
            {produto.nome} - {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
