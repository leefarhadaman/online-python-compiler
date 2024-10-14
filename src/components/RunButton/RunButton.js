import React from 'react';
import { runCode } from '../../api';

const RunButton = ({ code, setOutput }) => {
  const handleRun = async () => {
    const result = await runCode(code); // Pass code to runCode function
    setOutput(result.output); // Update output
  };

  return (
    <button
      onClick={handleRun}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
    >
      Run Code
    </button>
  );
};

export default RunButton;
