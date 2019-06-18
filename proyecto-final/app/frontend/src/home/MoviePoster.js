import React from 'react';

export default function (props) {
    const {url} = props;
    return (
        <div className='Poster'>
            <img src={`${url}`} />
        </div>
    );
}
