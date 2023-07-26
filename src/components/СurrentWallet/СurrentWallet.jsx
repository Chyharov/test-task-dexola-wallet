import s from './СurrentWallet.module.scss';


const СurrentWallet = () => {
  return (
      <div className={s.currentAmountWalletContainer}>
          <p className={s.currentAmountWallet}>0</p>
      </div>
  );
};

export default СurrentWallet;