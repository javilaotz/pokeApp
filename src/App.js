import React from 'react';
import LoginComponent from './components/login/LoginComponent';

function App() {
  const render = isAuthenticated()? 'HOME' : <LoginComponent/>
  return render
}

const isAuthenticated = () => sessionStorage.getItem('user')? true : false

export default App;
