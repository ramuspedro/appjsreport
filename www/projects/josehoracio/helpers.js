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


function formatNumber (number) {
    var numero_float = parseFloat(number);
    return numero_float.toFixed(2);
}

function formatDate(d) {
    if(d.split('/').length > 2) {
        return d;
    } else {
        var date = new Date(d);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        
        return day + '/' + monthIndex + '/' + year;
    }
}

function isJson (json) {
    for(var prop in json) {
        if(json.hasOwnProperty(prop)) {
            return true;
        }
    }
    
    return false;
}


function exibeFisaQsa ( tipo ) {
  if (tipo === 'PRONAF') {
    return false;
  } else {
    return true;
  }
}

// retorna true se tipo for croqui projetado
function exibeTabelaCoordenadas ( tipo ) {
  if (tipo === 'projetado') {
    return true;
  } else {
    return false;
  }
}