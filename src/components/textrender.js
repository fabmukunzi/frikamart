import React from 'react';

const TextRenderer =({text})=> {
    // Remove HTML tags using regular expressions
    console.log(text,'textttttt')
    const plainText = text?.replace(/<[^>]+>/g, '');

    return <div>{plainText}</div>;
}

export default TextRenderer;
