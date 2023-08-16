import "./App.css";
import Navbar from "./Atom/Navbar";
import MainContent from "./atom/MainContent";
import SidebarLeft from "./atom/SidebarLeft";
import SidebarRight from "./atom/SidebarRight";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <SidebarLeft />
        <MainContent />
        <SidebarRight />
      </div>
    </>
  );
}

export default App;
