import { useId } from 'react';

const Comp1 = () => {
  const id = useId();
  return <div>Comp1 id({id})</div>;
};

const Comp2 = () => {
  const id = useId();
  return (
    <>
      <div>Comp2 id({id})</div>
      <label htmlFor={`${id}-1`}>Label 1</label>
      <div>
        <input id={`${id}-1`} type="text" />
      </div>
      <label htmlFor={`${id}-2`}>Label 2</label>
      <div>
        <input id={`${id}-2`} type="text" />
      </div>
    </>
  );
};

const Comp3 = () => {
  const id = useId();
  return (
    <>
      <div>Comp3 id({id})</div>
      <div aria-labelledby={`${id}-a ${id}-b ${id}-c`}>I am Comp3</div>
    </>
  );
};

function AppUseId() {
  return (
    <>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </>
  );
}

export default AppUseId;
