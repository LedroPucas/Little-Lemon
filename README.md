# 🍋 Little Lemon Restaurant

Aplicação web moderna para reserva de mesas no restaurante Little Lemon, construída com React e featuring um sistema completo de booking com validação de formulários e processamento de pagamentos.

## 🌟 Imagens reais do projeto:

<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/dc89c5c3-becd-46a6-b2c9-ba371e4b7eb0" />
<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/1fa8bbdc-a644-48d5-bc0c-5a620493a364" />
[Clique aqui para testar](https://little-lemon-sage-delta.vercel.app/)

## 🌟 Funcionalidades

- **🏠 Página Inicial** - Apresentação do restaurante com menu e testimonials
- **📅 Sistema de Reservas** - Seleção de data e horário disponíveis
- **👤 Cadastro de Usuários** - Formulário de registro com validação
- **💳 Processamento de Pagamentos** - Sistema de pagamento seguro com validação de cartão
- **✅ Confirmação de Reserva** - Página de sucesso com detalhes da reserva
- **📱 Design Responsivo** - Interface adaptável para todos dispositivos

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.2.3
- **Routing**: React Router DOM 7.13.0
- **Styling**: CSS Modules & CSS3
- **Build Tool**: Create React App
- **Testing**: Jest & React Testing Library

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/LedroPucas/Little-Lemon.git
cd Little-Lemon
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Abra no navegador**
Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── header/          # Componente de navegação
│   ├── main/            # Página principal
│   ├── footer/          # Rodapé do site
│   └── bookpage/        # Sistema de reservas
│       ├── bookpage.js          # Formulário de reserva
│       ├── SignupPage.js        # Cadastro de usuário
│       ├── PaymentPage.js       # Processamento de pagamento
│       └── ConfirmedBooking.js  # Confirmação de reserva
├── assets/              # Imagens e recursos estáticos
├── App.js              # Componente principal com rotas
└── index.js            # Ponto de entrada da aplicação
```

## 🎯 Funcionalidades Principais

### Sistema de Reservas
- **Seleção de Data**: Calendário interativo para escolha da data
- **Horários Disponíveis**: Lista dinâmica de horários baseada na data
- **Validação em Tempo Real**: Feedback instantâneo para o usuário
- **Fluxo Multi-passo**: Processo guiado de reserva → cadastro → pagamento

### Formulários Inteligentes
- **Validação Client-side**: Verificação de dados antes do envio
- **Formatação Automática**: Máscaras para número de cartão e data de validade
- **Tratamento de Erros**: Mensagens claras para correção de problemas
- **UX Otimizada**: Campos organizados e feedback visual

### Design Responsivo
- **Mobile-first**: Design priorizado para dispositivos móveis
- **Layout Flexível**: Adaptação fluida entre diferentes telas
- **Navegação Intuitiva**: Menu responsivo com boa usabilidade

## 🧪 Testes

### Executar testes
```bash
npm test
```

### Testes disponíveis
- Testes unitários para componentes
- Testes de integração para formulários
- Testes de acessibilidade (a11y)
- Coverage de código

## 📦 Build para Produção

### Gerar build otimizado
```bash
npm run build
```

O build será gerado na pasta `build/` com:
- Código minificado e otimizado
- Hash nos nomes dos arquivos para cache
- Bundle分割 para melhor performance

## 🔧 Scripts Disponíveis

- `npm start` - Servidor de desenvolvimento
- `npm test` - Executar testes em modo watch
- `npm run build` - Build para produção
- `npm run eject` - Ejetar configuração (irreversível)

## 🎨 Design & UX

### Principais Características
- **Design Limpo**: Interface moderna e intuitiva
- **Cores Temáticas**: Paleta baseada na marca Little Lemon
- **Tipografia**: Fontes legíveis e hierarquia visual clara
- **Microinterações**: Animações sutis para melhor UX
- **Acessibilidade**: Suporte a leitores de tela e navegação por teclado

### Componentes Reutilizáveis
- Header com navegação responsiva
- Footer com informações de contato
- Formulários com validação integrada
- Cards de menu e testimonials
- Botões com estados visuais

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## 👨‍💻 Autor

**Pedro "LedroPucas"**
- GitHub: [@LedroPucas](https://github.com/LedroPucas)
- Projeto: Little Lemon Restaurant Booking System



**⭐ Se este projeto ajudou você, deixe uma estrela!**


📧 **Contato**: Para dúvidas ou sugestões, abra uma issue ou envie um e-mail.
