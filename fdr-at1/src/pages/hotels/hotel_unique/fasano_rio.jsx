import HotelDetails from '../../../components/hotel_details/hotel_details';

export default function FasanoRio() {
    const fasanoRioData = {
        hotelsIMGs: [
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oTyFiJ4ov819UljD2_pZQQHaEV%26pid%3DApi&f=1&ipt=9470adb29b2b89b8607fc0989fddf30e9f0b9d0a07115c17123101e14aa4611d&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Cw693uB3ez6Ewzat8AbStwHaEJ%26pid%3DApi&f=1&ipt=53d6fc68290a5a9ae61a0cecd7ffac181e9d377c61a91bac8f9af33ce5014fb6&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._cjZOe0cMmCXKaOb2KeY3wHaEF%26pid%3DApi&f=1&ipt=672cc356d9b6ba17c3e7d8e3ac319c8cc0aeabfe6a6fed9f95ac120106c88b35&ipo=images',
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.khh9J5jiaLJ2srxWAfUiygHaFj%26pid%3DApi&f=1&ipt=c4d1e8311a2fdd28920b889bc379c50a600a5a0fa77bac6e85cd841294c42bfe&ipo=images',
        ],
        price: 1500,
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        name: 'Fasano Rio',
        desc: 'O Fasano Rio é sinônimo de exclusividade e sofisticação. Localizado na Praia de Ipanema, o hotel é conhecido por seu design arrojado, assinado pelo renomado arquiteto Philippe Starck. O hotel oferece uma das melhores vistas do pôr do sol carioca e uma piscina de borda infinita que se destaca na paisagem urbana.',
        items: [
            'Wi-Fi gratuito',
            'Piscina de borda infinita',
            'Bar na cobertura',
            'Spa',
        ],
        services: [
            'Serviço de quarto 24 horas',
            'Concierge',
            'Transporte particular',
            'Estacionamento privado',
        ],
    };

    return (
        <HotelDetails
            hotelsIMGs={fasanoRioData.hotelsIMGs}
            name={fasanoRioData.name}
            desc={fasanoRioData.desc}
            items={fasanoRioData.items}
            services={fasanoRioData.services}
            state={fasanoRioData.state}
            city={fasanoRioData.city}
            price={fasanoRioData.price}
        />
    );
}
