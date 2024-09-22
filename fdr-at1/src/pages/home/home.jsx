import HotelCard from '../../components/hotel_card/hotel_card';

export default function Home() {
  return (
    <div>
      <HotelCard
        city='boa vista'
        state='Roraima'
        imgURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F28%2Fce%2Ffa%2F12%2Fhotel-cadiz-bahia.jpg%3Fw%3D1400%26h%3D-1%26s%3D1&f=1&nofb=1&ipt=0e6b7c0da2632406d45e57b27aabf16b8bdae702febeb867113ac8a897fa98eb&ipo=images'
        desc='lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor'
        stars={2}
        price={20}
      />
    </div>
  );
}
