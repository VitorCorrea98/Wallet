import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

function Wallet() {
  return (
    <main>
      <div className="flex flex-col items-center bg-white w-2/3 mx-auto">
        <Header />
        <WalletForm />
      </div>
      <Table />
    </main>
  );
}

export default Wallet;
