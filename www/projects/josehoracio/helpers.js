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

// https://stackoverflow.com/questions/15088215/handlebars-js-if-block-helper
function if_eq(a, b, opts) {
    if(a == b)
        return opts.fn(this);
    else
        return opts.inverse(this);
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

function arraySeparadoVirgula ( arr ) {
    if (arr) {
        return arr.join(", ");     
    } else {
        return '';
    }
   
}

function cpf(input){
    var str = input + '';
    if(str.length == 11){
        str = str.replace(/\D/g, '');
        str = str.replace(/(\d{3})(\d)/, '$1.$2');
        str = str.replace(/(\d{3})(\d)/, '$1.$2');
        str = str.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }else{
        str=str.replace(/\D/g,'');
    	str=str.replace(/^(\d{2})(\d)/,'$1.$2');
    	str=str.replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3');
    	str=str.replace(/\.(\d{3})(\d)/,'.$1/$2');
    	str=str.replace(/(\d{4})(\d)/,'$1-$2');
    }
    return str;
}

function telefone (input) {
  	var str = input+ '';
        str = str.replace(/\D/g,'');
        if(str.length === 11 ){
        str=str.replace(/^(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
    	}else{
    	str=str.replace(/^(\d{2})(\d{4})(\d{4})/,'($1) $2-$3');
    	}
    return str;
  };