import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, Grid } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Porfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Router>
            <div className="main_content">
              <Header />
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
