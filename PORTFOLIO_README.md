# 🚀 Portfólio Futurista

Site de portfólio com tema futurista desenvolvido com HTML5, CSS3 e JavaScript puro.

## 📁 Estrutura do Projeto

### Arquivos Principais
- `style.css` - CSS global com tema futurista
- `main.js` - JavaScript global com todas as funcionalidades
- `inicio.html` - Página inicial com splash screen e navegação
- `projetos.html` - Galeria de projetos com cards interativos
- `ferramentas.html` - Demonstração de 10 efeitos/animações
- `sobre.html` - Página sobre com carrossel de skills
- `contato.html` - Página de contato com 5 botões sociais

## 🎨 Características do Design

### Tema Futurista
- Cores base: tons escuros (#0a0a0f, #1a1a2e, #16213e)
- Cores neon: azul (#00d4ff) e ciano (#00ffff)
- Tipografia: Orbitron (títulos) e Rajdhani (textos)
- Efeitos de brilho suave e transições avançadas

### Funcionalidades
- Splash screen animada em todas as páginas
- Fundo com partículas flutuantes
- Animações de scroll com Intersection Observer
- Efeitos de mouse parallax
- Cards com bordas neon rotativas
- Carrossel de skills controlável
- Modais para demonstração de efeitos
- Design 100% responsivo

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com:
  - CSS Variables
  - Flexbox e Grid
  - Keyframes animations
  - Media queries
  - Gradients e shadows
- **JavaScript ES6+** - Funcionalidades interativas:
  - Classes
  - Intersection Observer API
  - Event handling
  - DOM manipulation

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:
- Breakpoint principal: 768px
- Grid adaptativo
- Imagens otimizadas
- Touch gestures no carrossel

## 🚀 Como Usar

1. **Servidor local:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Acessar:** `http://localhost:8000/inicio.html`

3. **Navegação:**
   - Início: Landing page com navegação
   - Projetos: 12 projetos com links externos
   - Ferramentas: 10 efeitos demonstrativos
   - Sobre: Biografia + skills carousel
   - Contato: 5 botões de contato

## 📂 Páginas Detalhadas

### 🏠 inicio.html
- Splash screen "INICIALIZANDO"
- Layout duas colunas: nome + foto
- Navegação com 4 cards animados
- Efeito digital no nome "NUYZZE"

### 🚀 projetos.html
- 12 projetos do portfólio original
- Cards com hover 3D e glow
- Botões para acesso externo
- Animações escalonadas

### 🛠️ ferramentas.html
- 10 efeitos interativos:
  - Glow Effect
  - Parallax
  - Neon Border
  - Pulse Animation
  - Glitch Text
  - Floating
  - Morph
  - Particle
  - Hologram
  - Matrix
- Modais com demonstrações

### 👤 sobre.html
- Texto sobre o desenvolvedor
- Carrossel infinito com 6 skills:
  - Java ☕
  - HTML5 🌐
  - CSS3 🎨
  - JavaScript ⚡
  - Python 🐍
  - React.js ⚛️
- Controle por mouse/touch

### 📞 contato.html
- 5 botões grandes:
  - WhatsApp 📱
  - Email 📧
  - Instagram 📸
  - TikTok 🎵
  - GitHub 💻
- Efeitos ripple
- Links personalizáveis

## 🎯 Recursos Especiais

### Animações
- Partículas flutuantes
- Glitch text effect
- Rotating conic gradients
- Smooth transitions
- Hover transformations

### Interatividade
- Mouse parallax
- Touch gestures
- Intersection Observer
- Modal system
- Ripple effects

### Performance
- CSS variables para otimização
- Lazy loading de efeitos
- Debounced resize handlers
- Optimized animations

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `style.css`:
```css
:root {
    --neon-blue: #00d4ff;
    --neon-cyan: #00ffff;
    --bg-primary: #0a0a0f;
}
```

### Projetos
Modifique o array `projects` em `main.js`:
```javascript
{
    title: "NOME DO PROJETO",
    description: "Descrição do projeto",
    url: "https://link-do-projeto.com",
    icon: "🚀"
}
```

### Contatos
Atualize os links em `contato.html`:
```html
<a href="SEU_LINK" class="contact-btn">
```

## 📜 Código Limpo

- Sem comentários conforme solicitado
- Estrutura organizada
- Código de nível sênior
- Padrões modernos
- Nomenclatura consistente

---

**Desenvolvido com 💙 usando tecnologias web modernas**