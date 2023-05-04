import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();



const Blog = () => {
    return (
        <div className='bangraoud-color p-8'>
            <div className="App">

                <div ref={ref}>
                    <div className='flex flex-col gap-8'>
                        <div className='text-center text-4xl font-bold'>
                            <h1 className=''>Question Blog</h1>
                        </div>
                        <div className='my-card'>
                            <h1 className='text-xl font-semibold mb-4'>1.Differences between uncontrolled and controlled components.?</h1>
                            <p>In React, controlled components are form elements that are
                                managed by React and have their state controlled by the parent component.
                                In contrast, uncontrolled components manage their own state and don&apos;t
                                have their state controlled by the parent component. Controlled components can
                                provide more control and validation, while uncontrolled components can be simpler to use.
                            </p>
                        </div>
                        <div className='my-card'>
                            <h1 className='text-xl font-semibold mb-4'>2.How to validate React props using PropTypes?</h1>
                            <p>In React, you can use the built-in PropTypes library to validate the types of props
                                being passed to a component. To use it, define the expected prop types using
                                the propTypes property, set the isRequired flag for required props,
                                and React will throw a warning if a prop is of the wrong type.</p>
                        </div>
                        <div className='my-card'>
                            <h1 className='text-xl font-semibold mb-4'>3.Difference between nodejs and express js.?</h1>
                            <p>useRef is a hook in React that returns a mutable ref object that can
                                be used to store a value that persists across re-renders.
                                It&apos;s commonly used to reference DOM elements or store
                                mutable values in a functional component without causing
                                unnecessary re-renders.</p>
                        </div>
                        <div className='my-card'>
                            <h1 className='text-xl font-semibold mb-4'>1. What is useMemo?</h1>
                            <p>useMemo is a hook in React that allows you to memoize the
                                result of a function and only recompute the result when
                                the dependencies change. It can be used to optimize
                                performance by avoiding unnecessary re-computation
                                of expensive computations in functional components.</p>
                        </div>
                    </div>

                    <div className='text-center pt-12'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button className='my-btn' onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;