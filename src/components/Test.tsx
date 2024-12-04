import { useEffect, useState } from "react";

export default function Test () {
    useEffect(() => {
        // Initialization logic here (like fetching data or setting up subscriptions)
        console.log('Component initialized');
    
        // Cleanup logic (if needed)
        return () => {
          console.log('Component unmounted');
        };
      }, []);
      const [name,setName] = useState(true)
      const handleClick = () => {
        console.log("hello");
        setName(!name)    
      }
      return (
        <div>
          {name? <h1>True</h1>:<h1>False</h1>}
          <button onClick={handleClick}>click</button>
        </div>
      );
}