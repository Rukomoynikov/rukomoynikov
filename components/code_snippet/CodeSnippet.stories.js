export default {
  title: 'Posts/CodeSnippet',
  args: {
    fileName: 'Filename',
    short: false,
    icon: null
  }
}

export const CodeSnippet = (args, { argTypes }) => ({
  template: `
<CodeSinppet :short="short" :fileName="fileName" :icon="icon">
<div>stocks_bot
├── README.md
├── lib
│   ├── stocks_bot
│   │   └── application.ex
│   └── stocks_bot.ex
├── mix.exs
└── test
├── stocks_bot_test.exs
└── test_helper.exs
</div>  
</CodeSinppet>
  `,
  props: Object.keys(argTypes)
})
