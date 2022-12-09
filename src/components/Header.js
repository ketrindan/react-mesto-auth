import logo from '../images/logo.svg'
import { Route, Switch, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Логотип"/>
      </Link>
      <Switch>
        <Route path="/sign-up">
          <Link to="/sign-in" className="header__link">Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link">Регистрация</Link>
        </Route>
        <Route exact path="/">
          <div className="header__infobox">
            <p className="header__user-email">{props.userEmail}</p>
            <Link to="/sign-in" className="header__link" onClick={props.onSignOut}>Выйти</Link>
          </div>
        </Route> 
      </Switch> 
    </header>
  )
}

export default Header;
