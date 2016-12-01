var React = require('react');

var List = React.createClass({
  formatCatName: function(astr){
    return astr.charAt(0).toUpperCase() + astr.slice(1);
  },
  formatTouringString: function(aint){
    if (aint == 1) {
      return "On tour"
    }
    else {
      return "Not on tour"
    }
  },
  render: function(){
    //I seriously hate javascript
    var parent = this;
    return (
      <div className="bandContainer">
      {
        this.props.items.map(function(item) {
          var catName = parent.formatCatName(item.category);
          var tourStr = parent.formatTouringString(item.touring);
          return <div className="band" key={item.id}>
                  <p className="bandText">{item.name}</p>
                  <img className="bandImg" src={item.img}></img>
                  <p className="bandCatDeets">{catName}</p><br />
                  <p className="bandTourDeets">{tourStr}</p>
                </div>
          })
       }
      </div>
    )  
  }
});

module.exports = List;