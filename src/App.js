import { Sidebar } from './Components/Sidebar/Sidebar'
import { Switch, Route } from "react-router-dom";
import { useSidebarList } from './CustomHooks/useSidebarList';
import { MainWrapper } from './Components/Layouts/Wrapper/MainWrapper';
import { CardsWrapper } from './Components/Layouts/CardsWrapper/CardsWrapper'
import { Header } from './Components/Header/Header';
import appStyle from './appStyle.module.css'
import { Cards } from './Components/Card/Cards';

function App() {
  const newList = useSidebarList();
  return (
    <div className="App" className={appStyle.container}>
      <Sidebar />
      <MainWrapper>
        <Header />
        <div className={appStyle.contentWrapper}>
          <Switch>
              <Route path={'/Catalog'}><Cards /></Route>
              <Route path={'/Health'}><Cards /></Route>
              <Route path={'/Beauty'}><Cards /></Route>
              <Route path={'/Enjoi'}><Cards /></Route>
              <Route path={'/Car'}><Cards /></Route>
              <Route path={'/'}><Cards /></Route>
          </Switch>
        </div>
      </MainWrapper>
    </div>
  );
}

export default App;
