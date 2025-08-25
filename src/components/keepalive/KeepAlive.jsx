import { useEffect } from 'react';

const KeepAlive = () => {
  useEffect(() => {
    let isMounted = true;

    const pingServer = async () => {
      if (!isMounted) return;
      
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch('https://frontline-fury-backend.onrender.com/ping', {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok && isMounted) {
          console.log('✅ Server kept alive -', new Date().toLocaleTimeString());
        }
      } catch (error) {
        if (isMounted && error.name !== 'AbortError') {
          console.log('❌ Ping failed:', error.message);
        }
      }
    };

    // First ping
    pingServer();
    
    // Interval for subsequent pings
    const intervalId = setInterval(pingServer, 4 * 60 * 1000);
    
    // Cleanup
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default KeepAlive;