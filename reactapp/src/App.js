import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers }  from 'redux';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import BasketScreen from './components/basket/BasketScreen';
import HomeScreen from './components/home/HomeScreen';
import theme from './config/theme';
import cart from './reducers/cart.reducer';
import './App.css';

const store = createStore(combineReducers({cart}));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/basket" component={BasketScreen} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
