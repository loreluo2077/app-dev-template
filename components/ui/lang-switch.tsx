import * as React from "react";

interface IAppProps {}

const LangSwitch: React.FunctionComponent<IAppProps> = (props) => {
  return (

      <details className='z-10'>
        <summary>lang</summary>
        <ul className='p-2 bg-base-100 rounded-t-none'>
          <li>
            <a href='/en'>en</a>
          </li>
          <li>
            <a href='/zh-CN'>zh</a>
          </li>
        </ul>
      </details>

  );
};

export default LangSwitch;
