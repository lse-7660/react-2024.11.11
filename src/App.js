import './App.css';
import React, { useState } from 'react';

function Counter(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <button>눌러주시오</button>
            {props.initValue}
        </div>
    );
}

// export default Counter;
// 한 페이지에서는 하나의 function만 export 가능한가?

function App() {
    return (
        <div>
            <Counter
                title="리액트가 개갓을때마다 누르는 버튼"
                initValue={0}
            />
        </div>
    );
}

export default App;
