import React from 'react';
import './GreenMarathon.scss';
import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';
// import {getImageURL} from "../../core/imageResolver";
// import ButtonDefault from "../primitive/BPSsite/buttons/ButtonDefault/ButtonDefault";


const options = {
    items: 3,
    nav: true,
    // rewind: true,
    autoplay: true,
    dots: true,
    margin: 17
};

const questions = [
    {
        title: 'Что нужно сделать, что бы стать участником Зеленого марафона?',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cum deserunt ducimus eveniet laborum nobis possimus tempore? Cupiditate debitis illum inventore magni, modi nihil omnis reiciendis sit. Quo, vel!'
    },
    {
        title: 'Сколько стоит регистрационный взнос для участия в марафоне?',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cum deserunt ducimus eveniet laborum nobis possimus tempore? Cupiditate debitis illum inventore magni, modi nihil omnis reiciendis sit. Quo, vel!'
    },
    {
        title: 'Мне меньше 18 лет, но очень хочу бежать. Я могу принять участие в марафоне?',
        descr: 'Да, вы можете принять участие в забеге для детей от 10 до 13 лет. А если ваш возраст больше 14 лет, то вы можете участвовать, но вас обязательно должен сопровождать родитель или законный представитель, заполнивший регистрационную форму на сайте или в момент регистрации в месте проведения Мероприятия.\n' +
            'При сопровождении ребенка/детей представитель должен иметь документы, подтверждающие родство или сопровождение.\n' +
            'А именно:\n' +
            '- при степени родства – родитель: паспорт родителя, свидетельство о рождении ребенка/детей. Если\n' +
            '- при степени родства – усыновитель/опекун: документ (удостоверение) о назначении лица опекуном, попечителем, приемным родителем;\n' +
            '- представитель по доверенности: нотариально заверенная доверенность на сопровождение ребенка (детей). Обязательно должно быть прописано: кто доверяет (указываются паспортные данные родителей, усыновителей или опекуна), кого доверяют (приводится серия и номер свидетельства о рождении, место выдачи), кому доверяют (документальная информация об учителе, руководителе группы, родной бабушке и др.) и на какой срок. \n' +
            'Вышеперечисленные документы, подтверждающие степень родства, необходимо иметь при себе во время участия в Мероприятии.'
    },
    {
        title: 'Как будут награждать победителей марафона? ',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis cum deserunt ducimus eveniet laborum nobis possimus tempore? Cupiditate debitis illum inventore magni, modi nihil omnis reiciendis sit. Quo, vel!'
    }
];

const events = {
    onDragged: (event) => console.log('drag event',event),
    onChanged: (event) => console.log('drag event', event)
};

class GreenMarathon extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        target_date: new Date(2019, 5, 1).getTime(),
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
        step: 1,
        registerData: {
            name: '',
            lastName: '',
            patronymic: '',
            age: '',
            size_wear: '',
            gender: '',//gender true === man, false === female
            tel: '',
            email: '',
            isChild: false
        }
    };


    componentWillMount() {
        // this.getCountdown();
        // setInterval(() => { this.getCountdown(); }, 1000);

    }

    // getCountdown = () =>{
    //
    //     const target_date = new Date(2019, 5, 1).getTime();
    //
    //
    //
    //     let current_date = new Date().getTime();
    //     let seconds_left = (target_date - current_date) / 1000;
    //
    //     let days = this.pad( parseInt(seconds_left / 86400) );
    //     seconds_left = seconds_left % 86400;
    //
    //     let hours = this.pad( parseInt(seconds_left / 3600) );
    //     seconds_left = seconds_left % 3600;
    //
    //     let minutes = this.pad( parseInt(seconds_left / 60) );
    //     let seconds = this.pad( parseInt( seconds_left % 60 ) );
    //
    //     this.setState({
    //         days: days,
    //         hours: hours,
    //         minutes: minutes,
    //         seconds: seconds,
    //     })
    // };

    pad = (n) => {
        return (n < 10 ? '0' : '') + n;
    };

    renderStep1 = () => {
        return (
            <React.Fragment>
                <div className="registration_step">
                    <label>
                        <span>Фамилия</span>
                        <input type="text" onChange={this.setNewValue}
                               name="lastName"/>
                    </label>
                    <label>
                        <span>Имя</span>
                        <input type="text" onChange={this.setNewValue}
                               name="name"/>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type="text" onChange={this.setNewValue}
                               name="patronymic"/>
                    </label>
                    <label>
                        Возраст
                        <select name="age"
                                onChange={this.setNewValue}
                                defaultValue={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </label>

                    <label>
                        Ваш размер майки
                        <select name="size_wear"
                                onChange={this.setNewValue}
                                defaultValue={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </label>

                    <span>
                        Укажите Ваш пол:
                        <label>
                            <input type="radio"
                                   name="gender"
                                   onChange={this.setNewValue}
                                   value="male"
                                   checked={true}/>
                            Мужской
                        </label>
                        <label>
                            <input type="radio"
                                   name="gender"
                                   onChange={this.setNewValue} value="female"/>
                            Женский
                        </label>
                    </span>
                </div>
                <div>
                    <img src="./src/img/donate.png"
                         alt="img"
                         style={{width: '520px'}}/>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button className="green-btn"
                            onClick={this.changeStep2}>Продолжить регистрацию
                    </button>
                </div>

            </React.Fragment>
        )
    };

    renderStep2 = () => {
        return (
            <React.Fragment>
                <div className="registration_step">
                    <label>
                        <span>Номер телефона</span>
                        <input type="tel"
                               pattern={'^(\\+375|80)(29|25|44|33)(\\d{3})(\\d{2})(\\d{2})$'}
                               onBlur={this.setNewValue} name="tel"/>
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input type="email" onChange={this.setNewValue} name="email"/>
                    </label>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button className="default-btn"
                            onClick={this.changeStep1}>Назад
                    </button>
                    <button className="green-btn"
                            onClick={this.changeStep3}>Продолжить регистрацию
                    </button>
                </div>
            </React.Fragment>
        )
    };

    renderStep3 = () => {
        return (
            <React.Fragment>
                <div className="registration_step">
                    <label>
                        С Вами будут дети?
                        <select name="isChild"
                                onChange={this.setNewValueChild}
                                defaultValue={false}>
                            <option value={true}>Да</option>
                            <option value={false}>Нет</option>
                        </select>
                    </label>
                    <label>
                        Кем являетесь ребёнку?
                        <select name="age"
                                onChange={this.setNewValueChild}
                                defaultValue={1} disabled={!this.state.registerData.isChild}>
                            <option value="1">Родителем (законным предста...</option>
                            <option value="2">Опекун</option>
                        </select>
                    </label>
                </div>
                <h3>Данные ребёнка</h3>
                <div className="registration_step">
                    <label>
                        Фамилия
                        <input type="text"
                               onChange={this.setNewValueChild}
                               name="lastName"
                               disabled={!this.state.registerData.isChild}/>
                    </label>
                    <label>
                        Имя
                        <input type="text" onChange={this.setNewValueChild}
                               name="lastName" disabled={!this.state.registerData.isChild}/>
                    </label>
                    <label>
                        Отчество
                        <input type="text" onChange={this.setNewValueChild}
                               name="lastName" disabled={!this.state.registerData.isChild}/>
                    </label>
                    <label>
                        Возраст
                        <input type="text" onChange={this.setNewValueChild}
                               name="lastName" disabled={!this.state.registerData.isChild}/>
                    </label>
                    <span>
                        Укажите пол ребёнка:
                        <label>
                            <input type="radio"
                                   name="gender"
                                   onChange={this.setNewValueChild}
                                   value="male"
                                   checked={true} disabled={!this.state.registerData.isChild}/>
                            Мужской
                        </label>
                        <label>
                            <input type="radio"
                                   name="gender"
                                   onChange={this.setNewValueChild}
                                   value="female" disabled={!this.state.registerData.isChild}/>
                            Женский
                        </label>
                    </span>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button className="default-btn"
                            onClick={this.changeStep1}>Назад
                    </button>
                    <button className="green-btn"
                            onClick={this.changeStep3}>Продолжить регистрацию
                    </button>
                </div>
            </React.Fragment>
        )
    };

    changeStep1 = () => {
        this.setState({
            step: 1
        })
    };

    changeStep2 = () => {
        const {registerData: {name, lastName, patronymic}} = this.state;


        if (name !== '' && lastName !== '' && patronymic !== '') {
            this.setState({
                step: 2
            })
        }
        else {
            alert('ведите корректные данные');
        }
    };

    changeStep3 = () => {
        const {registerData: {tel, email}} = this.state;
        if (tel !== '' && email !== '') {
            this.setState({
                step: 3
            })
        }
        else {
            alert('ведите корректные данные');
        }
    };

    setNewValue = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'tel'){
            const pattern = new RegExp('^(\\+375|375|80)(29|25|44|33)(\\d{3})(\\d{2})(\\d{2})$');
            if(pattern.test(value)){
                this.setState({
                    registerData: {
                        ...this.state.registerData,
                        [name]: value
                    }
                })
            }
            else{
                alert('Некорректный телефонный номер')
            }
        }
        else{
            this.setState({
                registerData: {
                    ...this.state.registerData,
                    [name]: value
                }
            })
        }
    };

    setNewValueChild = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;



        if(name === 'isChild'){
            this.setState({
                registerData: {
                    ...this.state.registerData,
                    isChild: value==='true'?true:false
                }
            })
        }
    };

    renderQuestion = (title, descr) => {
        return(
            <React.Fragment>
                <p>{title}</p>
                <div className="descr">
                    {descr}
                </div>
            </React.Fragment>
        )
    };

    render() {

        return (
            <div className="GreenMarathon__wrap">
                {/*header*/}
                <div className="GreenMarathon__wrap--header">
                    <div className={'GM__container'}>
                        <div className="GM__header--content">
                            <div className="GM__header--left">
                                <div className="GM__BPS__Logo">
                                    <img src="./src/img/main_logo.png"
                                         alt="img"/>
                                </div>
                                <div className="GM__Logo">
                                    <img src="./src/img/Logo_bezBeg-2.png"
                                         alt="img"/>
                                </div>
                            </div>
                            <div className="GM__header--right">
                                <button className="orange-btn style1">Принять
                                    участие
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*menu*/}
                <div className="GreenMarathon__wrap--menu">
                    <div className={'GM__container'}>
                        <ul>
                            <li>
                                <a href="#">РЕГИСТРАЦИЯ</a>
                            </li>
                            <li>
                                <a href="#">О МАРАФОНЕ</a>
                            </li>
                            <li>
                                <a href="#">МЕСТО ПРОВЕДЕНИЯ</a>
                            </li>
                            <li>
                                <a href="#">ПОЖЕРТВОВАТЬ</a>
                            </li>
                            <li>
                                <a href="#">ВОПРОСЫ И ОТВЕТЫ</a>
                            </li>
                        </ul>

                    </div>
                </div>
                {/*main*/}
                <div className="GreenMarathon__wrap--main"
                     style={{backgroundImage: `url(./src/img/GM-header-bg4К.jpg)`}}>
                    <div className={'GM__container'}>
                        <div className="GM_main_wrap">
                            <div className="guy_animate">
                                <img src="./src/img/GM-guy-header.png"
                                     alt="img"/>
                            </div>
                            <div className="GM__main-content">
                                <h2>#БежимСоСмыслом</h2>
                                <h1>Зеленый марафон</h1>
                                <h3>1 июня 2019, город Брест</h3>
                                <div className="GM__main--timer">
                                    <p>До старта осталось:</p>
                                    <div className="GM__main--timer--wrap">
                                        <div className="GM__time_item">
                                            <span>{this.state.days}</span>
                                            <mark>дней</mark>
                                        </div>
                                        <div className="GM__time_item">
                                            <span>{this.state.hours}</span>
                                            <mark>часов</mark>
                                        </div>
                                        <div className="GM__time_item">
                                            <span>{this.state.minutes}</span>
                                            <mark>минут</mark>
                                        </div>
                                        <div className="GM__time_item">
                                            <span>{this.state.seconds}</span>
                                            <mark>секунд</mark>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    textAlign: 'center',
                                    marginTop: '48px'
                                }}>
                                    <button
                                        className="orange-btn style2">Принять
                                        участие
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*registration*/}
                <div className="GM__registration">
                    <div className={'GM__container'}>
                        <h3>Регистрация</h3>
                        <p className="reg-steps">ШАГ {this.state.step} из 6</p>
                        <div className="personal_wrap">
                            <p className="personal_info">
                                {this.state.step === 1 && 'Персональная информация'}
                                {this.state.step === 2 && 'Контактная информация'}
                                {this.state.step === 3 && 'Дополнительные данные'}
                                {this.state.step === 4 && 'Правовое соглашение'}
                                {this.state.step === 5 && 'Регистрационные данные'}

                            </p>
                            <p className="required_fields">Все поля обязательны
                                для заполнения</p>
                        </div>
                        {this.state.step === 1 && this.renderStep1()}
                        {this.state.step === 2 && this.renderStep2()}
                        {this.state.step === 3 && this.renderStep3()}
                    </div>
                </div>
                {/*about marathon*/}
                <div className="about__marathon">
                    <div className={'GM__container'}>
                        <h3>О МАРАФОНЕ</h3>
                        <p>Первый «Зеленый Марафон» Сбербанка прошел в 2012 году. За это время более 750 тысяч человек стали его участниками. Основная дистанция забега – 4,2 км – это одна десятая марафона. Но в этом году, впервые в истории мероприятия, в Москве участники выйдут на старт 42-километровой трассы. </p>
                        <p>БПС-Сбербанк проведет «Зеленый Марафон 2019» 1 июня в городе Бресте, в Международный День защиты детей. «Зеленый Марафон» решает важные социальные задачи. Девиз проекта – #БежимСоСмыслом.  Участие в марафоне абсолютно бесплатное, однако каждый может сделать добрый поступок и пожертвовать любую сумму на один из благотворительных счетов (ссылка).</p>
                        <p>В марафоне примут участие жители и гости города Бреста от 18 до 55 лет, дистанция 4.2 км. Впервые, в забеге смогут принять участие дети  от 7 до 13 лет в дистанции 420 м, а также пройдет «Забег в подгузника» для малышей от 1 до 2 лет, дистанция 5 м. Жители и гости Бреста в возрасте 14 – 18 лет смогут принять участие в забеге в присутствии родителей. Для всех дистанций регистрация обязательна.</p>
                        <div style={{textAlign: 'center',marginTop: '50px'}}>
                            <button className="orange-btn style1">Принять участие</button>
                        </div>
                    </div>
                </div>
                {/*gallery*/}
                <div className="gallery__marathon">
                    <div className={'GM__container'}>
                        <h3>ГАЛЕРЕЯ МАРАФОНА</h3>
                        <OwlCarousel ref="car" options={options} events={events}>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                            <div><img src="./src/img/gallery1.png" alt="imgs"/></div>
                        </OwlCarousel>

                        <div className="gallery__marathon--video">
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/bl8CigKmo_M"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                            <div style={{textAlign: 'center',marginTop: '71px'}}>
                                <button className="orange-btn style1">Принять участие</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*questions*/}
                <div className="questions__marathon">
                    <div className={'GM__container'}>
                        <h3>ВОПРОСЫ И ОТВЕТЫ</h3>
                        <div className="questions__marathon--wrap">
                            {questions.map((item, index) => {
                                return this.renderQuestion(item.title, item.descr)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GreenMarathon;