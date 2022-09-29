import React from 'react';

const Breakpriod = (props) => {

    const { addBreakpriod } = props
    return (
        <div>
            <h2 className='p-3'>Break added</h2>
            <div className="row row-cols-5 bg-light d-flex justify-content-between">

                <button onClick={() => addBreakpriod(15)} className=' btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>15</h5>
                </button>

                <button onClick={() => addBreakpriod(25)} className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>25</h5>
                </button>

                <button onClick={() => addBreakpriod(35)} className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>35</h5>
                </button>

                <button onClick={() => addBreakpriod(45)} className='btn btn-light m-1 d-flex justify-content-center align-items-center'>
                    <h5>45</h5>
                </button>
            </div>

        </div>
    );
};

export default Breakpriod;