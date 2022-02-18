export default {
  title: 'Posts/Title',
  args: {
    level: 2
  },
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [2, 3]
      },
      defaultValue: 2
    },
  }
}

export const Title = (args, { argTypes }) => ({
  template: `<Title :level="level">Заголовок</Title>`,
  props: Object.keys(argTypes)
})
