import React from 'react';

import GoogleIcon from 'components/icon/google_icon';

function MenuItem() {
    return (
        <li
            className='MenuItem MenuItem--with-icon'
            role='menuitem'
        >
            <button className='style--none'>
                <span className='MenuItem__primary-text'>
                    <span className='icon'>
                        <span>
                            <GoogleIcon/>
                        </span>
                    </span>
                </span>
                {'구글에서 번역'}
            </button>
        </li>
    );
}

export default MenuItem;