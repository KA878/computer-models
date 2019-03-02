import * as React from 'react'
import ComputerList from './ComputerList'
import { connect } from 'react-redux'


class ComputerListContainer extends React.Component {
    selectComputer = (id) => {
      const ex = this.props.computers
      console.log(ex)
      this.props.dispatch({
        type: 'SELECT_COMP',
        payload: id
      })
    }
  
    render() {
      return <ComputerList computers={this.props.computers} selectComputer={this.selectComputer} /> 
    }
  }
  const mapStateToProps = (state) => {
    return {
      computers: state.computers
    }
  }
  
  export default connect (mapStateToProps)(ComputerListContainer) ;