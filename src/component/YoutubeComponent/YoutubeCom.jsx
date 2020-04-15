import React from 'react';
import './YoutubeCom.css';

const YoutubeCom = (props) => {
    return (
        <div className= 'youtube-wrapper'>
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/GBvnzRwoizo/hqdefault.jpg?sqp=-oaymwEZCNSCELwBSFXyq4qpAwsIARUAAIhCGAFwAQ=&rs=AOn4CLD_gVxI_Tst0s94ov4oAPKOxs_CAO" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeCom.defaultProps = {
    time: '00.00',
    title: 'Keur Dijieun',
    desc: 'xxx ditonton, x hari yang lalu'
}

export default YoutubeCom;