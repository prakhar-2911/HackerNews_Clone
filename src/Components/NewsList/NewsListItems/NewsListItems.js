import React from 'react';
import NewsListItem from './NewsListItem/NewsListItem';

const newsListItems = (props) => {
return (
props.stories.map(element => {
     return (
     <NewsListItem
     title={element.title}
     url={element.url}
     points={element.score}
     author={element.by}
     comments={}
     time={this.time}
    />
     )
})
)};

export default newsListItems;