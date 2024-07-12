import { Moon } from "lucide-react";
import { useState } from "react";
import Text from "../components/Text";
import { useParams } from "react-router-dom";
import LobbyCode from "../components/LobbyCode";
import io from "socket.io-client";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

function Lobby() {
  // const server = io("https://localhost:3000");
  // server.emit("connection", "hello");
  const { lobbyCode } = useParams();
  const TypingText = "Lorem ipsum dolor sit";
  const [typedText, setTypedText] = useState(TypingText);
  const [correctText, setCorrectText] = useState("");
  const [incorrectText, setIncorrectText] = useState("");

  const [showText, setShowText] = useState(true);

  const [startTime, setStartTime] = useState(Date.now(0));
  const [endTime, setEndTime] = useState(Date.now());

  const [wpm, setWpm] = useState(0);
  const [acc, setAcc] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex dark:bg-zinc-900 flex-col gap-1 items-center min-h-full w-full">
        <LobbyCode code={lobbyCode} />
        {showText ? (
          <div className="flex-grow w-full console-text flex flex-col items-center mt-[10%]">
            <div className="typing-test w-[1600px] leading-[2] font-light  items-center text-3xl text-center ">
              <span>
                <Text text={correctText} className="font-bold text-green-500" />
                <Text
                  text={incorrectText}
                  className="font-bold text-red-500 underline"
                />
                <Text text={typedText} className="dark:text-zinc-500" />
              </span>
            </div>
            <br />
            <input
              type="text"
              onChange={(e) => {
                let typedCharacter = e.target.value[e.target.value.length - 1];
                if (typedText == undefined) {
                  console.log("congrats");
                }
                if (typedCharacter == typedText[0]) {
                  setTypedText(typedText.slice(1));
                  setCorrectText(correctText + typedCharacter);
                } else {
                  setTypedText(typedText.slice(1));
                  setIncorrectText(incorrectText + typedText[0]);
                }
                if (typedText.length == 1) {
                  setShowText(false);
                  setEndTime(Date.now());
                  const totalTime = Date.now() - startTime;
                  const accuracy = (correctText.length + 1) / TypingText.length;
                  const wpm = correctText.split(" ").length / (totalTime / 60);
                  console.log(`${totalTime / 1000}s`);
                  setTime(totalTime / 1000);
                  console.log(
                    `${correctText.split(" ").length / (totalTime / 60000)}`
                  );
                  setWpm(correctText.split(" ").length / (totalTime / 60000));
                  console.log(`${parseInt(accuracy * 100)}%`);
                  setAcc(parseInt(accuracy * 100));
                }
              }}
              className="outline-none bg-transparent border-none text-transparent"
              autoFocus
            />
          </div>
        ) : (
          <Results accuracy={acc} wpm={wpm} timeTaken={time} />
        )}
      </div>
    </div>
  );
}

export default Lobby;
