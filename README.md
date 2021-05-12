# Aquecimento Semana JS Expert

## Aula 01 - EcmaScript Modules

## Aula 02 - Técnicas de Debugging para Node.js

Exemplo de aplicação para calcular salário

1. Comando utilizados para debug no node:

```bash
node inspect index.mjs
```

a) Listar as 100 primeiras linhas:
```bash
debug> list(100)
```

b) Incluir breakpoint na linha 13:
```bash
debug> setBreakpoint(13)
```

c) Incluir breakpoint na linha 13:
```bash
debug> cont
```

d) Visualizar a url da requisição:
```bash
debug> exec req.url
```

e) Retirar barra da url:
```bash
debug> exec req.url.replace('/', '')
```

f) Extrair as propriedades da query string:
```bash
debug> new URLSearchParams(url)
```

g) Fazendo spread para retornar os valores:
```bash
debug> exec [...new URLSearchParams(url)]
```

h) Pegando somente um valor do array:
```bash
debug> exec new URLSearchParams(url).get("salary")
```

i) Usando Debug Repl:
```bash
debug> repl
```

---

2. Comando curl no segundo terminal:

```bash
curl "localhost:3000/?salary=2000&discount=15"
```

---
---

### Para debugging no navegador

```bash
node --inspect-brk index.mjs
```