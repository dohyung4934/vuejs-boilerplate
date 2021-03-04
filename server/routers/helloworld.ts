interface Message {
    text: string
}

export function helloWorld(): Message[] {
    const messages: Message[] = [
        {
            text: 'Hello'
        },
        {
            text: 'World'
        }
    ]
    return messages
}
