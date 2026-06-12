function getdados(){
    $.ajax({
        method: "POST",
        url: "../php/session.php",
        cache: false,
        dataType: "json",
        success: function(retorno) {
            if(retorno.error != "-1"){
                window.location.replace("https://mec.sistedu.com.br/consulta-publica/");
            }else{
                var node = document.createTextNode(" " + retorno.nome);
                document.getElementById("nome").appendChild(node);
                var node = document.createTextNode(" " + retorno.dtnas);
                document.getElementById("dtnasc").appendChild(node);
                var node = document.createTextNode(" " + retorno.rg);
                document.getElementById("rg").appendChild(node);
                var node = document.createTextNode(" " + retorno.nmae);
                document.getElementById("nomemae").appendChild(node);
                var node = document.createTextNode(" " + retorno.npai);
                document.getElementById("nomepai").appendChild(node);
                var node = document.createTextNode(" " + retorno.ne);
                document.getElementById("nens").appendChild(node);
                var node = document.createTextNode(" " + retorno.ac);
                document.getElementById("aconc").appendChild(node);
                var node = document.createTextNode(" " + retorno.obs);
                document.getElementById("obs").appendChild(node);
                var node = document.createTextNode(" " + retorno.n);
                document.getElementById("nescola").appendChild(node);
                var node = document.createTextNode(" " + retorno.acri);
                document.getElementById("acr").appendChild(node);
                var node = document.createTextNode(" " + retorno.inep);
                document.getElementById("cinep").appendChild(node);
                var node = document.createTextNode(" " + retorno.r);
                document.getElementById("end").appendChild(node);
                var node = document.createTextNode(" " + retorno.b);
                document.getElementById("bairro").appendChild(node);
                var node = document.createTextNode(" " + retorno.m);
                document.getElementById("muni").appendChild(node);
                var node = document.createTextNode(" " + retorno.cep);
                document.getElementById("cep").appendChild(node);
                var node = document.createTextNode(" " + retorno.modo);
                document.getElementById("modalidades").appendChild(node);
                var node = document.createTextNode(" " + retorno.ac);
                document.getElementById("b1").appendChild(node);
                var node = document.createTextNode(" " + retorno.ac);
                document.getElementById("a2").appendChild(node);
                var node = document.createTextNode(" "+ retorno.diario);
                document.getElementById("diario").appendChild(node);
                today=new Date();
                var node = document.createTextNode(today.getDate()+"/"+setNewMes(today.getDate(), 0, today.getMonth())+"/"+today.getFullYear()+"  "+horas(today.getHours())+":"+minutos(today.getMinutes())+":"+segundos(today.getSeconds()));
                document.getElementById("consulta").appendChild(node);
            }
        }
    });
}
function getErros() {
    $.ajax({
        method: "POST",
        url: "php/session.php",
        cache: false,
        dataType: "json",
        success: function(retorno) {
            if(retorno.error == "1"){
                alert("CPF DO ALUNO OU CODIGO DO SISTEDU INCORRETO!");
            }else if (retorno.error == "2") {
                alert("PREENCHA OS CAMPOS! CPF DO ALUNO e CODIGO DO SISTEDU!");
            }else if(retorno.error == "-1"){
                window.location.replace("https://mec.sistedu.com.br/consulta-publica/aluno");
            }
        }
    });
}
function removedados(){
    $.post( "../php/session.php")
        .done(function( data ) {
            window.location.replace("https://mec.sistedu.com.br");
        })
        .fail(function() {
            alert( "error!" );
        });
}
function login(){
    $.ajax({
        method: "POST",
        url: "php/session.php",
        cache: false,
        dataType: "json",
        data: { CPF: $("#CPF").val(), password: $("#password").val() },
        success: function(retorno) {
            alert(retorno.error);
        }
    });
    alert();
}

function setNewDia(data1, data2){
    if(data1 + data2 > 30){
        data1 = 30 - data1;
        return data1+data2;
    }else{
        return data1+data2;
    }
}
function setNewMes(data1, data2, mes){
    if(data1 + data2 > 30){
        if(mes +2 < 13){
            mes = mes +2;
            if(mes < 10){
                return "0"+mes;
            }else{
                return mes +1;
            }
        }else{
            mes = 12 - mes;
            return "0"+mes;
        }
    }else{
        mes = mes+1;
        if(mes < 10){
            return "0"+mes;
        }else{
            return mes;
        }
        
    }
}
function minutos(minu){
    if(minu<10){
        return "0"+minu;
    }else{
        return minu;
    }
}
function horas(h){
    if(h<10){
        return "0"+h;
    }else{
        return h;
    }
}
function segundos(s){
    if(s<10){
        return "0"+s;
    }else{
        return s;
    }
}


