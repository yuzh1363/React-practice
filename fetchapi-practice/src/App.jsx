import { useState } from "react";
import { getUser } from "./api";

function App() {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handlefetchData = async () => {
        setIsLoading(true);
        try {
            const result = await getUser();
            setPost(result);
        } catch (error) {
            error.message;
        } finally {
            setIsLoading(false);
        }
    };
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
                    載入資料
                </button>
            </div>

            <hr />
            {isLoading ? (
                "載入中"
            ) : (
                <div className="m-10 flex flex-wrap justify-around gap-5">
                    {post.map((item) => {
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
                    })}
                </div>
            )}
        </>
    );
}
export default App;
