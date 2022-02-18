export default {
  title: 'Posts/With Image',
  parameters: {
    docs: {
      page: null,
    },
  },
}

export const WithImage = () => `
  <div>
    <p>Block where you can place an image and description</p>
    <WithImage :image="'cases/figma-social/result/result'">
      Few screens from the process
    </WithImage>
  </div>
`
