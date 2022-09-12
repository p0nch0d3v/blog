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
        <div className={'language-' + lang}> 
            <div>
                <pre className={'prism-code language-' + lang}>
                    <code lang={lang}>
                        {content.split(/\r?\n/).map((v, i) => {
                            return (<span className={'token-line ' + i}>
                                        <span className="token">{v}</span>
                                        <br />
                                    </span>);
                        })}
                    </code>
                </pre>
                <a href={url} target="_blank">{urlDescription}</a>
                <br />
            </div>
        </div>
    );
};