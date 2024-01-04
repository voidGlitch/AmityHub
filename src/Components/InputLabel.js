import React from 'react'

const styles = {
 padding: 20,
 gap:8
};


function InputLabel(props) {
  return (
    <div style={styles}>
   {props.label && <label>{props.label}</label>}
    <input type="text" {...props}/>
    </div>
  )
}

export default InputLabel