import { GlobalStyled } from "./GlobalStyled";
import { Aside } from "./components/Aside/Aside";

function App() {
    return (
        <>
            <GlobalStyled />
            <div id="app">
                <Aside />
            </div>
        </>

    )
};

export default App;
