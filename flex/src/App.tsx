import React from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import Button,{ ButtonType, ButtonSize } from './components/Button';

function App() {
  return (
    <div>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello</h1>
        <h2>Hello</h2>zzs 
        <h3>Hello</h3>
        <h4>Hello</h4>
        <h5>Hello</h5>
        <Button>jfsljf</Button>
        <Button disabled>jfsljf</Button>
        <Button btnType={ButtonType.Primary}>Hello</Button>
        <Button btnType={ButtonType.Danger}>Hello</Button>
        <Button btnType={ButtonType.Link} href='https://www.baidu.com\'>Hello</Button>
        <Button size={ButtonSize.Large}>Hello</Button>
        <Button size={ButtonSize.Small}>Hello</Button>
      </header>
    </div>
  );
}

export default App;
