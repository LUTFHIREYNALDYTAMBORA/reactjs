import React, {Component} from 'react';
// import YoutubeCom from '../../component/YoutubeComponent/YoutubeCom';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    render() {
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeCom time='7.06' title= 'Rekaya Perangkat Lunak' desc='12x ditonton, 1 hari yang lalu'/>
                <YoutubeCom time='6.65' title= 'Pemograman Web' desc='22x ditonton, 2 hari yang lalu'/>
                <YoutubeCom time='4.32' title= 'Pemograman Game' desc='33x ditonton, 3 hari yang lalu'/>
                <YoutubeCom time='5.82' title= 'Matematika Dikstrit' desc='44x ditonton, 4 hari yang lalu'/>
                <YoutubeCom/> */}

                {/* <p>Counter</p>
                <hr/>
                <Product /> */}

                {/* <p>LifeCycle Component</p>
                <hr/>
                <LifeCycleComp /> */}
            
                <p>Blog Post</p>
                <hr/>
                <BlogPost />
            
            
            </div>
                            
        )
    }
}

export default Home;