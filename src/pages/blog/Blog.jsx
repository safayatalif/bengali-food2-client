import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();



const Blog = () => {
    return (
        <div className='bangraoud-color p-8'>
            <div ref={ref}>
                <div className='flex flex-col gap-8'>
                    <div className='text-center text-4xl font-bold'>
                        <h1 className='text-violet-200'>Question Blog</h1>
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
                        <p>Node.js is a JavaScript runtime built on Chrome&apos;s V8 engine that allows
                            JavaScript to be run outside of the browser. Express.js is a web
                            framework built on top of Node.js that provides a set of features
                            and tools for building web applications, including routing, middleware,
                            and server-side rendering.</p>
                    </div>
                    <div className='my-card'>
                        <h1 className='text-xl font-semibold mb-4'>4.What is a custom hook, and why will you create a custom hook?</h1>
                        <p>In React, a custom hook is a reusable function that allows you to encapsulate and share logic between
                            multiple components. Custom hooks enable you to abstract complex logic and share it across your
                            application. They allow you to create your own API on top of the existing React hooks and
                            can help keep your code organized and more readable.</p>
                    </div>
                </div>

                <div className='text-center pt-12'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='my-btn' onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
            </div>

        </div>
    );
};

export default Blog;