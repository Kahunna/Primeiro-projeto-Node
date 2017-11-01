 /*validar cadastro*/
 function validar() {
     var nome = cadastrouser.nome.value;
     email = cadastrouser.email.value;
     sexo = cadastrouser.sexo.value;
     usuario = document.getElementById("nomeid");


     if (nome === "") {
         alert('Preencha o campo nome');
         cadastrouser.nome.focus();
         return false;
     }
     if (email === "" || email.indexOf('@') == -1) {
         alert('Preencha corretamente o campo e-mail');
         cadastrouser.nome.focus();
         return false;
     }
     if (usuario.value != "") {
         alert('Obrigado sr(a) ' + usuario.value + ' os seus dados foram encaminhados com sucesso');
     }

 }



 /*Data*/
 var now = new Date();
 var mName = now.getMonth() + 1;
 var dName = now.getDay() + 1;
 var dayNr = now.getDate();
 var yearNr = now.getYear();

 if (dName == 1) { Day = "Domingo"; }
 if (dName == 2) { Day = "Segunda-feira"; }
 if (dName == 3) { Day = "Terça-feira"; }
 if (dName == 4) { Day = "Quarta-feira"; }
 if (dName == 5) { Day = "Quinta-feira"; }
 if (dName == 6) { Day = "Sexta-feira"; }
 if (dName == 7) { Day = "Sábado"; }
 if (mName == 1) { Month = "Janeiro"; }
 if (mName == 2) { Month = "Fevereiro"; }
 if (mName == 3) { Month = "Março"; }
 if (mName == 4) { Month = "Abril"; }
 if (mName == 5) { Month = "Maio"; }
 if (mName == 6) { Month = "Junho"; }
 if (mName == 7) { Month = "Julho"; }
 if (mName == 8) { Month = "Agosto"; }
 if (mName == 9) { Month = "Setembro"; }
 if (mName == 10) { Month = "Outubro"; }
 if (mName == 11) { Month = "Novembro"; }
 if (mName == 12) { Month = "Dezembro"; }
 if (yearNr < 2000) { Year = 1900 + yearNr; } else { Year = yearNr; }
 var todaysDate = (" " + Day + ", " + dayNr + "/" + Month + "/" + Year);
 document.write('  ' + todaysDate);

 /*Hora e saudação*/
 function moveRelogio() {
     momentoAtual = new Date()
     hora = momentoAtual.getHours()
     minuto = momentoAtual.getMinutes()
     segundo = momentoAtual.getSeconds()

     if (hora <= 9) { hora = "0" + hora; }
     if (minuto <= 9) { minuto = "0" + minuto; }
     if (segundo <= 9) { segundo = "0" + segundo; }
     if (hora >= 0) { saudacao = " - Bom dia!"; }
     if (hora >= 12) { saudacao = " - Boa tarde!"; }
     if (hora >= 18) { saudacao = " - Boa noite!"; }
     horaImprimivel = hora + " : " + minuto + " : " + segundo + saudacao
     document.form_relogio.relogio.value = horaImprimivel
     setTimeout("moveRelogio()", 1000)
 }