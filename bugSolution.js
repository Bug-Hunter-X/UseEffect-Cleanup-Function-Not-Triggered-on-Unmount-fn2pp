```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Add a check to see if the component is mounted
    let isCurrent = true;
    const cleanup = () => {
      console.log('Component unmounted');
      isCurrent = false; // Update flag when cleanup is called
    };
    if (isMounted) {
       console.log('Component mounted');
    }
    return cleanup; // Return the cleanup function
  }, [isMounted]);

  const handleUnmount = () => {
    setIsMounted(false);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button> 
    </div>
  );
}

export default MyComponent;
```