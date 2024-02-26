import {useState} from "react";
//import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";
export default function ConditionalComponent(){
    const [display, setDisplay] = useState(true);
    
    return display ? (
     <div>
         <h3>This is a ConditionalComponenet </h3>

          </div>
          ) : (
          <div> 
            <h3>Nothing to show here</h3> 
          </div>
          );
}