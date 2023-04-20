import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openAI = new OpeanAIApi(configuration);

export async function talkWithChatGPT(prompt) {
  const completion = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: user, content: prompt }],
  });

  return completion.data.choices[0].text;
}
