import React, {Component} from 'react';
import axios from 'axios';
import {connect} from   'react-redux';
import NewsListItems from '../../Components/NewsList/NewsListItems/NewsListItems';

class HackerDashboard extends Component{
    
    state={
        Ids: [],
        stories: []    
    }

    componentDidMount(){
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(result => {
            //console.log(result.data);
            this.setState({
                Ids: [...result.data]
            });
            return result.data;
        })
        .then(ids => ids
            .slice(0,20)
            .map(id => {
            axios.get('https://hacker-news.firebaseio.com/v0/item/'+id+'.json?print=pretty')
            .then(story => 
                {
                    this.setState({stories: [...this.state.stories, story]})
                    console.log(story);
                })
                .catch(err => console.log(err))
        })
        )
        .catch(err => {
            console.log(err);
        });
    }


    

    render(){
        

        
        return(
            <NewsListItems
            stories={this.state.stories}>
            </NewsListItems>
        );
    }
    

}

export default HackerDashboard;