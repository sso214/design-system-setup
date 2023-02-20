import React from 'react';
import { DisabledButton, FistButton, GhostButton, SecondButton, ThirdButton } from '../Button';
import { BaseSelectBox } from '../SelectBox';
import { css } from '@emotion/react';

const List = css`
  border: 3px orange dashed;
  width: 800px;
  margin: 300px auto;
  padding: 0 10px;

  ul > li {
    margin: 20px auto;
  }
`;

function Preview() {
  /* SelectBox Mock Data */
  const Items = ['List Item1', 'List Item2', 'List Item3', 'List Item4'];

  const handleOnChange = (value: string) => {
    console.log('select box value:', value);
  };

  return (
    <ul>
      {/* Fist-Button */}
      <li>
        <FistButton size='large' text='large' onClick={() => console.log('click!')} />
      </li>
      <li>
        <FistButton size='small' text='small' />
      </li>
      <li>
        <FistButton size='fixed' text='fixed' />
      </li>

      {/* Second-Button */}
      <li>
        <SecondButton size='large' text='large' />
      </li>
      <li>
        <SecondButton size='small' text='small' />
      </li>
      <li>
        <SecondButton size='fixed' text='fixed' />
      </li>

      {/* Third-Button */}
      <li>
        <ThirdButton size='large' text='large' />
      </li>
      <li>
        <ThirdButton size='small' text='small' />
      </li>
      <li>
        <ThirdButton size='fixed' text='fixed' />
      </li>

      {/* Ghost-Button */}
      <li>
        <GhostButton size='large' text='large' />
      </li>
      <li>
        <GhostButton size='small' text='small' />
      </li>
      <li>
        <GhostButton size='fixed' text='fixed' />
      </li>

      {/* Disabled-Button */}
      <li>
        <DisabledButton size='large' text='large' />
      </li>
      <li>
        <DisabledButton size='small' text='small' />
      </li>
      <li>
        <DisabledButton size='fixed' text='fixed' />
      </li>

      {/* <Input /> */}
      <BaseSelectBox defaultValue='Default Item' items={Items} onChange={handleOnChange} />
    </ul>
  );
}

export default Preview;