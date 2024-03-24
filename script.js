// Selecione o elemento com a classe 'search-box'
let search = document.querySelector('.search-box');

// Manipule o clique no ícone de busca
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active'); // Alterne a classe 'active' para o elemento 'search'
    navbar.classList.remove('remove'); // Remova a classe 'remove' do elemento 'navbar' (se necessário)
};

// Selecione o elemento com a classe 'navbar'
let navbar = document.querySelector('.navbar');

// Manipule o clique no ícone do menu
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active'); // Alterne a classe 'active' para o elemento 'navbar'
    search.classList.remove('remove'); // Remova a classe 'remove' do elemento 'search' (se necessário)
};

// Selecione o elemento 'header'
let header = document.querySelector('header');

// Adicione um ouvinte de evento de rolagem para adicionar/remover a classe 'shadow' do elemento 'header' conforme necessário
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
