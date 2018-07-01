import  _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from '../actions/index';
 class PostIndex extends React.Component{
     componentDidMount(){
         this.props.fetchPost();
     }




     renderPosts(){
        return _.map(this.props.posts,post=>{
            return(

                <li className="list-group-item" key={post.id}>
                <Link to ={`/post/${post.id}`}>{post.title}</Link>
                </li>
            );
        });
        
     }
    render (){
        return(
    <div>
        <div className="text-xs-right">
        <Link className ="btn btn-primary" to="/post/new">
        Add Post
        </Link>

        </div>
            <h3>Posts</h3>
            <ul className="list-groups">
            {this.renderPosts()}
            
            </ul>
    </div>

        );

    }
} 
function mapStateToProps(state){
    return{
        posts:  state.posts
    };
}
export default connect( mapStateToProps,{fetchPost})(PostIndex);