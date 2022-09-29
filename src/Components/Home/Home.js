import React, { useEffect, useState } from 'react';
import Breakpriod from '../Breakpriod/Breakpriod';
import Content from '../Content/Content';
import Materials from '../Materials/Materials';
import Profile from '../Profile/Profile';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {



    const [contents, setContents] = useState([]);

    const [watch, setWatch] = useState([0]);

    const x = localStorage.getItem('breakpriod')
    const [breaks, setBreaks] = useState([x]);

    useEffect(() => {
        fetch('database.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])

    const addToShow = (time) => {
        const newWatchTime = parseInt(watch) + time;
        setWatch(newWatchTime);
    }

    const addBreakpriod = (value) => {

        const newBreakTime = value;
        setBreaks(newBreakTime)
        localStorage.setItem("breakpriod", newBreakTime);
    }

    const notify = () => toast("Yahooo, movie ended..");

    return (
        <div>
            <section className='container text-center'>
                <div className="row p-5">
                    <div className=" col-lg-9 col-md-12">
                        <h4 className='text-start mb-5'>please ,select your favourit movie.</h4>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                contents.map(content => <Content
                                    key={content.id}
                                    content={content}
                                    addToShow={addToShow}
                                ></Content>)
                            }
                        </div>
                    </div>
                    <div className=" col-lg-3 pt-5">

                        <Profile></Profile>
                        <Breakpriod
                            addBreakpriod={addBreakpriod}

                        ></Breakpriod>
                        <Materials
                            watch={watch}
                            breaks={breaks}
                        ></Materials>
                        <div>

                            <button onClick={notify} className='btn btn-primary'>Acitivity added</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <h1 className='p-2'>Questions and Answers</h1>
                <div className="row row-cols-1 row cols-md-2 row-cols-lg-3 g-4 p-2 m-3">

                    <div className="col card">
                        <div className="card-body">
                            <h3 className="card-title">Describe How does react Work?</h3>
                            <p className="card-text text-start">The DOM tree is simply a JavaScript version of the virtual DOM that React implements. Therefore, whenever it wishes to read from or write to the DOM, it will use a virtual representation of it. The virtual DOM will then seek out the most efficient method for updating the browser's DOM. Simple objects called React elements are easier to create than DOM elements in browsers. React DOM modifies the DOM to correspond with the React elements. Given how rapid JavaScript is, it seems sense to include a DOM tree to allow for quick manipulation. Although Node.js can be used on the server, React was intended to be used in the browser.</p>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="card-body">
                            <h3 className="card-title">Difference between Props vs State,explain the answer.</h3>
                            <p className="card-text">
                                <h2>Props:</h2>
                                <ol className='text-start'>
                                    <li>The Data is passed from one component to another.</li>
                                    <li>It is Immutable (cannot be modified).</li>
                                    <li>Props can be used with state and functional components.</li>

                                </ol>
                                <h2>State:</h2>
                                <ol className='text-start'>
                                    <li>The Data is passed within the component only.</li>
                                    <li>It is Mutable ( can be modified).</li>
                                    <li>State can be used only with the state components/class component.</li>
                                    <li>State is both read and write.</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="card-body">
                            <h3 className="card-title">UseEffect Api is used for other purposes than loading data?</h3>
                            <p className="card-text"><h2>The purposes of useEffect:</h2>
                                <p className='text-start'>
                                    we can perform side effects in our components with the useEffect Hook. Timers, data fetching, and direct DOM updates are a few instances of side effects. Two arguments are accepted by useEffect. Optional: The second parameter.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;