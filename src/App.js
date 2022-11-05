import {useState} from "react";

import {Posts, SingleUser, Users} from "./components";
import css from "./App.module.css";

function App() {
    const [singleUser, setSingleUser] = useState(null);
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <div className={css.wrap}>
                <div><Users getUser={setSingleUser} setUserId={setUserId}/></div>
                <hr/>
                <div>{singleUser && <SingleUser user={singleUser} getUserId={setUserId}/>}</div>
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    )
}

export default App;
