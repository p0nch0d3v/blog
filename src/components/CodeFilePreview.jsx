import React, { useEffect, useState } from "react";

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
        <>
            <pre style={{'maxHeight': '25vh', 'overflow': 'scroll'}}>
                <code lang={lang}>
                    {content}
                </code>
            </pre>
            <a href={url} target="_blank">{urlDescription}</a>
            <br />
        </>
    );
};