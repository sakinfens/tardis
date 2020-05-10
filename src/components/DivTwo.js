import React, {Component} from 'react';

class DivTwo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Divone />
      </div>
    )
  }
}

export default DivTwo
