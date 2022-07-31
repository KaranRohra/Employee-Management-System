import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployee from "components/ListEmployee";
import Header from "components/Header";
import CreateEmployee from "components/CreateEmployee";
import UpdateEmployee from "components/UpdateEmployee";

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<ListEmployee/>} />
                    <Route exact path="/employee/create" element={<CreateEmployee/>} />
                    <Route exact path="/employee/update/:id" element={<UpdateEmployee/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
