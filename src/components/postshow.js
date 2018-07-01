import React from 'react';
import {connect} from 'react-redux';
import {fetchidpost ,deletePost} from '../actions/index';
import {Link} from 'react-router-dom';
class PostShow extends React.Component{
    componentDidMount(){
      const {id} = this.props.match.params;
        this.props.fetchidpost(id);
    }
    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/')});
        }
    render(){
        const {post} =this.props;
        if(!post){
            return <div>...Loading</div>;
        }
        return (
            <div>
                <Link to ="/" className="btn btn-primary">back to index</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>categories :{post.tags}</h6>
                <p>
                    {post.content}
                </p>
            </div>


        );
    }
}
function mapStateToProps({posts},ownProps){
    return {post :posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchidpost, deletePost})(PostShow);