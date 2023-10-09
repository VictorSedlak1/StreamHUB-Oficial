import { ref } from 'vue'

const pagamentos = ref([
  {
    id: 1,
    nome: '15dias',
    preco: 0
   
  },
  {
    id: 2,
    nome: '1mes',
    preco: 19,90
   
  },
  {
    id: 3,
    nome: '3meses',
    preco: 54,90
   
  },
  {
    id: 4,
    nome: '12meses',
    preco: 199,90
    
  }
])

  const getPagamentoById = (id) => pagamentos.value.find(c => c.id == id)


export { pagamentos, getPagamentoById  }