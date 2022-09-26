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
            fontWeight: solved ? '100': '400'
        };
    }

    return (<div className="container">
            <ul className="row" style={wrapperStyle}>
                    {   
                        items.map((value, index) => { 
                            return (
                                <li style={itemStyle(value.solved)}>
                                        <a href={value.link} target="_self">
                                            {value.text}
                                        </a>
                                        {value.solved ? <>&nbsp;[&nbsp;&#10004;&nbsp;]</> : <></>}
                                        <p></p>
                                </li>
                            );
                        })
                    }
            </ul>
        </div>
    );
}