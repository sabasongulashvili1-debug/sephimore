declare namespace JSX {
  interface IntrinsicElements {
    "sitemanifest-widget": React.DetailedHTMLProps
      React.HTMLAttributes<HTMLElement> & {
        domain?: string;
        layout?: string;
        theme?: string;
        scale?: string;
        shadow?: string;
        border?: string;
        "nav-bg"?: string;
        "nav-color"?: string;
        "nav-size"?: string;
        align?: string;
      },
      HTMLElement
    >;
  }
}