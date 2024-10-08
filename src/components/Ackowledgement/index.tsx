import React, { useState } from 'react';

import "./index.scss";
import { show } from '../Contributors/Contributors';
import { sponsor} from './data';

export default function Acknowledgement() {
  //前者是
  const [display, setDisplay] = useState(true);
  const [updated, setUpdated] = useState(false);
  sponsor.update().then((i) => { i == updated ? {} : setUpdated(i) });
  

  function Title(){
    return <div className="title">
      🎉 感谢每一个留下足迹的小伙伴!
    </div>;
  }
  
  function Closer(){
    return <div className="closer" onClick={()=>setDisplay(false)}>&times;</div>
  }
  
  function Content(){
    return <div className="content">
      <div className="title">{sponsor.title}</div>
      <div className="names">{sponsor.names.map((item, index) => <span key={index}>@{item}</span>)}</div>
      <div className="contributors" onClick={show}>鸣谢名单</div>
    </div>;
    
  }

  return display&&updated ? (
    <div className="acknowledgement">
      <div className="header">
        <Title/>
        <Closer/>
      </div>
      <Content/>
    </div>
  ):<></>;
}
