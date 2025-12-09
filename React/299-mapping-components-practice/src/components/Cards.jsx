import React from "react";
import emojipedia from "../emojipedia";

function createContent(profile) {
    return <div className="term">
        <dt>
            <span className="emoji" role="img" aria-label={profile.name}>
                {profile.emoji}
            </span>
            <span> {profile.name} </span>
        </dt>
        <dd>
            {profile.meaning}
        </dd>
    </div>
}


function Cards() {
    return <dl className="dictionary">
       { emojipedia.map(createContent)}
    </dl>
}

export default Cards