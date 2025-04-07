import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'


function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
    <WalletModalProvider>
    <WalletMultiButton></WalletMultiButton>
    <WalletDisconnectButton></WalletDisconnectButton>
    <div>
      Heya
    </div>
    <TokenLaunchpad></TokenLaunchpad>
    </WalletModalProvider>
    </WalletProvider>
    </ConnectionProvider>
  )
}

export default App

