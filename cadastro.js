import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById('formAluno');
const btnSalvar = document.getElementById('btnSalvar');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Desabilita o botão para evitar cliques duplicados
  btnSalvar.disabled = true;
  btnSalvar.innerText = "Salvando...";

  const aluno = {
    nome: document.getElementById('nome').value,
    cpf: document.getElementById('cpf').value,
    endereco: document.getElementById('endereco').value,
    cidadeEmissao: document.getElementById('cidadedeemisao').value,
    curso: document.getElementById('curso').value,
    iesRegistradora: document.getElementById('iesRegistradora').value,
    iesExpedidora: document.getElementById('iesExpedidora').value,
    dataIngresso: document.getElementById('dataIngresso').value,
    dataConclusao: document.getElementById('dataConclusao').value,
    dataExpedicao: document.getElementById('dataExpedicao').value,
    dataRegistro: document.getElementById('dataRegistro').value,
    dataColacao: document.getElementById('dataColacao').value,
    loginPortal: document.getElementById('loginPortal').value,
    senhaPortal: document.getElementById('senhaPortal').value,
    dataCadastro: new Date().toISOString() // Adiciona data do registro
  };

  try {
    // Envia para a coleção 'alunos' no Firebase
    await addDoc(collection(db, "alunos"), aluno);

    alert("✅ Aluno cadastrado com sucesso!");
    form.reset();

  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    alert("❌ Erro ao cadastrar. Verifique sua conexão ou permissões.");
  } finally {
    // Reabilita o botão
    btnSalvar.disabled = false;
    btnSalvar.innerText = "Salvar Aluno";
  }
});