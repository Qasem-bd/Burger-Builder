import React,{Component} from 'react'
import Aux from '../hoc/Auxillary'
import Modal from '../components/UI/Modal/Modal'


const withErrorHandler = (WrapedComponent, axios) => {
return class extends Component  {
    state = {
        error : null
    }

    errorConfirmedHandler= () => {
        this.setState({error:null})
    }
    render () {

        axios.interceptors.request.use(req => {
            this.setState({error:null})
            return req
        })
        axios.interceptors.response.use(res =>res, error => {
            this.setState({error : error})
        });
    
        return (
            <Aux>
                  <Modal show = {this.state.error}
                        showCancel = {this.errorConfirmedHandler}    >
                     {this.state.error ? this.state.error.message : null}
                  </Modal>
                  <WrapedComponent {...this.props}/>
            </Aux>
           
        )
        }
    }
}

export default withErrorHandler;