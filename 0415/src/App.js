import './App.css';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Form from './components/Form';

export default function App() {
  return (
    <div className="container">
      <h1>Basic useState examples</h1>

      <div className="box">
        <Counter />
      </div>

      <div className="box">
        <TextInput />
      </div>

      <div className="box">
        <Checkbox />
      </div>

      <div className="box">
        <Form />
      </div>
    </div>
  );
}