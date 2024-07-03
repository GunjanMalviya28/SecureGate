
import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    
    if (username === 'Gunjan' && password === 'Gunjan@28') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import LoginPage from './LoginPage';
// import Dashboard from './Dashboard';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
 
//     fetch('/db.json')
//       .then(response => response.json())
//       .then(data => setUsers(data.users))
//       .catch(error => console.error('Error fetching user data:', error));
//   }, []);

//   const handleLogin = (username, password) => {
//     const user = users.find(user => user.username === username && user.password === password);

//     if (user) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <Dashboard onLogout={handleLogout} />
//       ) : (
//         <LoginPage onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;
  




// import React, { useState, useEffect } from 'react';
// import './App.css';
// import LoginPage from './LoginPage';
// import Dashboard from './Dashboard';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [users, setUsers] = useState([]);
  

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching user data:', error));
//   }, []);

//   const handleLogin = (username, password) => {
//     const user = users.find(user => user.username === username && user.email === password); 

//     if (user) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//       alert('Invalid credentials');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <Dashboard onLogout={handleLogout} />
//       ) : (
//         <LoginPage onLogin={handleLogin} />
//       )}
//     </div>
//   );
// }

// export default App;



