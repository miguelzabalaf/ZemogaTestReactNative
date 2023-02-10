export interface Screen {
  [key: string]: {
    component: (props: unknown) => JSX.Element;
    name: string;
  };
}
