export const SelectTraveleslist = [
    {
        id: 1,
        title: 'Apenas eu',
        desc: 'Viagem solo com novas aventuras.',
        icon: '🧳',
        people: '1'
    },
    {
        id: 2,
        title: 'Em casal',
        desc: 'Momentos românticos a dois.',
        icon: '💘',
        people: '2'
    },
    {
        id: 3,
        title: 'Em família',
        desc: 'Diversão e risadas em família.',
        icon: '🏡',
        people: 'Entre 3 a 5 pessoas'
    },
    {
        id: 4,
        title: 'Com os amigos',
        desc: 'Uma aventura incrível com amigos!',
        icon: '🎉',
        people: 'Entre 5 a 10 pessoas'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Barato',
        desc: 'Economize ao máximo.',
        icon: '💸'
    },
    {
        id: 2,
        title: 'Moderado',
        desc: 'Conforto acessível.',
        icon: '💵'
    },
    {
        id: 3,
        title: 'Luxuoso',
        desc: 'Para aproveitar ao máximo.',
        icon: '💰'
    }
]


export const AI_PROMPT = 'Gere um plano de viagem para o local: {location}, por {totalDays} dias e {totalNight} noites para {traveler} com um orçamento de {budget}. Inclua detalhes do voo, como preço do voo (exemplo: barato: 200$ a 300$, moderado: 500.00 luxuoso: +1000$) com URL de reserva, lista de opções de hotéis com Nome do Hotel, endereço do hotel, preço do hotel, URL da imagem do hotel, coordenadas geográficas, classificação, descrições e locais para visitar nas proximidades com nome do local, detalhes do local, URL da imagem do local, coordenadas geográficas, preços das passagens, tempo de viagem para cada um dos locais por {totalDays} dias e {totalNight} noites, com o plano de cada dia, incluindo a melhor hora para visitar, em formato JSON.';





