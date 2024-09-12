const isTokenValid = () => {
    const token = localStorage.getItem('authToken');
    const timestamp = parseInt(localStorage.getItem('tokenTimestamp'), 10);
    const now = new Date().getTime();
  
    
    const validityDuration = 30 * 24 * 60 * 60 * 1000;
  
    if (token && now - timestamp < validityDuration) {
      return true;
    } else {
     
      localStorage.removeItem('authToken');
      localStorage.removeItem('tokenTimestamp');
      return false;
    }
  };

  export default isTokenValid;
  