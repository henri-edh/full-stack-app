import Groq  from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});
async function main() {
    const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Explain the importance of low latency LLMs"
            }
        ],
        model: "mixtral-8x7b-32768"
    });
    console.log(completion.choices[0]?.message?.content || "");
}
main();
