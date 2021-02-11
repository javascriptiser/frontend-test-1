import { Sidebar } from './Components/Sidebar/Sidebar'
import { Switch, Route } from "react-router-dom";
import { useSidebarList } from './CustomHooks/useSidebarList';
import { MainWrapper } from './Components/Layouts/Wrapper/MainWrapper';
import { CardsWrapper } from './Components/Layouts/CardsWrapper/CardsWrapper'
import { Header } from './Components/Header/Header';
import style from './style.module.css'
import { Cards } from './Components/Card/Cards';

function App() {
  const newList = useSidebarList();
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Sidebar />
      <MainWrapper>
        <Header />
        <div className={style.contentWrapper}>
          <Switch>
            <CardsWrapper>
              <Route path={'/Catalog'}><Cards /></Route>
              <Route path={'/Health'}><Cards /></Route>
              <Route path={'/Beauty'}><Cards /></Route>
              <Route path={'/Enjoi'}><Cards /></Route>
              <Route path={'/Car'}><Cards /></Route>
            </CardsWrapper>
          </Switch>
        </div>
      </MainWrapper>
    </div>
  );
}

export default App;
