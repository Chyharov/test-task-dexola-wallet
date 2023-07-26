import СurrentWallet from '../СurrentWallet/СurrentWallet'
import s from '../Header/Header.module.scss';


const Header = () => {
  return (
    <header className={s.header}>
        <div className={'container ' + s.header__container}>
            <h1>Logo</h1>
            <СurrentWallet />
        </div>
    </header>
  );
};

export default Header;