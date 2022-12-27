import React from 'react'
// import { Button } from 'semantic-ui-react';

export default function Child({childtoparent}) {
    return (
        <div>
            <button onClick={() => childtoparent()}>Click Child</button>
        </div>
    )
}