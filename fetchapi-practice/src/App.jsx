import { useState } from "react";
import { getUser } from "./api";

function App() {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState("");

    const handlefetchData = async () => {
        setIsLoading(true);
        setInput("");
        try {
            const result = await getUser();
            setPost(result);
        } catch (error) {
            error.message;
        } finally {
            setIsLoading(false);
        }
    };

    const searchPost = post.filter((item) => {
        return item.title.toLowerCase().includes(input.toLowerCase());
    });
    return (
        <>
            <div className="flex flex-col my-5 items-center gap-5">
                <h1 className="text-4xl text-blue-600">Fetch API 串接練習</h1>
                <span className="text-md text-blue-800">
                    來源：https://jsonplaceholder.typicode.com/posts
                </span>
                <button
                    className="bg-red-300 w-30 rounded-lg p-3 hover:bg-lime-500 font-extrabold"
                    onClick={handlefetchData}
                    disabled={isLoading}
                >
                    {post.length === 0 ? "載入資料" : "重新載入"}
                </button>
                <div>
                    <input
                        className="border rounded-md pl-2"
                        placeholder="請輸入關鍵字"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <h2 className="text-center">搜尋筆數：{input === "" ? "0" :searchPost.length}</h2>
                </div>
            </div>

            <hr />
            {isLoading ? (
                "載入中"
            ) : (
                <div className="m-10 flex flex-wrap justify-around gap-5">
                    {searchPost.length > 0 ? (
                        searchPost.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="max-w-72 border-2 rounded-lg p-5"
                                >
                                    <h2 className="font-bold underline text-indigo-500">
                                        {item.title}
                                    </h2>
                                    <p>內文：{item.body}</p>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center w-full mt-10">
                            <p className="text-gray-400 text-xl">
                                {post.length === 0
                                    ? "請先點擊「載入資料」"
                                    : "找不到符合的卡片"}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
export default App;
