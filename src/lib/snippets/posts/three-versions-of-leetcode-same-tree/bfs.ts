function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let node1Queue = [p]
  let node2Queue = [q]

  while(node1Queue.length && node2Queue.length) {
    let node1LevelLength = node1Queue.length
    let node2LevelLength = node2Queue.length

    for(let i = 0; i < node1LevelLength; i++) {
      let node = node1Queue.shift()
      let node2 = node2Queue.shift()

      if(node == null && node2 == null) continue
      if(node == null || node2 == null) return false
      if(node.val != node2.val) return false


      node1Queue.push(node.left)
      node1Queue.push(node.right)

      node2Queue.push(node2.left)
      node2Queue.push(node2.right)
    }

  }

  return true
}
