import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';

const propTypes = {
  logo: PropTypes.string.isRequired, // logo地址
  language: PropTypes.oneOf(['zh-cn', 'en-us']),
};

class Footer extends React.Component {

  render() {
    const { logo, language } = this.props;
    const dataSource = siteConfig[language];
    return (
      <footer className="footer-container">
        <div className="footer-body">
          <img src={getLink(logo)} />
          <div className="cols-container">
            <div className="col col-12">
              <h3>Head Office</h3>
              <p>70 Shenton Way, #21-11 Eon Shenton, Singapore 079118</p>
            </div>
            <div className="col col-6">
            <dl>
            <dt>{dataSource.resources.title}</dt>
            {
              dataSource.resources.list.map((d, i) => (
                <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
              ))
            }
            </dl>
            </div>
          </div>
          <div className="copyright"><span>{dataSource.copyright}</span></div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;
