// src/components/Editor/Editor.js
import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Import the CodeMirror CSS
import 'codemirror/mode/python/python'; // Import Python mode

const Editor = () => {
  const [code, setCode] = React.useState('# Write your Python code here');

  return (
    <div className="w-full max-w-4xl mb-4">
      <CodeMirror
        value={code}
        options={{
          mode: 'python',  // Set the mode to Python
          lineNumbers: true,
          theme: 'default', // You can change this to any theme you prefer
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value); // Update the code state when user types
        }}
        className="border rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Editor;
