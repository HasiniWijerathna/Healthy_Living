  import React, {Component} from 'react';

  import Paper from '@material-ui/core/Paper';
  import InputBase from '@material-ui/core/InputBase';
  import Button from '@material-ui/core/Button';

  /**
   * Describes the elements on the SearchBar
     @return {String} HTML elements
   */
  class SearchBar extends Component {

  /**
   * Class constructor
   * @param {Object} props User define component
   */
      constructor(props) {
        super(props);
        this.state = {
          query: ''
        };
        
      this.handleChange = this.handleChange.bind(this);
      this.handleSort = this.handleSort.bind(this);
    }
    /**
     * Updates the state according to the change event of new seach terms
       @param  {Event} changeEvent The change event of the search term
     */
    handleChange(event) {
      this.setState({query: event.target.value}, () => {
      this.props.onFilter(this.state.query)
    });
    }
    /**
     * Fire sort event of sorting junk food in descending order
     */
    handleSort() {
      console.log("clicked sort");
      this.props.onSort();  
    }
    /**
    * Describes the elements on the SearchBar
    * @return {String} HTML elements
    */
    render() {
     return (
       <div className="topRightCorner">
          <div id="wrapper">
              <div id="first">
                <Paper elevation={1}>
                    <InputBase  placeholder="  Search Food Items"  onChange={this.handleChange}  value={this.state.query}  />
                </Paper>
              </div>
              <div id="second">
                  <Button variant="contained" color="default" onClick={this.handleSort} >
                  Calorie Rank   
                  </Button>     
              </div>
          </div>
      </div>);
    }

  }

    export default SearchBar;
