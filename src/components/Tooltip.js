
import { useState } from 'react';
const Tooltip = ({ text, children }) => {
    let [show,setshow] = useState(false)
    let showtooltip = ()=>{
      setshow(true)
    }
    let hidetooltip = ()=>{
        setshow(false)
    }
  return (
    <div className="tooltip" onMouseOver={showtooltip} onMouseLeave={hidetooltip} style={{width:'500px',height:'100px',position:'relative',border:'1px',borderBlockColor:'black',padding:'30px'}}>
      {children}
     {show &&  <span className="tooltiptext" style={{position:'absolute',top:'0px',left:'30px',backgroundColor:'coral'}}>{text}</span>}
    </div>
  );
};

export default Tooltip;
