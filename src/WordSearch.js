import React, {useState} from  "react";
import axios from "axios";

export default function WordSearch() {
   let [keyword, setKeyword] = useState(""); 
    
   function handleResponse(response) {
    console.log(response.data[0]);
   }

   function search(event) {
        event.preventDefault();

        let apiKey = "171b7dtao42cf84308ef17ccf77309a5";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="WordSearch">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}