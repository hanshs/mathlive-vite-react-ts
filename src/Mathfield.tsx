import * as React from 'react';
import * as Mathlive from 'mathlive';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': React.HTMLAttributes<Mathlive.MathfieldElement> & {
        ref: React.RefObject<Mathlive.MathfieldElement>;
      };
    }
  }
}

export interface IMathfieldProps {
  value: string;
  options?: Partial<Mathlive.MathfieldOptions>;
  onChange?: (value: string) => void;
}

export default function Mathfield(props: IMathfieldProps) {
  const ref = React.useRef<Mathlive.MathfieldElement>(null);

  const onInput = () => props.onChange?.(ref.current?.getValue() || '');

  React.useEffect(() => {
    ref.current?.setOptions({
      locale: 'et',
      ...props.options,
    });
  }, [ref.current?.setOptions, props.options]);

  React.useEffect(() => {
    ref.current?.addEventListener('input', onInput);

    return () => {
      ref.current?.removeEventListener('input', onInput);
    };
  }, [ref.current?.addEventListener, props.onChange]);

  React.useEffect(() => {
    if (ref.current?.getValue() !== props.value) {
      ref.current?.setValue(props.value);
    }
  }, [props.value]);

  React.useEffect(() => {
    console.log('Mathfield mounts');
  }, []);

  const attributes: Partial<Mathlive.MathfieldElementAttributes> = {
    'keypress-sound': 'none',
    'plonk-sound': 'none',
  };

  return <math-field ref={ref} {...attributes} />;
}
