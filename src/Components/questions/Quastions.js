import React from 'react';

const Quastions = () => {
    return (
        <div>
            <div className='mt-48'>
              <p className='text-center text-4xl font-semibold'>Questions and Answers</p>
              <ol className='list-decimal'>
                <li>
                  <p>How does react work?</p>
                  <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>
                </li>
              </ol>
            </div>
        </div>
    );
};

export default Quastions;