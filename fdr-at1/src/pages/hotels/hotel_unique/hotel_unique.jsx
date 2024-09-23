import HotelDetails from '../../../components/hotel_details/hotel_details';

export default function UniqueHotel() {
    const uniqueHotelData = {
        hotelsIMGs: [
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OVIsJw6JvY-jaJfbGr_7dgHaE_%26pid%3DApi&f=1&ipt=21c5452e7bd8dc8c051eaa7dc2edba2bcaaa185c89ad067ff2463e99c086946c&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jFR68Kenm--rGFbw3vwqYwHaE8%26pid%3DApi&f=1&ipt=1d3df524c3b546ab8c79345eb5cab24afb2d02509398e7aa531a2b10e77ec100&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cw79JAQajDKa-7x996FkMAHaD3%26pid%3DApi&f=1&ipt=f89d332497233cf55d32f0253609d8524ab8775ed8a5459b5f05a214d9e15507&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mCYI14JgTnWTGJUHH4CkggHaEJ%26pid%3DApi&f=1&ipt=27544cbc600709849c6346a805aba2ef6010a371edc5ad7805d67aa5f5c447ec&ipo=images',
        ],
        city: 'São Paulo',
        state: 'São Paulo',
        price: 2000,
        name: 'Hotel Unique',
        desc: 'O Hotel Unique é um ícone de elegância e sofisticação. Localizado em uma das áreas mais vibrantes da cidade, o hotel combina design contemporâneo com conforto excepcional. Com uma arquitetura impressionante e interiores luxuosos, os hóspedes podem desfrutar de uma experiência inesquecível, que inclui acesso a um spa de classe mundial, restaurantes gourmet e uma vista deslumbrante da cidade.',
        items: ['Wi-Fi gratuito', 'Café da manhã incluído', 'Piscina', 'Spa'],
        services: [
            'Serviço de quarto 24 horas',
            'Concierge',
            'Transporte para o aeroporto',
            'Estacionamento gratuito',
        ],
    };

    return (
        <HotelDetails
            hotelsIMGs={uniqueHotelData.hotelsIMGs}
            name={uniqueHotelData.name}
            desc={uniqueHotelData.desc}
            items={uniqueHotelData.items}
            services={uniqueHotelData.services}
            state={uniqueHotelData.state}
            city={uniqueHotelData.city}
            price={uniqueHotelData.price}
        />
    );
}
