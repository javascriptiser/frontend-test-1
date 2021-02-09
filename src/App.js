import { Sidebar } from './Components/Sidebar/index'
import { Switch, Route } from "react-router-dom";
import { useSidebarList } from './CustomHooks/useSidebarList';

function App() {
  const newList = useSidebarList();
  return (
    <div className="App">
      <Sidebar />
      {/* Перерисовывается весь App , если распаковывать роуты */}
      <Switch>
        {newList.map(({ title, link }, index) => {
          return <Route path={link} key={index}>
            <div>{title}</div>
          </Route>
        })}
      </Switch>
    </div>
  );
}

export default App;
