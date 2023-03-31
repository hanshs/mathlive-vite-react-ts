import * as React from 'react';
import Mathfield, { IMathfieldProps } from './Mathfield';

function App() {
  const [fields, setFields] = React.useState<IMathfieldProps[]>([
    { value: 'x+2' },
    { value: '' },
    { value: '' },
  ]);

  const onChange = (value: string, index: number) => {
    setFields(fields.map((f, i) => (i === index ? { ...f, value } : f)));
  };

  return (
    <>
      {fields.map((field, i) => (
        <Mathfield
          key={i}
          value={field.value}
          onChange={(value) => onChange(value, i)}
        />
      ))}
    </>
  );
}

export default App;
