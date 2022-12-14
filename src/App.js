import EmojiCard from "./EmojiCard";
import emojipedia from "./emojipedia";

function createCard(contact) {
  return (
    <EmojiCard
      key={contact.id}
      emojiName={contact.name}
      emojiSymbol={contact.emoji}
      description={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span> Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
