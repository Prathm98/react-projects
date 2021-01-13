import React, {useState, useEffect} from 'react'
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';

const TechModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  }

  if(loading){
    return <Preloader />;
  }

  return (
    <div className="modal" tabIndex="0" id="tech-list-modal" style={{ width: "75%", padding: "20px", height: "auto"}}>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Technicians</h4>
        </li>
        {!loading && techs.length === 0? <h4 className="center">No Technicians to show...</h4>:
          techs.map(tech => <TechItem key={tech.id} tech={tech} />) }
      </ul>
    </div>
  )
}

export default TechModal
