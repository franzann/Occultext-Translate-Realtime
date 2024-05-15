# Welcome to Occultext Translate Realtime!

Hey there! So glad you've stumbled upon my little project.

## What is it??

You know when you're reading something online (probably a random not understandable words from Frenz) and you come across a word or phrase that's just... well, it's all Greek to you? That's where this extension come in. It's like your personal translator, turning mysterious occultext into something you can understand. And the best part? We do it all in real-time!

## How Does IIt Work? 

Magic! Joke. (O DIBA MAGIC GYUD SIYA?) Here's how it really works:

1. **background.js**: Think of this as our behind-the-scenes reader. It's always reading the page, ready to spring into action when it reads the secret code: "translateWord". When that happens, it sends a message to our super-secret, ultra-smart API, which sends back the translation. And just like that, the maestro delivers the translated word back to the reader.

2. **content.js**: This is our front-of-house star. It's always scanning the page, looking for words wrapped in curly braces. When it finds one, it sends it backstage to the maestro for translation. Once it gets the translated word, it swaps out the original word on the page. Voila!

## How to Use It?

Easy peasy! Just download the extension zip file in the release tab then extract it, then go to chrome extension then enable developer mode. After that, click load unpacked then select the extracted folder and let us do our thing. We'll automatically translate words wrapped in `{}` on every webpage you visit. And don't worry, we've got you covered when you scroll or when the webpage's content changes. It's like having a translator right there with you, whispering the translations in your ear!

## Permissions

We only ask for the permissions we absolutely need. We need access to the active tab and web requests to do our translation, and we need to run scripts in the background and on webpages.
