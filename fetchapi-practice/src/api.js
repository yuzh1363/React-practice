const apiurl = "https://jsonplaceholder.typicode.com/posts";

export const getUser = async()=>{
    try{
        const res = await fetch(apiurl);
        if(!res.ok){
            throw new Error("請求失敗");
            
        }
        const data = await res.json();
        return data;
    }
    catch(error){
        if(error.name === 'TypeError'){
            console.error("網路連線問題",error.message);
        }
        else{
            console.error("請求失敗",error.message);
        }
    }


}