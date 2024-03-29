import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import homeConfig from '../../../site_config/home';
import { getLink } from '../../../utils';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const headerLogo = '/img/imm_logo.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type="normal"
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle">
            <div className="slogan-container">
              <div className="product-name">
                <h2>{dataSource.brand.brandName}</h2>
              </div>
              <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
              <div className="button-area">
                {
                  dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link} target={b.target}>{b.text}</Button>)
                }
              </div>
            </div>
          </div>
        </section>
        {/* <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{dataSource.introduction.title}</h3>
              <p>{dataSource.introduction.desc}</p>
            </div>
            <img src={getLink(dataSource.introduction.img)} />
          </div>
        </section> */}
        <section className="feature-section">
          <h3>{dataSource.features.title}</h3>
          <ul className='list-obj-img'>
              {
                dataSource.features.listObj.imgs.map((img, i) => (
                  <li key={i}>
                    <img src={getLink(img)}/>
                  </li>
                ))
              }
          </ul>
          <ul className='list-obj-remark'>
            <li>
              <div>
                  <h4>{dataSource.features.listObj.title}</h4>
                  <p>{dataSource.features.listObj.content}</p>
                </div>
            </li>
          </ul>
          <ul>
            {
              dataSource.features.list1.map((feature, i) => (
                <Item feature={feature} key={i} />
              ))
            }
          </ul>
          <ul>
            {
              dataSource.features.list2.map((feature, i) => (
                  <Item feature={feature} key={i} />
              ))
            }
          </ul>
          <ul>
            {
              dataSource.features.list3.map((feature, i) => (
                  <Item feature={feature} key={i} />
              ))
            }
          </ul>
        </section>
        {/* <section className="start-section">
          <div className="start-body">
            <div className="left-part">
              <h3>{dataSource.start.title}</h3>
              <p>{dataSource.start.desc}</p>
              <a href={getLink(dataSource.start.button.link)} target={dataSource.start.button.link || '_self'}>{dataSource.start.button.text}</a>
            </div>
            <div className="right-part"><img src={getLink('/img/quick_start.png')} /></div>
          </div>
        </section> */}
        {/* <section className="users-section">
          <h3>{dataSource.users.title}</h3>
          <p>{dataSource.users.desc}</p>
          <div className="users">
            {
              dataSource.users.list.map((user, i) => (
                <img src={getLink(user)} key={i} />
              ))
            }
          </div>
        </section> */}
        <Footer logo="/img/imm_logo.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
