import * as React from 'react'
import { connect } from 'react-redux'



class CompDetailsContainer extends React.Component {
  render() {
    const computer = this.props.computers
    return <CompDetails computer={computer}/>
  }
}
function CompDetails(props) {
    // const model = props.computers
    // console.log(model)
    return (<div>
      <ul>
      
      </ul>
    </div>)
  }

const mapStateToProps = (state) => {
    // console.log(state.computers[0])
    // console.log(state.computers[0][1].manufacturer)
    return {
      computers: state.computers[0][1].manufacturer
      
    }
  }

export default connect(mapStateToProps)(CompDetailsContainer)