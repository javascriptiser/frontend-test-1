import { Sidebar } from './Components/Sidebar/Sidebar'
import { Switch, Route } from "react-router-dom";
import { useSidebarList } from './CustomHooks/useSidebarList';
import { MainWrapper } from './Components/Layouts/Wrapper/MainWrapper';
import { Header } from './Components/Header/Header';
import style from './style.module.css'

function App() {
  const newList = useSidebarList();
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Sidebar />
      <MainWrapper>
        <Header />
        <div className={style.contentWrapper}>
          <Switch>
            <Route path={'/Catalog'}></Route>
            <Route path={'/Health'}></Route>
            <Route path={'/Beauty'}></Route>
            <Route path={'/Enjoi'}></Route>
            <Route path={'/Car'}></Route>
          </Switch>
        </div>
      </MainWrapper>
    </div>
  );
}

export default App;
