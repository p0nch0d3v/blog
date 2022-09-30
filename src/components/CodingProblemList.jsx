import React from "react";

export default function CodingProblemList({ items }) {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        justifyItems: 'center'
    };

    function itemStyle(solved) {
        return {
            flexShrink: 1,
            flexBasis: '175px',
            marginTop: '0.75rem',
            marginBottom: '0.75rem',
            overflowWrap: 'break-word',
            flexWrap: 'wrap',
            whiteSpace: 'break-spaces',
        };
    }

    function linkStyle(solved) {
        return {
            color: 'var(--ifm-link-color)',
            textDecoration: 'var(--ifm-link-decoration)',
            background: 'none',
            border: '1px solid transparent',
            cursor: 'pointer',
            fontSize: 'unset',
            fontWeight: solved ? '100' : '400',
            fontStyle: solved ? 'italic' : 'unset'
        }
    };

    return (<div className="container">
            <ul className="row" style={wrapperStyle}>
                    {items.map((value, index) => { 
                        const newLocation = (process && process?.env ? process.env.SITE_URL : window.location.origin) + value.link;
                        return (
                            <li style={itemStyle(value.solved)}>
                                <button style={linkStyle(value.solved)} onClick={() => { 
                                    console.debug(newLocation); 
                                    location.href = newLocation; 
                                }}>{value.text}</button>
                                {value.solved ? <>&nbsp;[&nbsp;&#10004;&nbsp;]</> : <></>}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}