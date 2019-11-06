import React from 'react';
import {MuayThaiSpiritServiceConsumer} from '../MuayThaiSpiritContext';

const withMuayThaiSpiritService = () => (Wrapped) => {
    return (props) => {
        return (
            <MuayThaiSpiritServiceConsumer>
                {
                    (muayThaiSpiritService) => {
                        return (
                            <Wrapped {...props} muayThaiSpiritService={muayThaiSpiritService}/>
                        );
                    }
                }
            </MuayThaiSpiritServiceConsumer>
        );
    };
};

export default withMuayThaiSpiritService;