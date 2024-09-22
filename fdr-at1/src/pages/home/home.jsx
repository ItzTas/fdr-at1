import HotelCard from '../../components/hotel_card/hotel_card';

export default function Home() {
    return (
        <div>
            <HotelCard
                stars={3}
                name='Bella Vista'
                imgURL='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.viajeselcorteingles.es%2Fimagenes%2Fhoteles%2Fcuba%2Fvaradero%2Fh10001514%2F5.jpg&f=1&nofb=1&ipt=2ba22a1c7c7ce431f223cee3d12bce56c35a0c67a90254b702e608dcd779eabf&ipo=images'
                desc='A 5-star hotel in the heart of Varadero.'
            />
        </div>
    );
}
