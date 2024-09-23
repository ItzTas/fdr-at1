import HotelDetails from '../../../components/hotel_details/hotel_details';

export default function CopacabanaPalace() {
  const copacabanaPalaceData = {
    hotelsIMGs: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fY4Sj6flB1rlWzFdpN0zpgHaE8%26pid%3DApi&f=1&ipt=7a0b5bd688a852ec74b0ddf50af5523c79768645b59347ba4d68cdc2bee8e97d&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BOED1ZF3V0zAVDLrYZDvJAHaE8%26pid%3DApi&f=1&ipt=d0632a048ed179872d894b3854cf27f905153f93256af490d1d200fe9172e8eb&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ONfCbu-nwvxMO4f401Y4TwHaD4%26pid%3DApi&f=1&ipt=7ca256f1d60ad2c7c0b712f3193893cf611458935ffebe26b5b38ae3a5d828bd&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pXBV6nvkHe8Wp5ZD9oM-XwHaEJ%26pid%3DApi&f=1&ipt=f2acf8f93a6c4cec90442b720abe188d4a618bf07fee86865301a6f528dc8bef&ipo=images',
    ],
    name: 'Copacabana Palace',
    desc: 'O Copacabana Palace é um dos hotéis mais renomados do Brasil. Situado em frente à famosa praia de Copacabana, o hotel oferece uma vista magnífica do mar, combinada com uma atmosfera luxuosa e um serviço impecável. Os hóspedes podem aproveitar as várias opções de restaurantes de alta gastronomia e um spa exclusivo, tudo em um ambiente de pura elegância.',
    items: [
      'Wi-Fi gratuito',
      'Restaurante Gourmet',
      'Piscina com vista',
      'Spa',
    ],
    services: [
      'Serviço de quarto 24 horas',
      'Concierge',
      'Transporte VIP',
      'Estacionamento com manobrista',
    ],
  };

  return (
    <HotelDetails
      hotelsIMGs={copacabanaPalaceData.hotelsIMGs}
      name={copacabanaPalaceData.name}
      desc={copacabanaPalaceData.desc}
      items={copacabanaPalaceData.items}
      services={copacabanaPalaceData.services}
    />
  );
}
