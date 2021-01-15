import React, {useState} from 'react';
import { addTech } from '../../actions/techActions';
import { connect } from 'react-redux';

const AddTech = ({ addTech }) => {
  const [tech, setTech] = useState({
    firstName: '', lastName: ''
  });

  const { firstName, lastName } = tech;

  const onChange = (n, v) =>{
    setTech({ ...tech, [n]: v});
  }

  const onSubmit = () => {
    addTech(tech);
  }

  return (
    <div className="modal" id="tech-list-add" style={{ width: "75%", padding: "20px", height: "auto"}}>
      <div className="row"><br />
        <h4 className="center">Add Technician</h4>
      </div>
      <div className="row">
        <div className="input-field">
          <input type="text" id="firstName" value={firstName} onChange={e => onChange('firstName', e.target.value)} />
          <label htmlFor="firstName">First Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field">
          <input type="text" id="lastName" value={lastName} onChange={e => onChange('lastName', e.target.value)} />
          <label htmlFor="lastName">Last Name</label>
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

export default connect(null, {
  addTech
})(AddTech);
