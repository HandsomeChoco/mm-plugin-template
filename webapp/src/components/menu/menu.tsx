import React from 'react';

import {useStore} from 'react-redux';

import GoogleIcon from 'components/icon/google_icon';

function MenuItem() {
    const store = useStore();

    return (
        <li
            className='MenuItem MenuItem--with-icon'
            role='menuitem'
        >
            <a
                href='https://translate.google.com/?sl=en&tl=ko&text=translate%20something%20&op=translate'
                target='_blank'
                rel='noreferrer'
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
            </a>
        </li>
    );
}

export default MenuItem;