import React from 'react';
import Prism from 'prismjs';
import languages from 'prism-languages';

// get rid of the { }
export const getRidOf = str => {
  if (/\{[^}]+\}/.test(str)) {
    return {
      string: str.replace(str.match(/\{[^}]+\}/)[0], ''),
      number: str
        .match(/\{[^}]+\}/)[0]
        .replace('{', '')
        .replace('}', ''),
    };
  }
};

export const CodeBlock = ({children, className}) => {
  const l = className;

  const lng = languages[l.replace('language-', '')];
  let styled = '';

  if (lng) {
    styled = Prism.highlight(children, lng);
  } else {
    styled = children;
  }

  return (
    <code
      style={{fontSize: 15}}
      className={l}
      dangerouslySetInnerHTML={{__html: styled}}
    />
  );
};
