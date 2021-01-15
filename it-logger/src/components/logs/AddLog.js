import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import { getTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLog = ({ tech: { techs }, addLog, getTechs }) => {
  const [log, setLog] = useState({
    msg: '', attention: false, tech: ''
  });

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, [])

  const { msg, attention, tech } = log;

  const onChange = (n, v) =>{
    setLog({ ...log, [n]: v});
  }

  const onSubmit = () => {
    if(msg === '' || tech === ''){
      M.toast({html: "Please enter all fields!"});
    }else{
      addLog({...log, date: new Date().toDateString()});
    }    
  }

  return (
    <div className="modal" id="add-log-model" style={{ width: "75%", padding: "20px", height: "auto"}}>
      <div className="row"><br />
        <h4 className="center">Add System Log</h4>
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
            <option value="" name="tech" disabled>Select Technician</option>
            {techs!==null && techs.map(tech => (
              <option key={tech.id} value={tech.firstName+" "+tech.lastName}>
                {tech.firstName+" "+tech.lastName}</option>))}
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
          <a href="#!" className="waves-effect blue waves-light btn modal-close" onClick={onSubmit}>Add</a>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  tech: state.tech
});
export default connect( mapStateToProps, {addLog, getTechs} )(AddLog);
