import './App.css';

function Counter({ title, content }) {
    // console.log(props.title);

    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <button>+</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Counter title="레이겐 아라타카 기자회견" content="레이겐 이 사기꾼" />
        </div>
    );
}

export default App;
