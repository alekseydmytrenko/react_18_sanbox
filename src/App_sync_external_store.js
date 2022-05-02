import {useEffect, useState, useSyncExternalStore} from 'react';

function AppSyncExternalStore() {
 /*// Old way
  const [width,setWidth] = useState(window.innerWidth);
  useEffect(()=> {
    const listener = ()=> setWidth(window.innerWidth)
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [])*/

  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    },
    () => window.innerWidth
    // () => -1,
  );

  return <p>Size: {width}</p>;
}

export default AppSyncExternalStore;
