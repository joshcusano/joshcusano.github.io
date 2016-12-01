
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');
var FilterFuncs = require('./FilterFuncs.jsx');
var List = require('./List.jsx');

var Parent = React.createClass({
  getInitialState: function(){
     return {

       initialItems: [
        {id:1, name:"Alabama Shakes", touring:0, category:"blues", img:"src/img/alabamashakes.jpeg"},
        {id:2, name:"Big Sean", touring:1, category:"hip hop", img:"src/img/bigsean.jpeg"},
        {id:3, name:"Broken Bells", touring:0, category:"indie", img:"src/img/brokenbells.jpeg"},
        {id:4, name:"Common", touring:0, category:"hip hop", img:"src/img/common.jpeg"},
        {id:5, name:"David Ramirez", touring:1, category:"folk", img:"src/img/davidramirez.jpeg"},
        {id:14, name:"Future Islands", touring:0, category:"indie", img:"src/img/futureislands.jpeg"},
        {id:6, name:"Gary Clark Jr.", touring:1, category:"blues", img:"src/img/garyclarkjr.jpeg"},
        {id:13, name:"Kaleo", touring:1, category:"indie", img:"src/img/kaleo.jpeg"},
        {id:15, name:"Kendrick Lamar", touring:1, category:"hip hop", img:"src/img/kendricklamar.jpeg"},
        {id:7, name:"Local Natives", touring:1, category:"indie", img:"src/img/localnatives.jpeg"},
        {id:8, name:"Mandolin Orange", touring:1, category:"folk", img:"src/img/mandolinorange.jpeg"},
        {id:9, name:"Ray LaMontagne", touring:0, category:"blues", img:"src/img/raylamontagne.jpeg"},
        {id:10, name:"The Steeldrivers", touring:0, category:"folk", img:"src/img/thesteeldrivers.jpeg"},
        {id:11, name:"Talib Kweli", touring:0, category:"hip hop", img:"src/img/talibkweli.jpeg"},
        {id:12, name:"TV On The Radio", touring:1, category:"indie", img:"src/img/tvontheradio.jpeg"}
       ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  updateItems: function(newItems){
    this.setState({items: newItems})
  },
  resetItems: function(){
    this.setState({items: this.state.initialItems})
    document.getElementById('ontour').checked = false;
    document.getElementById('musicfilter').selectedIndex = 0;
  },
  render: function(){
    return (
      <div className="mainDiv">
        <FilterFuncs items={this.state.items} 
                     updateState={this.updateItems} 
                     resetItems={this.resetItems} 
                     initialItems={this.state.initialItems}/>
        <List items={this.state.items}/>
      </div>
    );
  }
});




module.exports = Parent;