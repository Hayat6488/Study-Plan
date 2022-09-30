import React from 'react';

const Quastions = () => {
    return (
        <div>
            <div className='mt-48 mb-4'>
              <p className='text-center text-4xl font-semibold'>Questions and Answers</p>
              <ol className='list-disc ml-12'>
                <li>
                  <p className='text-2xl font-semibold'>How does react work?</p>
                  <p className='text-xl'>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>
                </li>
                <li>
                  <p className='text-2xl font-semibold'>Difference between props and state:</p>
                  <p>
                  <table class="border-collapse border border-slate-400 ... text-xl">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">PROPS</th>
      <th class="border border-slate-300 ...">STATE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">The Data is passed from one component to another.</td>
      <td class="border border-slate-300 ...">The Data is passed within the component only.</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">It is Immutable (cannot be modified).</td>
      <td class="border border-slate-300 ...">It is Mutable ( can be modified).</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Props can be used with state and functional components.</td>
      <td class="border border-slate-300 ...">State can be used only with the state components/class component (Before 16.0).</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Props are read-only.</td>
      <td class="border border-slate-300 ...">State is both read and write</td>
    </tr>
  </tbody>
</table>
                  </p>
                </li>
                <li>
                  <p  className='text-2xl font-semibold'>Uses of useEffect:</p>
                  <p  className='text-xl'>By using this Hook, we tell React that our component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
                </li>
              </ol>
            </div>
        </div>
    );
};

export default Quastions;