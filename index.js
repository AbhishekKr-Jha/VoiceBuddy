// import OpenAI from 'openai';
require('dotenv').config()
const OpenAI=require('openai')

const openAi=process.env.SECRET_KEY
console.log("---",process.env.SECRET_KEY)

const openai = new OpenAI({
  apiKey: openAi // This is the default and can be omitted
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'do you know goku of dragon ball z' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion.choices[0].message.content) 
  }
  
  main();
   

