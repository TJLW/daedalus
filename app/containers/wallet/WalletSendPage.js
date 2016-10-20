// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import WalletLayout from '../../components/layouts/WalletLayout';
import WalletSendForm from '../../components/wallet/WalletSendForm';
import walletSendFormValidator from '../../validators/walletSendFormValidator';

@observer(['store'])
export default class WalletSendPage extends Component {
  render() {
    return (
      <WalletLayout>
        <WalletSendForm validator={walletSendFormValidator} />
      </WalletLayout>
    );
  }
}
