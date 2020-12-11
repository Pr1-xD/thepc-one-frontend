import React from 'react';

function SubmissionCard(props) {
    let obj=props.obj
    return (
        <div>
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{obj.name}</h5>
                 <p class="card-text">{obj.regNum}</p>
                 <p class="card-text">{obj.phNum}</p>
                 <p class="card-text">{obj.email}</p>
                 <p class="card-text">{obj.whatsapp}</p>
                 <p class="card-text">{obj.strengths}</p>
                 <p class="card-text">{obj.weaknesses}</p>
                 <p class="card-text">{obj.whyDoYouJoin}</p>
            </div>
            </div>
        </div>
    );
}

export default SubmissionCard;