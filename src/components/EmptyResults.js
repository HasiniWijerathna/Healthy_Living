import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../styles/master.css';

/**
 *  Representing the logic of no result found page
 */
class EmptyResults extends Component {

  /**
   * Describes the food card elements on the no result found
   * @return {String} HTML elements
   */
  render() {
    /**
     * Fetched image URL of the card image
     */
     const imageURL = "https://cdn.dribbble.com/users/463734/screenshots/2016792/attachments/356197/empty_result.png";


    return (
      <div className = "emptyCardContent" >
          <Card >
              <CardMedia
                  component = "img"
                  alt = "Contemplative Reptile"
                  height = "520"
                  image={imageURL}
                  title = "Contemplative Reptile" />
       </Card>
      </div>
    );
  }
}

export default EmptyResults;
