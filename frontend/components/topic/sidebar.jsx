import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: {},
            topic_names_list: [],
        }
        this.props.getTopics().then(() => {
            this.parseData(this.props.topics);
        })

        this.parseData = this.parseData.bind(this);
        this.reduceData = this.reduceData.bind(this);
    }
    
    parseData(data) {
        let flippedObj = {};
        Object.keys(data).forEach(key => {
            flippedObj[data[key].name] = [data[key].questions, data[key].id];
        })
        
        let flipped = [];
        for (let x in flippedObj){
            flipped.push([x, flippedObj[x]])
        }
        
        flipped.sort((x, y) => {
            if(x[1][0] === y[1][0]){
                if(x[0] < y[0]){return -1;}
                if(x[0] > y[0]){return 1;}
                return 0;
            } else {
                return y[1][0] - x[1][0]
            }
        })
        
        this.setState({topics: flipped});
        this.reduceData();
    }
    
    reduceData() {
        let allTopics = this.state.topics.filter((t) => {
            return t[1][0] > 0
        })
        if(allTopics.length > 15){
            allTopics = allTopics.slice(0, 15);
        }
        this.setState({["topic_names_list"]: allTopics});
    }
    
    render() {
        return (
            <div className="sidebar">
                <h3>Trending Topics</h3>
                <div className="topic-list">
                    {this.state.topic_names_list.map((topic) => {
                        return <li key={topic[1][1]} className="hot-topic" onClick={() => { this.props.history.push(`/topics/${topic[1][1]}`); window.location.reload(); }}>{topic[0]}</li>
                    })}
                </div>
            </div>
        )
    }
}

export default Sidebar;