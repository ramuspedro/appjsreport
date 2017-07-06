function toJSON(data) {
//   console.log(JSON.stringify(data));
  return JSON.stringify(data);
}

function toJSONCarImovel(data){
    // console.log("Console Log Cars");
    // console.log(JSON.stringify(data));
    
}

function equalsString(msg, msgType){
    if(msg === msgType){
        return true;
    }else{
        return false;
    }
}

//function beforeRender(req, res, done) {
//    require('request')({ 
//      url:"http://jsonplaceholder.typicode.com/posts", 
//      json:true 
//    }, function(err, response, body){
//        console.log(JSON.stringify(body))
//        req.data = { posts: body };
//        done();
//    });
//}

function beforeRender(done) {
    request.template.helpers += "function test() { return \"returning from the helpers added by the script\"; }";
    done();
}
