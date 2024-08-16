import React from  "react";

export default function WordSearch() {
    function search(event) {
        event.preventDefault();
        alert("Searching");
    }
    return <div className="Dictionary">Hello from Dictionary</div>;
}