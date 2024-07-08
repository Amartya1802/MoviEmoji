const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const { Configuration, OpenAIApi } = require('openai');
dotenv.config();
const app = express();
app.use(cors());
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const port = 3001;

// const configuration = new Configuration({
//   apiKey: 'your-openai-api-key',
// });
// const openai = new OpenAIApi(configuration);

app.get('/generate', async (req, res) => {
    try {
    // Request to OpenAI API
        const prompt = 'Generate a string of emojis representing a popular movie and provide the movie name. It must be in the format of (e.g.) `🎥🤖:Robot Movie`. No other text is required, just the requested output in the form mentioned';
        
        const result = await model.generateContent(prompt);
        const response = await result.response    
        console.log(response.text());
        const text = response.text();
        const [emojiString, answer] = text.split(':');

        res.json({ emojiString: emojiString.trim(), answer: answer.trim() });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating emoji string');
    }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
