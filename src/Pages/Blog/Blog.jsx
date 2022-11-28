import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 px-[8%] gap-10 max-w-[1440px] mx-auto my-20'>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">
                        What are the different ways to manage a state in a React application?
                    </h2>
                    <p className="mt-4 dark:text-gray-400">
                        What is the state management in React?
                        Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.

                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Omar Ikbal</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">May 20, 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">How does prototypical inheritance work?</h2>
                    <p className="mt-4 dark:text-gray-400">
                        How does the prototype chain work?
                        The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. Note: The property of an object that points to its prototype is not called prototype

                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Omar Faruk</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">
                        What is a unit test? Why should we write unit tests?
                    </h2>
                    <p className="mt-4 dark:text-gray-400">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">
                        React vs. Angular vs. Vue?
                    </h2>
                    <p className="mt-4 dark:text-gray-400">
                        One of the main reasons for the popularity of React is that it works very efficiently with the DOM. Vue also uses the virtual DOM, but compared to React, Vue has better performance and stability. According to this data, Vue and React's performance difference is subtle since it is only a few milliseconds
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Mamun Islam</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 20th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blog;