module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: ["error", 2], // отступы в 2 пробела
    quotes: ["error", "double"], // Использовать только двойные ковычки
    semi: ["error", "always"], // всегда надо ставить точку с запятой
    "no-unexpected-multiline": "error", // Запретить запутанные многострочные выражения
    "comma-dangle": ["error", "always-multiline"], // всегда нужно ставить запятую
    "getter-return": "error", // get всегда должен возращать данные
    "no-async-promise-executor": "error", // нельзя использовать асинхронные callback функции в new Promise
    "no-await-in-loop": "error", // Запретить await внутри циклов
    "no-class-assign": "error", // Запретить переназначение членов класса
    "no-fallthrough": "error", // Запретить провал операторов случая
    "arrow-body-style": ["error", "as-needed"], // Не требовать фигурные скобки вокруг тел функций стрелок
    camelcase: [
      // Применять соглашение об именах в camelcase
      "error",
      {
        properties: "always", // обеспечивает использование camelcase для имен свойств
        ignoreDestructuring: true, // не проверяет деструктурированные идентификаторы (но все же проверяет любое использование этих идентификаторов позже в коде)
        ignoreImports: false, // обеспечивает соблюдение стиля Camelcase для импорта
        ignoreGlobals: false, // применяет стиль CamelCase для глобальных переменных
      },
    ],
    "capitalized-comments": ["error"], // Принудительно использование заглавной буквы первой буквы комментария.
    "consistent-this": ["error", "that"], // согласованное именования при захвате текущего контекста выполнения.
    curly: ["error", "multi"], // нельзя что бы в блоке было только одно действие
    eqeqeq: ["error", "always"], // Требует использования === и !==
    "guard-for-in": "error", // Требовать, чтобы циклы for-in включали оператор if
    "init-declarations": ["error", "always"], // Требовать инициализацию в объявлениях переменных
    "max-params": ["error", 3], // максимальное количество параметров в функции = 3
    "no-else-return": "error", // Запретить блоки else после операторов return в операторах if
    "no-var": "error", // let или const вместо var
    "sort-imports": [
      // Принудительно выполнять сортированные объявления импорта внутри модулей
      "error",
      {
        ignoreCase: true, // правило игнорирует чувствительность к регистру локального имени импорта.
        ignoreDeclarationSort: false, // применять сортировку к любому типу импортиремой сущности
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ["none", "multiple", "single", "all"],
        allowSeparatedGroups: false, // правило проверяет сортировку операторов объявления импорта НЕ только для тех, которые появляются в последовательных строках.
      },
    ],
    "sort-keys": "error", // Требовать сортировку ключей объекта
    yoda: ["error", "never"], // Должно быть if (color === "red"), но не if ("red" === color)
    "space-before-function-paren": ["error", "never"], // space before "()" in function
    "space-before-blocks": ["error", "always"], // space before {}
    "space-in-parens": ["error", "never"], // без интервалов внутри круглых скобок
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: "import",
        next: "export",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["throw", "return", "function", "debugger"],
      },
      {
        blankLine: "always",
        prev: "debugger",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like",
      },
    ],
    "@typescript-eslint/type-annotation-spacing": [
      // должен быть пробел перед объявлением типа
      "error",
      {
        before: false,
        after: true,
      },
    ],
  },
};

// булевые переменные должны нчнаться с is
// методы обработчики должны или начинаться с on или заканчиваться с handler
// переменные должны быть в camelCase
// двойные ковычки
// в конце запятую
// Вместо Boolean использовать !!
// && и || должны начинаться с новой строки если больше двух условий
// унарный оператор "?" | ":" писать с начала новой строки
// адаптеры должны начинаться со слова adapter
// пробел пере после if
