# Kinebot — Teste Técnico

Aplicativo mobile desenvolvido em React Native CLI como parte do processo seletivo da Kinebot. O app apresenta três telas principais para visualização e análise de relatórios AEP (Análise Ergonômica do Posto).

---

## Telas

| Home | Lista AEP | Detalhe AEP |
|------|-----------|-------------|
| Banner de acesso, upload e navegação por tipo de relatório | FlatList de relatórios com card e data | Informações do posto, gráfico de pizza interativo e ações |

---

## Como rodar

### Pré-requisitos
- Node >= 22.11.0
- JDK 17
- Android Studio + emulador ou dispositivo físico via USB

### Instalação

```bash
npm install
```

### Primeira execução (build nativo)

```bash
npm run android
```

### Execuções seguintes

```bash
npm start
```

> O app abre automaticamente via Fast Refresh — não é necessário rebuildar a cada alteração de JS/TS.

---

## Estrutura do projeto

```
src/
├── assets/
│   ├── icons/          # SVGs exportados do Figma
│   └── images/         # Logo
├── components/
│   ├── Button/         # Botão unificado com variantes de tamanho e estilo
│   ├── Header/         # Cabeçalho com gradiente e suporte a voltar
│   ├── InfoRow/        # Linha de label + valor para fichas de dados
│   ├── PieChart/       # Gráfico de pizza customizado com react-native-svg
│   └── ReportCard/     # Card de relatório para listas
├── data/
│   └── mock.ts         # Dados simulados e tipos TypeScript
├── navigation/
│   ├── index.tsx       # Configuração de rotas (Stack + BottomTabs)
│   └── TabBar/         # Tab bar customizada
├── screens/
│   ├── HomeScreen/
│   ├── AEPListScreen/
│   └── AEPDetailScreen/
└── theme/
    └── index.ts        # Design tokens (cores, tipografia, espaçamento, sombras)
```

Cada componente e tela segue a convenção `NomeDoComponente/index.tsx` + `NomeDoComponente/styles.ts`, mantendo lógica e estilos próximos sem misturá-los no mesmo arquivo.

---

## Decisões técnicas

### React Native CLI
Utilizado conforme especificado — sem Expo — para controle total sobre dependências nativas.

### Componente `Button` unificado
Em vez de criar componentes separados para cada variação de botão, foi criado um único `Button` com props:
- `size: 'sm' | 'lg'` — altura 40px ou 56px
- `variant: 'outlined' | 'primary'` — borda ou fundo sólido
- `active: boolean` — estado desabilitado com fundo cinza
- `Icon?` — ícone SVG opcional

### Gráfico de pizza sem biblioteca
O `PieChart` foi implementado do zero com `react-native-svg`, calculando os paths SVG de cada fatia via trigonometria. Isso permite controle total sobre aparência e comportamento — incluindo tooltip em formato de balão com animação de fade-in ao tocar em uma fatia.

> A animação usa `Animated` da própria React Native com `useNativeDriver: false`, necessário pois props SVG não são suportadas pelo native driver. Para um projeto em produção, `react-native-reanimated` seria a escolha ideal.

### Design tokens centralizados
Todas as constantes visuais (cores, tipografia, espaçamentos, radii, sombras) vivem em `src/theme/index.ts`, garantindo consistência e fácil manutenção.

### Separação de estilos
Estilos vivem em `styles.ts` dentro da pasta do próprio componente — nunca misturados com o JSX — seguindo o padrão `StyleSheet.create`.

---

## Dependências principais

| Pacote | Uso |
|--------|-----|
| `@react-navigation/native` + `native-stack` + `bottom-tabs` | Navegação Stack + Tab |
| `react-native-svg` | Ícones SVG e gráfico de pizza customizado |
| `react-native-linear-gradient` | Gradiente do header |
| `react-native-safe-area-context` | Suporte a notch e barra de status translúcida |
| `react-native-gesture-handler` | Requisito do React Navigation |
