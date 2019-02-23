import React from 'react'
import axios from 'axios'


class Login extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            username: '',
            password: ''
            }
        }




    userNameChange(evt){
        this.setState({username: evt.target.value})
    }

   passwordChange(evt){
        this.setState({password: evt.target.value})
    }


    handleSubmit(evt){
        evt.preventDefault()
        axios.post('/db/create/user',
        {
            username: this.state.username,
            password: this.state.password
        })
        .then((res=>{
            console.log('hi no erros')
            console.log(res)
        }))
        .catch(er=>{
            console.log('Uh oh error')
            console.error(er)
        })


    }



    render(){
        return(
            <React.Fragment>


                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
               <label>
                    username
                    <input type="text" 
                           value={this.state.username} 
                           onChange={(e)=>{this.userNameChange(e)}} />
                    password
                    <input type="password" value={this.state.password} onChange={(e)=>{this.passwordChange(e)}} />
                </label>

           


            <input type="submit" value="Submit" />
            </form>

            </React.Fragment>
        )
    }
}



// const mapStateToProps = state => ({
//     // count: state.countReducer.count
//   });
  

//   // Allows actions to be called from the container through props
//   const mapDispatchToProps = dispatch => ({
//     // increment: () => dispatch({type: 'INCREMENT'})
//   });
  

//   // Must connect the container to the redux store
//   export default connect(mapStateToProps,mapDispatchToProps)(Login);

export default Login