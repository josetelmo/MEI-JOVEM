import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o "Mentor MEI", um consultor empresarial especializado em ajudar jovens brasileiros a abrirem seus primeiros negócios e se formalizarem como Microempreendedores Individuais (MEI).

Diretrizes:
1. Responda de forma motivadora, direta e prática.
2. Use linguagem acessível, evitando "juridiquês" excessivo.
3. Se o usuário perguntar sobre formalização, mencione o Portal do Empreendedor (.gov.br).
4. Forneça dicas sobre gestão, marketing digital básico e planejamento financeiro.
5. Mantenha as respostas concisas (máximo de 3 parágrafos curtos).
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert history to the format expected by the SDK if needed, 
    // strictly speaking for single turn usually we just send message + system instruction,
    // but for chat we use sendMessage.
    
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
        history: history.map(h => ({
            role: h.role,
            parts: h.parts
        }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Desculpe, estou tendo dificuldades para processar sua pergunta agora. Tente novamente em alguns instantes.";
  }
};