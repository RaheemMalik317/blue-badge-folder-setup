import React from 'react';

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or whate you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
                </dl>
                <hr/>
            </div>
        </div>
    )
}

export default JSXRules