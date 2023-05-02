export const smartbotCode1 = `
// App.js

// API call
useEffect(() => {
    if(userMessage !== '') {
        // get the last 10 messages as context (chat history)
        let contextMessages;
        
        if(messages.length > 10) {
            contextMessages = messages.slice(-10);
        } else {
            contextMessages = messages;
        };
        
        const requestMessages = [
            ...contextMessages,
            {
                role: "user",
                content: userMessage
            }
        ];
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': \`Bearer \${API_KEY}\`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: requestMessages,
                max_tokens: 1000
            })
        };
        
        setLoading(true);
        
        fetch('https://api.openai.com/v1/chat/completions', options)
        .then(response => response.json())
        .then(data => {
            setMessages(prevMessages => {
                const responseMessage = data.choices[0].message;
                const newMessages = [
                    ...prevMessages,
                    {
                        role: responseMessage.role,
                        content: responseMessage.content,
                    }
                ];
                
                // storing message in async storage
                storeMessages(newMessages);
                
                // setting the messages state
                return newMessages;
            });
            
            // stopping loading animation
            setLoading(false);
        })
        .catch(error => console.error(error));
    }
}, [userMessage]);
`;