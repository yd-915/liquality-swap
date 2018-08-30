import { connect } from 'react-redux'
import { actions } from '../../actions/wallets'
import WalletPanel from './WalletPanel'

const mapStateToProps = state => {
  return {
    assets: state.swap.assets,
    wallets: state.swap.wallets
  }
}

export default connect(
  mapStateToProps,
  {
    onToggleWalletConnect: actions.toggleWalletConnect,
    onChooseWallet: actions.chooseWallet,
    onWalletConnected: actions.connectWallet,
    onWalletDisconnected: actions.disconnectWallet
  }
)(WalletPanel)