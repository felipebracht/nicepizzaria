// ==================== SABORES DATA ====================
const sabores = [
    // Salgadas
    { nome: "Alho e Óleo", ing: "Molho, mussarela, alho, Catupiry e parmesão" },
    { nome: "Atum", ing: "Molho, mussarela, atum ralado e tomates picados" },
    { nome: "Bacon", ing: "Molho, mussarela e bacon picado" },
    { nome: "Bacon ao 4 Queijos", ing: "Molho, mussarela, provolone, parmesão, Catupiry e bacon" },
    { nome: "Bacon com Cheddar", ing: "Molho, mussarela, bacon e cheddar" },
    { nome: "Brócolis", ing: "Molho, mussarela, brócolis e Catupiry" },
    { nome: "Brócolis com Bacon", ing: "Molho, mussarela, brócolis e bacon" },
    { nome: "Calabresa", ing: "Molho, mussarela e calabresa fatiada" },
    { nome: "Calabresa Acebolada", ing: "Molho, mussarela, calabresa, cebola e azeitona" },
    { nome: "Camarão", ing: "Molho, mussarela, camarão ao molho vermelho (Adicional R$9,00)", adicional: 9.00 },
    { nome: "Carne de Panela com Doritos", ing: "Molho, mussarela, carne desfiada e Doritos" },
    { nome: "Carbonara", ing: "Molho, mussarela, bacon, cebola, ovos e creme de leite" },
    { nome: "Cinco Queijos", ing: "Molho, mussarela, Catupiry, provolone, parmesão e gorgonzola" },
    { nome: "Chester", ing: "Molho, mussarela, chester, Catupiry e orégano" },
    { nome: "Coração", ing: "Molho, mussarela, coração de galinha ao molho" },
    { nome: "Copa com Figo", ing: "Molho, mussarela, copa fatiada e figo em calda" },
    { nome: "Corn Bacon", ing: "Molho, mussarela, bacon e milho" },
    { nome: "Filé", ing: "Molho, mussarela, iscas de carne e Catupiry" },
    { nome: "Filé ao Alho e Óleo", ing: "Molho, mussarela, iscas de carne e alho" },
    { nome: "Filé aos 4 Queijos", ing: "Molho, mussarela, provolone, parmesão, Catupiry e carne" },
    { nome: "Filé ao molho Mostarda", ing: "Molho, mussarela, iscas de carne e molho de mostarda" },
    { nome: "Filé com Palha", ing: "Molho, mussarela, iscas de carne e batata palha" },
    { nome: "Frango com Catupiry", ing: "Molho, mussarela, frango desfiado e Catupiry" },
    { nome: "Frango com Cheddar", ing: "Molho, mussarela, frango desfiado e cheddar" },
    { nome: "Frango com Milho", ing: "Molho, mussarela, frango desfiado e milho" },
    { nome: "Fricassê de Carne", ing: "Molho, mussarela, carne, creme de leite e batata palha" },
    { nome: "Fricassê de Frango", ing: "Molho, mussarela, frango, creme de leite e batata palha" },
    { nome: "Italiana", ing: "Molho, mussarela, salame, azeitona, cebola e orégano" },
    { nome: "Jardineira", ing: "Molho, mussarela, milho, ervilha, palmito e pimentão" },
    { nome: "Lasanha", ing: "Molho, mussarela, carne moída e Catupiry" },
    { nome: "Lombo", ing: "Molho, mussarela, lombo canadense e Catupiry" },
    { nome: "Lombo com Abacaxi", ing: "Molho, mussarela, lombo canadense e abacaxi" },
    { nome: "Marguerita", ing: "Molho, mussarela, tomate, manjericão e Catupiry" },
    { nome: "Mexicana", ing: "Molho, mussarela, carne moída, cebola, pimentão e pimenta" },
    { nome: "Milho", ing: "Molho, mussarela, milho e orégano" },
    { nome: "Milho ao Molho Branco", ing: "Molho, mussarela, milho e creme de leite" },
    { nome: "Mussarela", ing: "Molho, mussarela e orégano" },
    { nome: "Palmito", ing: "Molho, mussarela, palmito e tomate" },
    { nome: "Picanha", ing: "Molho, mussarela e fatias de picanha (Adicional R$9,00)", adicional: 9.00 },
    { nome: "Picanha ao Alho e Óleo", ing: "Molho, mussarela, picanha e alho (Adicional R$9,00)", adicional: 9.00 },
    { nome: "Portuguesa", ing: "Molho, mussarela, presunto, ovos, azeitona e cebola" },
    { nome: "Quatro Queijos", ing: "Molho, mussarela, Catupiry, provolone e parmesão" },
    { nome: "Romana", ing: "Molho, mussarela, presunto, tomate e parmesão" },
    { nome: "Seis Queijos", ing: "Molho, mussarela, Catupiry, provolone, parmesão e cheddar" },
    { nome: "Siciliana", ing: "Molho, mussarela, bacon, champignon, azeitonas e Catupiry" },
    { nome: "Strogonoff de Carne", ing: "Molho, mussarela, carne ao molho de strogonoff" },
    { nome: "Strogonoff de Frango", ing: "Molho, mussarela, frango ao molho vermelho e Catupiry" },
    { nome: "Tomate Seco com Rúcula", ing: "Molho, mussarela, tomate seco e rúcula" },
    { nome: "Tropical", ing: "Molho, mussarela, calabresa moída, palmito e Catupiry" },
    { nome: "Vegetariana", ing: "Molho, mussarela, palmito, milho, ervilha, brócolis e parmesão" },
    
    // Doces
    { nome: "Abacaxi", ing: "Doce de leite, abacaxi e chocolate branco" },
    { nome: "Abacaxi com Coco", ing: "Doce de leite, chocolate branco, coco e calda" },
    { nome: "Amendoim", ing: "Doce de leite, amendoim e chocolate" },
    { nome: "Banana", ing: "Doce de leite, banana, canela e chocolate branco" },
    { nome: "Beijinho", ing: "Chocolate branco, coco e leite condensado" },
    { nome: "Branca de Neve", ing: "Doce de leite e chocolate branco" },
    { nome: "Califórnia", ing: "Doce de leite, pêssego, figo, abacaxi, canela e mussarela" },
    { nome: "Chocolate Branco com Nozes", ing: "Doce de leite, chocolate branco e nozes (Adicional R$5,00)", adicional: 5.00 },
    { nome: "Dois Amores", ing: "Doce de leite, chocolate branco e chocolate preto" },
    { nome: "M&M's", ing: "Doce de leite, chocolate e M&M's" },
    { nome: "Morango Branco", ing: "Doce de leite, chocolate branco, morangos e creme de leite" },
    { nome: "Morango Moreno", ing: "Doce de leite, chocolate preto, morangos e creme de leite" },
    { nome: "Nega Maluca", ing: "Doce de leite e chocolate preto" },
    { nome: "Prestígio", ing: "Doce de leite, chocolate preto e coco" },
    { nome: "Romeu e Julieta", ing: "Leite condensado, goiabada, creme de leite e mussarela" },
    { nome: "Sonho de Valsa", ing: "Doce de leite, chocolate preto e Sonho de Valsa" },
    { nome: "Oreo", ing: "Doce de leite, chocolate preto e Oreo (Adicional R$5,00)", adicional: 5.00 },
    { nome: "Ouro Branco", ing: "Doce de leite, chocolate branco e Ouro Branco" }
];

// ==================== PRICES ====================
const precos = {
    OMelhorCombo: 129.90,
    ComboFinalDeSemana: 179.90,
    ComboEconomico: 59.90,
    ComboRodizio: 139.90,
    ComboDaCasa: 69.90,
    Pequena: 59.90,
    Media: 79.90,
    Grande: 97.90,
    Gigante: 119.00
};

const qtdSabores = {
    OMelhorCombo: 4,
    ComboFinalDeSemana: 11,
    ComboEconomico: 2,
    ComboRodizio: 6,
    ComboDaCasa: 3,
    Pequena: 1,
    Media: 2,
    Grande: 3,
    Gigante: 4
};

const combosComBebida = ['OMelhorCombo', 'ComboFinalDeSemana', 'ComboEconomico', 'ComboRodizio', 'ComboDaCasa'];

// ==================== DOM ELEMENTS ====================
const tamanhoSelect = document.getElementById('tamanho');
const saboresContainer = document.getElementById('saboresContainer');
const entregaSelect = document.getElementById('entrega');
const enderecoContainer = document.getElementById('enderecoContainer');
const bairroSelect = document.getElementById('bairro');
const bebidaSelect = document.getElementById('bebida');
const orderForm = document.getElementById('orderForm');

// ==================== FUNCTIONS ====================
function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

function atualizarSabores() {
    const tamanho = tamanhoSelect.value;
    saboresContainer.innerHTML = '';

    // Esconder bebida se combo já inclui
    const bebidaGroup = bebidaSelect.closest('.form-group');
    if (tamanho && combosComBebida.includes(tamanho)) {
        bebidaSelect.value = '';
        bebidaGroup.style.display = 'none';
    } else {
        bebidaGroup.style.display = '';
    }

    if (!tamanho) {
        calcularTotal();
        return;
    }
    
    const qtd = qtdSabores[tamanho] || 0;
    
    for (let i = 0; i < qtd; i++) {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.innerHTML = `<i class="fas fa-pizza-slice"></i> Sabor ${i + 1}`;
        
        const select = document.createElement('select');
        select.required = true;
        select.innerHTML = '<option value="">Selecione o sabor</option>';
        
        sabores.forEach(sabor => {
            const option = document.createElement('option');
            option.value = sabor.nome;
            option.textContent = `${sabor.nome} - ${sabor.ing}`;
            if (sabor.adicional) {
                option.dataset.adicional = sabor.adicional;
            }
            select.appendChild(option);
        });
        
        select.addEventListener('change', calcularTotal);
        
        formGroup.appendChild(label);
        formGroup.appendChild(select);
        saboresContainer.appendChild(formGroup);
    }
    
    calcularTotal();
}

function mostrarEndereco() {
    const entrega = entregaSelect.value;
    enderecoContainer.style.display = entrega === 'Tele-entrega' ? 'block' : 'none';
    
    if (entrega === 'Tele-entrega') {
        document.getElementById('rua').required = true;
        document.getElementById('numero').required = true;
        bairroSelect.required = true;
    } else {
        document.getElementById('rua').required = false;
        document.getElementById('numero').required = false;
        bairroSelect.required = false;
    }
    
    calcularTotal();
}

function calcularTotal() {
    let subtotal = 0;
    let taxaEntrega = 0;
    
    // Preço base do tamanho
    const tamanho = tamanhoSelect.value;
    if (tamanho && precos[tamanho]) {
        subtotal = precos[tamanho];
    }
    
    // Adicionais dos sabores
    const saborSelects = saboresContainer.querySelectorAll('select');
    saborSelects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        if (selectedOption && selectedOption.dataset.adicional) {
            subtotal += parseFloat(selectedOption.dataset.adicional);
        }
    });
    
    // Bebida
    const bebida = bebidaSelect.value;
    if (bebida) {
        const preco = parseFloat(bebida.split(' - ')[1]);
        subtotal += preco;
    }
    
    // Taxa de entrega
    if (entregaSelect.value === 'Tele-entrega') {
        const bairroValue = parseFloat(bairroSelect.value);
        if (!isNaN(bairroValue)) {
            taxaEntrega = bairroValue;
        }
    }
    
    // Atualizar exibição
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('taxaEntrega').textContent = formatCurrency(taxaEntrega);
    document.getElementById('totalFinal').textContent = formatCurrency(subtotal + taxaEntrega);
}

function enviarWhatsApp(e) {
    e.preventDefault();
    
    let mensagem = '🍕 *Pedido Nice Pizzaria*%0A%0A';
    
    // Tamanho
    const tamanho = tamanhoSelect.options[tamanhoSelect.selectedIndex].text;
    mensagem += `*Tamanho:* ${tamanho}%0A%0A`;
    
    // Sabores
    const saborSelects = saboresContainer.querySelectorAll('select');
    mensagem += '*Sabores:*%0A';
    saborSelects.forEach((select, i) => {
        if (select.value) {
            mensagem += `${i + 1}. ${select.value}%0A`;
        }
    });
    
    // Remover ingredientes
    const remover = document.getElementById('remover').value;
    if (remover) {
        mensagem += `%0A*Observações:* ${remover}%0A`;
    }
    
    // Bebida
    const bebida = bebidaSelect.value;
    if (bebida) {
        const bebidaNome = bebida.split(' - ')[0];
        mensagem += `%0A*Bebida:* ${bebidaNome}%0A`;
    }
    
    // Pagamento
    const pagamento = document.getElementById('pagamento').value;
    mensagem += `%0A*Pagamento:* ${pagamento}%0A`;
    
    // Entrega
    const entrega = entregaSelect.value;
    mensagem += `*Entrega:* ${entrega}%0A`;
    
    if (entrega === 'Tele-entrega') {
        const rua = document.getElementById('rua').value;
        const numero = document.getElementById('numero').value;
        const bairro = bairroSelect.options[bairroSelect.selectedIndex].text;
        mensagem += `*Endereço:* ${rua}, Nº ${numero}, ${bairro}%0A`;
    }
    
    // Total
    const total = document.getElementById('totalFinal').textContent;
    mensagem += `%0A*${total}*`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/5554994897632?text=${mensagem}`, '_blank');
}

// ==================== EVENT LISTENERS ====================
if (tamanhoSelect) {
    tamanhoSelect.addEventListener('change', atualizarSabores);
}

if (entregaSelect) {
    entregaSelect.addEventListener('change', mostrarEndereco);
}

if (bairroSelect) {
    bairroSelect.addEventListener('change', calcularTotal);
}

if (bebidaSelect) {
    bebidaSelect.addEventListener('change', calcularTotal);
}

if (orderForm) {
    orderForm.addEventListener('submit', enviarWhatsApp);
}

// Inicializar
calcularTotal();
