import React, { useEffect} from 'react'
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';
import { connect } from 'react-redux';

const TechModal = ({ tech: {techs, loading}}) => {  

  if(loading || techs === null){
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Technicians</h4>
      </li>
      {!loading && techs.length === 0? <h4 className="center">No Technicians to show...</h4>:
        techs.map(tech => <TechItem key={tech.id} tech={tech} />) }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  tech: state.tech
});

export default connect(mapStateToProps, {})(TechModal);
