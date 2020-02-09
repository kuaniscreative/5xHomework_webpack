import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// components
import PageHeader from './components/pageHeader';
import Main from './components/main';
import Contact from './components/contact';
import PageFooter from './components/pageFooter';
import Course from './components/course';
import Talks from './components/talks';
import Dev from './components/dev';
import Training from './components/training';
import Space from './components/space';
import Posts from './components/posts';

// data
import headerData from './json/pageHeader.json';
import footerData from './json/footer.json';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <PageHeader data={headerData} />
        <Route exact path="/" component={Main} />
        <Route path="/course" component={Course} />
        <Route path="/talks" component={Talks} />
        <Route path="/dev" component={Dev} />
        <Route path="/training" component={Training} />
        <Route path="/space" component={Space} />
        <Route path="/posts" component={Posts} />
        <Route path="/contacts" component={Contact} />
        <PageFooter data={footerData} />
      </HashRouter>
    </div>
  );
}

export default App;
