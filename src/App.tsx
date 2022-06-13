import * as React from 'react';
import { makeSharedVirtualKeyboard } from 'mathlive';
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

  React.useEffect(() => {
    makeSharedVirtualKeyboard({});
    console.log('invoked makeSharedVirtualKeyboard');
  }, []);

  return (
    <>
      {fields.map((field, i) => (
        <Mathfield
          key={i}
          value={field.value}
          options={{
            virtualKeyboardMode: 'onfocus',
          }}
          onChange={(value) => onChange(value, i)}
        />
      ))}
    </>
  );
}

export default App;
