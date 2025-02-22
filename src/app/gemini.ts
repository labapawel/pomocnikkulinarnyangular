import { GoogleGenerativeAI } from "@google/generative-ai";

async function generateStory(apiToken:string, prompt:string): Promise<string> {
    try {
        // Input validation
        if (!apiToken) throw new Error('API token is required');
        if (!prompt) throw new Error('Prompt is required');

        // Initialize the API
        const genAI = new GoogleGenerativeAI(apiToken);
        const model = genAI.getGenerativeModel({ 
            model: 'gemini-2.0-flash'
        });

        // Create chat session
        const chat = model.startChat({
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 2048,
            },
            history: [],
        });

        // Send the actual prompt
        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        return response.text();

    } catch (error: any) {
        console.error('Error generating story:', error.message);
        throw error;
    }
}


export { generateStory };