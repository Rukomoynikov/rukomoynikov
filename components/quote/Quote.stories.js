export default {
  title: 'Posts/Quote',
  args: {
    size: null
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['', 'small']
      },
      defaultValue: null
    }
  }
}

export const Quote = (args, { argTypes }) => ({
  template: `<Quote :size="size">
              <span>Damn cool feeling, when something was not in&nbsp;the&nbsp;universe,</span>
              <span class="nobreak">and «<img src="assets/images/icons/magic-wand.svg" class="icon">bam»</span>
              <span>appeared</span>
            </Quote>`,
  props: Object.keys(argTypes)
})
