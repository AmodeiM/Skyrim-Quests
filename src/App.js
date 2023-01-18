import Header from "./components/Header";
import QuestLines from "./components/QuestLines";
import skyrimQuests from "./skyrimQuests";


function App() {
  return (
    <div>
    <Header />
    {skyrimQuests.map(q => <QuestLines
      headingId={q.headingId}
      questLine = {q.title}
      dataBsTarget={q.dataBsTarget}
      aria={q.ariaControls}
      allQuests = {q.quests}
       />
    )}
    </div>
  );
}

export default App;
