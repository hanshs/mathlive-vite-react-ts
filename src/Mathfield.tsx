import * as React from 'react';
import * as Mathlive from 'mathlive';

type CustomElement<T> = Partial<T & React.DOMAttributes<T>>;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'math-field': CustomElement<Mathlive.MathfieldElementAttributes>;
		}
	}
}

export interface IMathfieldProps {
  value: string;
  options?: Partial<Mathlive.MathfieldOptions>;
  onChange?: (value: string) => void;
}


Mathlive.MathfieldElement.locale = 'et';
Mathlive.MathfieldElement.decimalSeparator = ',';
Mathlive.MathfieldElement.keypressSound = 'none';
Mathlive.MathfieldElement.plonkSound = 'none';

export default function Mathfield(props: IMathfieldProps) {
  const mathfield = React.useRef<Mathlive.MathfieldElement>();

  const onInput = () => props.onChange?.(mathfield.current?.getValue() || '');

	const init = (mf: Mathlive.MathfieldElement | null) => {
		if (mf) {
			mathfield.current = mf;
		}
	};

  return <math-field ref={init} onInput={onInput} />;
}
