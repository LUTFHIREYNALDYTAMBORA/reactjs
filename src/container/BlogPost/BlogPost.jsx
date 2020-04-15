import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        // fetch('http://localhost:3004/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

        axios.get('http://localhost:3004/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    render() {
        console.log(this.state.post);
        
        return (
            <Fragment>
            <p className='section-title'>Blog Post</p>
            {
                this.state.post.map(post => {
                    return <Post key={post.id} title={post.title} desc={post.body} />
                })
            }            
            </Fragment>
        )
    }
}


export default BlogPost;