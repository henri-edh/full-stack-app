import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
dotenv.config();

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
});
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are BadgerAi, a helpful assistant for FlightScope"],
  ["human", "{input}"],
]);
const chain = prompt.pipe(model);
const response = await chain.invoke({
  input: "Hello",
});
console.log("response", response);
