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
                    text: "Generate Travel Plan for Location : Las Vegas, NV, USA, for 9 Days and 8 Night for Apenas eu with a Luxuoso budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 9 days and 8 night with each day plan with best time to visit in JSON format.",
                },
            ],
        },
        {
            role: "model",
            parts: [
                {
                    text: "```json\n{\n  \"flight\": {\n    \"departure_airport\": \"Your Departure Airport\",\n    \"arrival_airport\": \"Las Vegas McCarran International Airport (LAS)\",\n    \"flight_price\": \"Please enter a desired budget for flights\",\n    \"booking_url\": \"https://www.google.com/flights\" // Example URL, replace with your preferred booking site\n  },\n  \"hotel\": [\n    {\n      \"name\": \"The Venetian Resort Las Vegas\",\n      \"address\": \"3355 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"Starting from $250 per night\",\n      \"image_url\": \"https://www.venetian.com/content/dam/venetian/images/home/hero/venetian-hero-1.jpg\",\n      \"geo_coordinates\": \"36.1009,-115.1732\",\n      \"rating\": \"4.5 stars\",\n      \"description\": \"A luxurious resort with elegant rooms, world-class dining, a replica of Venice with canals and gondolas, and a casino.\"\n    },\n    // additional hotel and itinerary data here\n  ]\n}\n```",
                },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
