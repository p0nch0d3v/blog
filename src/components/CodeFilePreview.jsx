import React, { useEffect, useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function CodeFilePreview({ url, lang, urlDescription }) {
    const [content, set_content] = useState('fetching file ...');
    
    useEffect(async () => {
        set_content(await getContent());
    }, []);

    const getContent = async () => {
        const response = await fetch(url);
        const content = await response.text();
        return content;
    };

    return (
        <div>
            <SyntaxHighlighter 
                language={lang} 
                style={dracula} 
                showLineNumbers={true}
                wrapLines={true}>
                {content}
            </SyntaxHighlighter>
            <a href={url} target="_blank">{urlDescription}</a>
            <br />
        </div>
        
    );
};