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

    const itemStyle = {
        flexShrink: 1,
        flexBasis: '175px',
        marginTop: '0.75rem',
        marginBottom: '0.75rem',
        overflowWrap: 'break-word',
        flexWrap: 'wrap',
        whiteSpace: 'break-spaces'
    };

    return (
        <div className="container">
            <ul className="row" style={wrapperStyle}>
                    {   
                        items.map((value, index) => { 
                            return (
                                <li style={itemStyle}>
                                        <a href={value.link} target="_self">
                                            {value.text}
                                        </a>
                                        {value.solved ? ' (solved)': ''}
                                </li>
                            );
                        })
                    }
            </ul>
        </div>
    );
}