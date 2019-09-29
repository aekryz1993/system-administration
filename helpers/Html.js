// @flow

import React from 'react';
import type { Node } from 'react';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
// import stylefull from '../client/auth/login.css'

type Props = {
  styles: Array<string>,
  cssHash: {},
  js: Array<string>,
  component: Node,
  state: {}
}

const Html = (props: Props) => {
  const { styles, cssHash, js, component, state } = props;
  const head = Helmet.renderStatic();
  const htmlAttrs = head.htmlAttributes.toComponent();

  const rootStyle = {
    height: '100%',
  };

  const htmlStyle = {
    lineHeight: 1.15,
    height: '100%',
    boxSizing: 'border-box'
  };

  const bodyStyle = {
    lineHeight: 1.15,
    height: '100%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    minWidth: '320px',
    boxSizing: 'inherit'
  };

  return (
    <html lang="en" {...htmlAttrs} style={htmlStyle} >
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        {/*<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />*/}
        {styles.map(name => (
          <link rel="stylesheet" href={`/static/${name}`} key={name} />
        ))}
      </head>
      <body style={bodyStyle}>
        <div id="root" style={rootStyle} dangerouslySetInnerHTML={{ __html: component }} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.__data=${serialize(state)};`
          }}
          charSet="UTF-8"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.__CSS_CHUNKS__=${serialize(cssHash)};`
          }}
          charSet="UTF-8"
        />
        {js.map(name => (
          <script 
            type="text/javascript"
            src={`/static/${name}`}
            key={name}
            charSet="UTF-8"
          />
        ))}
      </body>
    </html>
  );
};

export default Html;