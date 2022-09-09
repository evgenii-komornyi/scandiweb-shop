import React, { Component } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

class Spinner extends Component {
    render() {
        return (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        );
    }
}

export default Spinner;
