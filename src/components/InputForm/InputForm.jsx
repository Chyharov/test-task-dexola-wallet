import s from './InputForm.module.scss';


const InputForm = () => {
  return (
    <section className={s.sectionInputForm} >
      <div className={'container ' + s.inputForm}>

        <form action="" className={s.form}>

          <input type="text" className={s.input} />
      
          <input type="text" className={s.input} />
      
          <button className={s.inputBtn}>Check</button>

        </form>
      
      </div>
    </section>
  );
};

export default InputForm;