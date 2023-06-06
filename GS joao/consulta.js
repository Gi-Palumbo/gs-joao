// Função para carregar os clientes do LocalStorage e atualizar a tabela de consulta
function loadCustomers() {
    let customers = localStorage.getItem('customers');
    if (customers) {
      customers = JSON.parse(customers);
  
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      const filterSelect = document.getElementById('filterSelect').value;
  
      let filteredCustomers = customers;
      if (searchInput) {
        filteredCustomers = filteredCustomers.filter(customer =>
          customer[filterSelect].toLowerCase().includes(searchInput)
        );
      }
  
      const tableBody = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '';
  
      filteredCustomers.forEach(customer => {
        const row = tableBody.insertRow();
  
        const sexoCell = row.insertCell();
        sexoCell.textContent = customer.sexo;
  
        const nomeCell = row.insertCell();
        nomeCell.textContent = customer.nome;
  
        const emailCell = row.insertCell();
        emailCell.textContent = customer.email;
  
        const enderecoCell = row.insertCell();
        enderecoCell.textContent = customer.endereco;
      });
    }
  }
  
  // Função para voltar ao menu principal
  function goToMainPage() {
    window.location.href = "index.html";
  }
  
  // Evento para a busca e filtro
  document.getElementById('searchInput').addEventListener('input', loadCustomers);
  document.getElementById('filterSelect').addEventListener('change', loadCustomers);
  
  // Carregar a tabela de consulta ao carregar a página
  loadCustomers();
  