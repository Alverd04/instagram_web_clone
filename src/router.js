import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function RouteHandler() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route exact path="/:profile_id"></Route>
        <Route exact path="/stories/:story_id"></Route>
        <Route exact path="/messages"></Route>
        <Route exact path="/publish"></Route>
        <Route exact path="/discover"></Route>
        <Route exact path="/likes"></Route>
      </Routes>
    </Router>
  );
}
