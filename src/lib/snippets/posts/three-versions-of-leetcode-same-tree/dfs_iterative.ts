function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let stack = [[p, q]]

  while(stack.length) {
    let [node1, node2] = stack.pop()

    if(node1 == null && node2 == null) continue
    if(node1 == null || node2 == null) return false
    if(node1.val != node2.val) return false

    stack.push([node1.left, node2.left])
    stack.push([node1.right, node2.right])
  }

  return true
};
