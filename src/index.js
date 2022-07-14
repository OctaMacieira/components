import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail 
            author={faker.name.findName()}
            date="Today at 5:42PM"
            image={faker.image.people()} 
            comment={faker.lorem.lines()}
            />
            <CommentDetail 
            author={faker.name.findName()} 
            date="Yesterday at 4:32PM"
            image={faker.image.people()} 
            comment={faker.lorem.lines()} 
            />
            <CommentDetail 
            author={faker.name.findName()} 
            date="Yesterday at 2:32PM"
            image={faker.image.people()} 
            comment={faker.lorem.lines()} 
            />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));