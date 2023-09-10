<script>
  import Highlight, { LineNumbers } from "svelte-highlight";
  import typescript from "svelte-highlight/languages/typescript";
  import "svelte-highlight/styles/github.css";

  const code = "const add = (a: number, b: number) => a + b;";
</script>

<Highlight language={typescript} {code}  let:highlighted>
  <LineNumbers {highlighted} />
</Highlight>