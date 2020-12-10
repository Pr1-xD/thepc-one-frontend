import React from 'react';

function SubmissionCard(props) {
    function deptsDisplay(obj){
        return(<p class="card-text">{obj}</p>)
    }
    return (
        <div>
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                {props.depts.map(deptsDisplay)}
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    );
}

export default SubmissionCard;