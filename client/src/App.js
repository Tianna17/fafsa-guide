import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  HomePage,
  AboutPage,
  StepPage,
  CategoryPage,
  ContactPage,
} from './pages';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/guide' component={StepPage} />
          <Route exact path='/guide/:slug' component={StepPage} />
          <Route exact path='/guide/steps/:slug' component={CategoryPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
