import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/**
 * Representing the Header Bar of the application
 */
  class HeaderBar extends Component {
    
/**
  * Describes the elements on the footer
   @return {String} HTML elements
*/
  render(){
    return(
      <div>
        <Card>
            <CardContent>
                <Typography component="h5" variant="h4" >
                    Healthy Living, Healthy Eating
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    WARNING: These foods could be hazardous to your health.
                </Typography>
            </CardContent>
        </Card>
    </div>
    );
  }
}

export default HeaderBar;
