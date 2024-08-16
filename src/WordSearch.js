import React, {useState} from  "react";

export default function WordSearch() {
   let [keyword, setKeyword] = useState(""); 
    
   function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
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