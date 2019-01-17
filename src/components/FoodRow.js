import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import '../styles/master.css';

/**
 *  Representing the logic of presenting existing junk food items 
 */
class FoodRow extends Component {

  /**
   * Describes the food card elements on the Home page
   * @return {String} HTML elements
   */
  render() {
    /**
     * Fetched image URL of the current junk food item
     */
    const imageURL = this.props.food.image;

    /**
     * Formatted Card and Chip labals
     */
    const cardHeadersubTitile = this.props.food.ingredients ? ` ${this.props.food.ingredients} Included!` : `No Ingredients found`
    const cardHeaderTitile = `${this.props.food.name} - ${this.props.food.calories.totalCalories} Total Calories`
    const chipFatLabal = ` Fat : ${this.props.food.calories.Fat}`
    const chipSodiumLabal = ` Sodium : ${this.props.food.calories.Sodium}`
    const chipPotassiumLabal = ` Potassium : ${this.props.food.calories.Potassium}`
    const chipCarbohydrateLabal = ` Carbohydrate : ${this.props.food.calories.Carbohydrate}`
    const chipProteinLabal = ` Protein : ${this.props.food.calories.Protein}`

    const nutritionChips = ( 
      <div>
          <Chip label = {chipProteinLabal}/> 
          <Chip label = {chipFatLabal}/> 
          <Chip label = {chipSodiumLabal}/>
          <Chip label = {chipPotassiumLabal}/> 
          <Chip label = {chipCarbohydrateLabal}/>  
      </div>);

    return (
      <div className = "CardContent" >
          <Card >
              <CardHeader 
                  title = {cardHeaderTitile}
                  subheader = {cardHeadersubTitile}/>
              <CardMedia 
                  component = "img"
                  alt = "Contemplative Reptile"
                  height = "450"
                  image = {imageURL}
                  title = "Contemplative Reptile" />
              <CardContent >
                  <Typography 
                      component = "p" > {this.props.food.facts}
                  </Typography>
              <div className = "foodRowSeperator"> </div>
                    <Typography 
                        variant = "body2">
                        Long Term Side Effects: {this.props.food.sideeffects}
                    </Typography> 

                <div className = "chipRowSeperator"> </div> 
                      {nutritionChips}
              </CardContent>
       </Card>
      </div>
    );
  }
}

export default FoodRow;