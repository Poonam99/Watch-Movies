import React from 'react';

const Materials = (props) => {


    const { watch, breaks } = props
    return (
        <div className='p-3'>
            <h4 className='p-2'>watch time</h4>
            <div className='d-flex justify-content-between'>

                <h6>Total Watch Time: {watch}m</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Break priod: {breaks}m</h6>
            </div>
        </div>
    );
};

export default Materials;