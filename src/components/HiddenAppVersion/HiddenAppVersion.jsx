import React from 'react';
import packageJson from '../../../package.json';

const { version } = packageJson;

const HiddenAppVersion = () => {
    const message = `${version}`;

    return (
        <div id='fix4-version-hidden' style={{ display: 'none' }}  >
            {message}
        </div>
    );
};

export default HiddenAppVersion;
