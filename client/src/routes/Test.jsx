import { Moon } from "lucide-react";
import { useState } from "react";
import Text from "../components/Text";
import { useParams } from "react-router-dom";
import LobbyCode from "../components/LobbyCode";
import Navbar from "../components/Navbar";

function Test() {
  const { lobbyCode } = useParams();
  const TypingText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem suscipit fugiat consectetur ex rerum quam, dignissimos dolores nisi, beatae minima deleniti vero nulla recusandae eaque!";
  const [typedText, setTypedText] = useState(TypingText);
  const [correctText, setCorrectText] = useState("");
  const [incorrectText, setIncorrectText] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-2 items-center h-full w-full">
        <LobbyCode code={lobbyCode} />
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
              setIncorrectText(incorrectText + typedText[0]);
            }
          }}
          className="outline-none text-white"
          autoFocus
        />
      </div>
    </>
  );
}

export default Test;
