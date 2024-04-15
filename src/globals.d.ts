// Styles

declare module '*.module.scss' {
  const value: { [key: string]: string };
  export default value;
}

// Assets

declare module '*.jpg' {
  const value: any;
  export default value;
}

// Variables

declare const _API_KEY_: string;
