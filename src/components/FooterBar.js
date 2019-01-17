import React, {Component} from 'react';
import { APP_STRING_CONST } from '../constants';

  /**
   * Representing the Footer Bar of the application
   */
   class FooterBar extends Component {

  /**
   * Describes the elements on the footer
     @return {String} HTML elements
   */
    render(){
      return(
        <div className="footer">
          {APP_STRING_CONST.FOOTER_BAR_TITLE}
        </div>
      );
    }
  }

export default FooterBar;
