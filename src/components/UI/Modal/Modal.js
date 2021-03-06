import React,{Component} from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
 
  // we have improved the performance,we render the ModalComponent just wen want to show it
  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
  }

  componentDidUpdate () {
    
  }
  
  render() {
    return (
      <Aux>
        <Backdrop show = {this.props.show}  
                  click = {this.props.showCancel}
        />
        <div className = {classes.Modal }
             style = {{
               transform : this.props.show? 'translateY(0)' : 'translateY(-100vh)',
               opacity : this.props.show ? '1' :'0'
            }}
       >
         
        {this.props.children}
      </div>
      </Aux>
     
  );

  }
    

}

export default Modal;