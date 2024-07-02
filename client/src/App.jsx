import { Moon } from "lucide-react";

function App() {
  return (
    <>
      <div className="navbar h-50 flex pt-10 pl-10 pr-10 items-center justify-between dark:bg-blue-500">
        <div className="pl-10 brand text-2xl cursor-pointer">
          <span className="font-bold">typist</span>
          <span className="text-blue-500 font-bold">pvp</span>
        </div>
        <div className="theme-switcher pr-10 cursor-pointer">
          <Moon />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center h-full w-full">
        <div className="text-center mt-10 console-text">
          <span className="bg-gray-200 p-3 rounded-md">
            Lobby Code: <span className="font-bold">69420</span>
          </span>
        </div>

        <div className="h-[300px] console-text flex items-center justify-center">
          <div className="typing-test w-[1600px] leading-[2] font-light pl-10 ml-10 items-center text-3xl text-center pr-10 mr-10">
            <span className="font-bold text-green-500">
              Lorem ipsum dolor sit, amet c
            </span>
            <span className="font-bold text-red-500">onsecte</span>tur
            adipisicing elit. Voluptatibus sed pariatur natus, deserunt
            necessitatibus non quos iure, porro dolor blanditiis eveniet, amet
            quis doloremque ea!
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
