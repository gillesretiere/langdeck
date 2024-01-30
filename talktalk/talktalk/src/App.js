import './App.css';
import Conversation from './components/Conversation';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Conversation/>
      </Layout>
    </div>
  );
  }

export default App;
