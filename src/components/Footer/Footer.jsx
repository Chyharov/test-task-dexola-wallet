import { BsGithub } from 'react-icons/bs';
import s from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={'container ' + s.footer__container}>
                <a className={s.fotterlink} href="https://github.com/Chyharov/test-task-dexola-wallet" target="_blank" rel="noopener noreferrer"><BsGithub/> Repositories</a>
            </div>
        </footer>
      
  );
};

export default Footer;