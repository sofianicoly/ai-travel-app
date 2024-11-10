const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: `Gerar um plano de viagem para Las Vegas, NV, EUA, para 2 dias e 1 noite, com orçamento luxuoso. 
                            Detalhes: 
                            - Voo: preço, aeroporto de partida e chegada, URL de reserva
                            - Hotéis: nome, endereço, preço, imagem, coordenadas geográficas, avaliação, descrição
                            - Itinerário: sugestões de lugares a visitar nas proximidades, nome, detalhes, imagem, coordenadas geográficas, preços dos ingressos e tempo de viagem
                            - Data: de 2024-11-08 até 2024-11-09.
                            Resposta no formato JSON.`,
                },
            ],
        },
        {
            role: "model",
            parts: [
                {
                    text: `{
                        "flight": {
                            "departure_airport": "Seu aeroporto de partida",
                            "arrival_airport": "Aeroporto Internacional McCarran de Las Vegas (LAS)",
                            "flight_price": "1000$",
                            "booking_url": "https://www.google.com/flights"
                        },
                        "hotel": [
                            {
                                "name": "The Venetian Resort Las Vegas",
                                "address": "3355 Las Vegas Blvd S, Las Vegas, NV 89109",
                                "price": "$250 por noite",
                                "image_url": "https://www.venetian.com/images/hero/venetian-hero-1.jpg",
                                "geo_coordinates": "36.1009,-115.1732",
                                "rating": "4.5 estrelas",
                                "description": "Um resort luxuoso com quartos elegantes, restaurantes de classe mundial e um cassino."
                            }
                        ],
                        "itinerary": [
                            {
                                "placeName": "Las Vegas Strip",
                                "placeDetails": "A famosa avenida de Las Vegas, com hotéis e cassinos.",
                                "placeImageUrl": "https://www.example.com/vegas-strip.jpg",
                                "geoCoordinates": "36.1699,-115.1398",
                                "ticketPricing": "Gratuito",
                                "timeToVisit": "1-2 horas"
                            }
                        ]
                    }`,
                },
            ],
        },
    ],
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
