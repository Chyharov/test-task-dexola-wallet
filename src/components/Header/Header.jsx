import s from '../Header/Header.module.scss';


const Header = () => {
  return (
    <header className={s.header}>
        <div className={'container ' + s.header__container}>
            <h1>Logo</h1>
        </div>
        
    </header>
  );
};

export default Header;