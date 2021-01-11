import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLog = () => {
  const [log, setLog] = useState({
    msg: '', attention: false, tech: ''
  });
  const { msg, attention, tech } = log;

  const onChange = (n, v) =>{
    setLog({ ...log, [n]: v});
  }

  const onSubmit = () => {
    console.log(log);
    M.toast({html: "Submit"});
  }

  return (
    <div className="modal" id="edit-log-modal" style={{ width: "75%", padding: "20px", height: "auto"}}>
      <div className="row"><br />
        <h4 className="center">Update System Log</h4>
      </div>
      <div className="row">
        <div className="input-field">
          <i className="material-icons prefix">textsms</i>
          <input type="text" id="msg" value={msg} onChange={e => onChange('msg', e.target.value)} />
          <label htmlFor="msg">Log Message</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <select className="browser-default" name="tech" value={tech} onChange={e => onChange('tech', e.target.value)}>
            <option value="" name="tech" disabled selected>Select Technician</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field"> 
          <label>
            <input type="checkbox" name="attention" checked={attention} onChange={e => onChange('attention', !attention)} />
            <span>Need Attention</span>
          </label>
        </div>
      </div><br />
      <div className="row">
        <div className="input-field">
          <a className="waves-effect blue waves-light btn modal-close" onClick={onSubmit}>Add</a>
        </div>
      </div>
    </div>
  )
}

export default EditLog
