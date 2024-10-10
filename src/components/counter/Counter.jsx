// Eventos:

const Counter = () => {
  //   const name = ' Marcos';
  //   return <button onClick={() => printClick(name)}>+1</button>; // Con parametro
  return <button onClick={printClick}>+1</button>; // Sin parametro
};

export default Counter;

// const printClick = (name) => {
//   console.log('Click' + name);
// };

const printClick = (ev) => {
  console.log(ev);
};
