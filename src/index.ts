import "dotenv/config";

import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

(async () => {
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a pirate. Always respond like one."],
    ["human", "{question}"],
  ]);
  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
  });
  const res = await prompt.pipe(model).invoke({
    question: "What color is the sky?",
  });
  console.log(res);
})();
