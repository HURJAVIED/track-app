
import './App.css';
import { Header } from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TranscationHistory} from './components/TranscationHistory'
import {AddTransaction} from './components/AddTransaction'
function App() {
  return (
    <div >

      <Header />
      <div className="container">
        
      <Balance />
      <AccountSummary />
      <TranscationHistory />
      <AddTransaction />
      </div>
     
    </div>
  );
}

export default App;
