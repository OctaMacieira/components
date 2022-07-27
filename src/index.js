import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>    
            </ApprovalCard>
            
            
            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.findName()}
                    date="Today at 5:42PM"
                    image={faker.image.people()} 
                    comment={faker.lorem.lines()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.findName()} 
                    date="Yesterday at 4:32PM"
                    image={faker.image.people()} 
                    comment={faker.lorem.lines()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author={faker.name.findName()} 
                    date="Yesterday at 2:32PM"
                    image={faker.image.people()} 
                    comment={faker.lorem.lines()} 
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));