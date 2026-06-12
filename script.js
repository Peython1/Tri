console.log("SCRIPT CARREGADO");

import { db, auth } from './firebase.js';

import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// LOGIN
window.login = function () {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, senha);
    })
    .then(() => {
      window.location.href = "painel.html";
    })
    .catch((error) => {
      alert("Email ou senha incorretos");
      console.log(error);
    });
};


// PROTEÇÃO + VALIDADE
onAuthStateChanged(auth, async (user) => {

  if (!user) {
    if (window.location.pathname.includes("painel.html")) {
      window.location.href = "index.html";
    }
    return;
  }

  try {

    const docRef = doc(db, "usuarios", user.email);
    const docSnap = await getDoc(docRef);

    console.log("Email do login:", user.email);
    console.log("Documento existe?", docSnap.exists());

    if (!docSnap.exists()) {
      alert("Usuário não autorizado");
      await signOut(auth);
      window.location.href = "index.html";
      return;
    }

    const dados = docSnap.data();

    const hoje = new Date();
    const validade = new Date(dados.validade + "T23:59:59");

    console.log("Hoje:", hoje);
    console.log("Validade:", validade);

    if (hoje > validade) {
      alert("Seu acesso venceu! Entre em contato para renovar.");

      await signOut(auth);
      window.location.href = "index.html";
      return;
    }

    if (window.location.pathname.includes("index.html")) {
      window.location.href = "painel.html";
    }

  } catch (error) {
    console.log("Erro ao verificar usuário:", error);
  }

});


// MENU TOGGLE
window.toggleMenu = function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
};


// SUBMENU
window.toggleSubmenu = function(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
};


// CARREGAR PÁGINA


function abrirCadastroPorInstituicao(instituicaoId) {
  // Salva qual instituição foi selecionada
  localStorage.setItem('instituicaoSelecionada', instituicaoId);

  // Abre a mesma página de cadastro
  window.location.href = 'cadastro-aluno.html';
}