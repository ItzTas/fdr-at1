import HotelList from '../../components/hotel_list/hotel_list';

export default function Home() {
  const initialHotels = [
    {
      name: 'Hotel A',
      stars: 5,
      desc: 'This is a hotel that will be used as the default for all customers',
      city: 'São Paulo',
      state: 'SP',
      price: 500,
      imgURL:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.voltaaomundo.pt%2Ffiles%2F2016%2F06%2Fconrad.jpg&f=1&nofb=1&ipt=ebfb3ffd57c9215019eef29393706a3bf3347822e5ffde7d6f5698813c62e873&ipo=images',
      hotelURL: '/hotels/1',
    },
    {
      name: 'Hotel B',
      stars: 4,
      desc: 'This is a hotel that will be used as the default for all customers',
      city: 'Rio de Janeiro',
      state: 'RJ',
      price: 400,
      imgURL:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sCyl_SbxWmK61J4Ab7gbcwHaEK%26pid%3DApi&f=1&ipt=5cfb11831c0a2909bb155dde5b64a131bcb497982a904b40d8ddc10337748f5d&ipo=images',
      hotelURL: '/hotels/2',
    },
    {
      name: 'Hotel C',
      stars: 3,
      desc: 'An affordable hotel with comfortable amenities.',
      city: 'Curitiba',
      state: 'PR',
      price: 300,
      imgURL:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.voltaaomundo.pt%2Ffiles%2F2016%2F06%2Fconrad.jpg&f=1&nofb=1&ipt=ebfb3ffd57c9215019eef29393706a3bf3347822e5ffde7d6f5698813c62e873&ipo=images',
      hotelURL: '/hotels/3',
    },
  ];

  return (
    <div>
      <HotelList hotels={initialHotels} margin='20px' />
    </div>
  );
}
