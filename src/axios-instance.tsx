import axios from "axios";

const instance_json = axios.create({baseURL : "", timeout : 50, headers : {
    
}});

const as = axios.get("").then();




// 인증헤더 필요할때마다 넣음?

// content-type 를 넣는다는거 자체가 인증헤더도 필요할때 넣는다는게 아닐까?


// 인증
// base로 인증 header르 보내게 하는데
// 안보내도 되는 페이지에서는 그냥 header 자체를 니가 직접 작성한건가?
// token : 
// Authentication : 


// json

// multipart