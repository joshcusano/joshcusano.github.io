var React = require('react');

var FilterFuncs = React.createClass({
  
  reset: function(){
    this.props.resetItems();
  },
  filterMain: function(event){
    var isChecked = document.getElementById('ontour').checked;
    var chosenCat = document.getElementById('musicfilter').value;
    var filteredList = this.props.initialItems;
    if (chosenCat != "all") {
      filteredList = filteredList.filter(function(item){
        if (!isChecked) {
          return item.category.toLowerCase() == chosenCat;
        }
        else {
          return item.category.toLowerCase() == chosenCat && item.touring == 1;
        }
      });
    }
    else {
      if (isChecked) {
        filteredList = filteredList.filter(function(item){
          return item.touring == 1;
        });
      }
    }
    this.props.updateState(filteredList);
  },


  render: function(){
    return (
      <div id="allcontrolsdiv">
        <div id='maincontrolsdiv'>
          <div id="mainfilterdiv">
            <select id='musicfilter' onChange={this.filterMain}> 
              <option selected value = "all">All Music</option>
              <option value = "folk">Folk</option>
              <option value = "blues">Blues</option>
              <option value = "hip hop">Hip Hop</option>
              <option value = "indie">Indie</option>       
            </select>
           </div>
          
          <div id="mainswitchdiv">
            <label id="switchlabel">On Tour
              <div className="innerswitchdiv">
                <label className="switch">
                  <input className="switch" type="checkbox" id="ontour" onChange={this.filterMain}></input>
                  <div className="slider"></div>  
                </label>
              </div>
            </label>
          </div>
        </div>
        
        <div id='resetbtndiv'>
          <button id="resetbtn"onClick={this.reset}> Reset All Filters</button>
        </div>
     </div>
      
    )  
  }
});

module.exports = FilterFuncs;