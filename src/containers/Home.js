  import React, {Component} from 'react';

  import MediaQuery from 'react-responsive';

  import { getAllfoods } from '../services/FoodService';
  import FoodRow from '../components/FoodRow';
  import SearchBar from '../components/SearchBar';
  import EmptyResults from '../components/EmptyResults';
  import '../styles/master.css';

  /**
   * Represents the Home page of the application with a list of available junk food items
   */
   class Home extends Component {
    /**
     * Class constructor
     */
    constructor (props) {
        super(props)
        this.state = {
          foodData: [],
          value: '',
          filteredFoodItems: []
        }
        
      this.filter = this.filter.bind(this);
      this.sortByCalories = this.sortByCalories.bind(this);
    }
    
    /**
     * Use this life cycyle method to retrieve all the junk food data once the component is mounted
     */
    componentDidMount() {
      this.setState({
        foodData: getAllfoods()
      });
    }
    
    /**
     * Sort the junk food in descending order considering the total calorie value
     */
    sortByCalories() {
      this.setState({
        foodData: getAllfoods().sort((a, b) => Number(b.calories.totalCalories) - Number(a.calories.totalCalories))
      });
    }
    
    /**
     * Filter junk food items according to the user input serach term
     */
    filter(query) {
        const regex = new RegExp(query, 'i');
  		  const filteredItems = getAllfoods().filter((item) => {
  			     return regex.test(item.name);
  		})
  		
  		  this.setState({foodData: filteredItems});
  	}
    
    /**
      * Describes the elements on the Home page
      * @return {String} HTML elements
      */
    render() {
  
      let content;
      if(this.state.foodData.length === 0) {
          content = (
              <div className="emptyContainer">
                  <div> 
                      <SearchBar onFilter={this.filter}/>
                      <MediaQuery query="(orientation: landscape)">
                          <div className ="centerContent">
                            <EmptyResults/>
                          </div>
                        </MediaQuery>
                  </div>
              </div>
            );
      } else {
          content = (
              <div>
              <div>
                  <SearchBar onFilter={this.filter} onSort={this.sortByCalories}/>
              </div>
                <MediaQuery query="(orientation: portrait)">
              <div className="outercontent">
                  <li>
                      {this.state.foodData.map((item) => {
                          return <FoodRow food={item} />})}
                  </li>
              </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 324px)">
                    <div className="outercontent">
                        <li>
                            {this.state.foodData.map((item) => {
                                return <FoodRow food={item} />})}
                        </li>
                    </div>
                </MediaQuery>
                <MediaQuery query="(orientation: landscape)">
                    <div className="outercontent">
                        <div className ="centerContent">
                            <ul className='list'>
                                {this.state.foodData.map((item) => {
                                    return <FoodRow food={item} key={item.id} />})}
                            </ul>
                        </div>   
                      </div>
                </MediaQuery>   
           </div>
       );
     }
      return (
          <div>
            {content}
          </div>
      );
    }
}

export default Home;