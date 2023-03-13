import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';
import emails from './assets/json/data.json'

const App = () => {
  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar />
      <Emaillist emails={emails} />
    </div>
  )
}

export default App;