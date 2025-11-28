import { GoogleGenAI } from "@google/genai";
import { PlaceResult, Place } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function searchNearbyPlaces(query: string, lat: number, lng: number): Promise<PlaceResult> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Find places matching this request: "${query}". Provide a helpful summary and list the best options.`,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: lat,
              longitude: lng
            }
          }
        }
      },
    });

    const text = response.text || "I found some places but couldn't get the details.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    const places: Place[] = groundingChunks.map((chunk: any) => {
        if (chunk.maps) {
            return {
                name: chunk.maps.title,
                googleMapsUri: chunk.maps.uri,
                placeId: chunk.maps.sourceId?.id
            };
        }
        return null;
    }).filter((p: any) => p !== null);

    return {
        content: text,
        places: places
    };

  } catch (error) {
    console.error("Gemini Search Error:", error);
    return {
        content: "Sorry, I encountered an error searching for places nearby.",
        places: []
    };
  }
}