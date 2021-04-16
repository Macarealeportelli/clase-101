import "./Tarjeta.css";

const Tarjeta = ({ titulo, condicion, precio, imagen }) => {
  return (
    <article>
      <div className='imagen'><img src={imagen} /></div>
      <h4>{titulo}</h4>
     
    </article>
  );
};

export default Tarjeta;