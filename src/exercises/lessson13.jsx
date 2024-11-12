// [] implement fetch to get cat facts and save cat fact in state variable
// [] now instead of getting a cat fact on click, make them appear every 3 secend
// [] add input that will allow user to alter frequency of displaying cat facts the amount of secocond 

import { useState } from "react";

function CatFact() {
    const [catFact, setCatFact] = useState("The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz.")
    return <>
        <h2>{catFact}</h2>
    </>;
}

export default CatFact