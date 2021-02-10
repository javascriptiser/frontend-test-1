import { Sidebar } from './Components/Sidebar/Sidebar'
import { Switch, Route } from "react-router-dom";
import { useSidebarList } from './CustomHooks/useSidebarList';
import { MainWrapper } from './Components/Layouts/Wrapper/MainWrapper';

function App() {
  const newList = useSidebarList();
  return (
    <div className="App">
      <Sidebar />
      {/* Перерисовывается весь App , если распаковывать роуты */}
      <MainWrapper>
        <Switch>
          {newList.map(({ title, link }, index) => {
            return <Route path={link} key={index}>
              <div>{title}</div>
            </Route>
          })}
        </Switch>
      </MainWrapper>
    </div>
  );
}

export default App;
