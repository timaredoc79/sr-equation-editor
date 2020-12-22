declare module 'sr-equation-editor' {
  import * as React from 'react';
  export function addStyles(): void

  export interface KeypadProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
    onChange?: (val: string) => void
    latex?: string
  }
  export default class Keypad extends React.PureComponent<KeypadProps, any> {
    new(props: KeypadProps, context?: any)
  }
}