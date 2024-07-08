const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3001;

const configuration = new Configuration({
  apiKey: 'your-openai-api-key',
});
const openai = new OpenAIApi(configuration);

app.get('/generate', async (req, res) => {
  const prompt = 'Generate a string of emojis representing a popular movie and provide the movie name.';
  
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 50,
  });

  const text = response.data.choices[0].text.trim();
  const [emojiString, answer] = text.split(':');

  res.json({ emojiString: emojiString.trim(), answer: answer.trim() });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
