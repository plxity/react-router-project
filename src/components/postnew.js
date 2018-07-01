import React from 'react';
import {Field ,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions';
import { connect } from 'react-redux';
 class PostNew extends React.Component{
    renderField(field){
        return(
            <div className="form-group">
            <label>{field.label}</label>
                <input
                className="form-control"
                type="text"
                {...field.input}
                />
            </div>

        );
    }
    onSubmit(values){
        console.log(values);
        this.props.createPost(values,()=>{
            this.props.history.push('/');
        });

    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field label="Title for Post" name="title" component={this.renderField} />
               <Field label ="Tags" name="tags" component={this.renderField} />
               <Field label ="Post Content" name="content" component={this.renderField} />
               <button type="submit" className="btn btn-primary">Submit</button>
               <Link to="/" className="btn btn-danger" >Cancel</Link>
               </form>
            </div>


        );

    }
}
export default reduxForm({
form :'PostsNewForm'
})(
connect(null,{createPost})(PostNew)
);