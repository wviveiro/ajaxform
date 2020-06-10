import React from 'react';
import ajaxform from './lib';
import './playgrond.scss';

function Playground() {

  const onClick = () => {
    ajaxform({
      url: 'https://foo.bar',
      data: {
        foo: 'bar'
      }
    })
  }

  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>Here you can play with you component before publishing it.</p>
      <button onClick={onClick}>Test AjaxForm</button>
    </div>
  );
}

export default Playground;
