import { Moon } from "lucide-react";
import { useState } from "react";
import Text from "./components/Text";

function App() {
  const TypingText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem suscipit fugiat consectetur ex rerum quam, dignissimos dolores nisi, beatae minima deleniti vero nulla recusandae eaque!";
  const [typedText, setTypedText] = useState(TypingText);
  const [correctText, setCorrectText] = useState("");
  const [incorrectText, setIncorrectText] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 items-center h-full w-full">
        <div className="text-center mt-10 console-text">
          <span className="bg-gray-200 p-3 rounded-md">
            Lobby Code: <span className="font-bold">69420</span>
          </span>
        </div>

        <div className="h-[300px] console-text flex items-center justify-center">
          <div className="typing-test w-[1600px] leading-[2] font-light pl-10 ml-10 items-center text-3xl text-center pr-10 mr-10">
            <span>
              <Text text={correctText} className="font-bold text-green-500" />
              <Text
                text={incorrectText}
                className="font-bold text-red-500 underline"
              />
              <Text text={typedText} />
            </span>
          </div>
        </div>
        <input
          type="text"
          onChange={(e) => {
            let typedCharacter = e.target.value[e.target.value.length - 1];
            if (typedCharacter == typedText[0]) {
              setTypedText(typedText.slice(1));
              setCorrectText(correctText + typedCharacter);
            } else {
              setTypedText(typedText.slice(1));
              setIncorrectText(incorrectText + typedCharacter);
            }
          }}
          className="outline-none text-white"
          autoFocus
        />
      </div>
    </>
  );
}

export default App;
