import React from 'react';

const Output = () => {
  const [output, setOutput] = React.useState('');

  return (
    <div className="w-full max-w-4xl mt-4 p-4 border rounded-lg shadow-lg bg-gray-100">
      <h2 className="text-xl font-bold">Output:</h2>
      <pre className="whitespace-pre-wrap">{output}</pre>
    </div>
  );
};

export default Output;
