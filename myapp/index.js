
// OpenAI URL and Headers
const openAiHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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'
}

async function creatEmbedding(textToEmbed) {
    let response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: openAiHeaders,
        body: JSON.stringify({
            'model': 'text-embedding-ada-002',
            'input': textToEmbed
        }),
    });
    if (response.ok){
        response.json().then(data => {
            console.log(data);
            return data;
        });
    }
}

creatEmbedding("Hello World")