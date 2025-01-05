import{b as n,a as r,t as c}from"../chunks/disclose-version.CUJr2fC1.js";import{f,n as i,s as a,c as I,r as q}from"../chunks/runtime.KMv9Mpc9.js";import{C as S,T as u,a as D}from"../chunks/TwoColsContainer.DhZyNmFy.js";import{C as $}from"../chunks/CodeBlock.XXLf0HXK.js";import{T as p}from"../chunks/Title.Rt6Roc2-.js";import{P as v}from"../chunks/Paragraph.CJbIHcfA.js";import{L as F}from"../chunks/LinksList.Bw3jPvWm.js";const R=""+new URL("../assets/tree.DtdLHkRP.svg",import.meta.url).href;var A=c('<!> <img width="100%" alt="Tree graph">',1),B=c('<div slot="aside"><!></div>'),O=c("<!> <!>",1),E=c("<!> <!>",1),G=c("<!> <!>",1),H=c("<!> <!> <!> <!> <!> <!> <!> <!>",1);function V(x){S(x,{children:(L,N)=>{var _=H(),b=f(_);p(b,{level:"1",children:(t,o)=>{i();var e=n('Three versions of Leetcode "Same tree"');r(t,e)},$$slots:{default:!0}});var g=a(b,2);u(g,{children:(t,o)=>{var e=A(),s=f(e);v(s,{children:(h,m)=>{i();var d=n(`Given the roots of two binary trees p and q, write a function to check if they are the same
			or not. Two binary trees are considered the same if they are structurally identical, and the
			nodes have the same value.`);r(h,d)},$$slots:{default:!0}});var l=a(s,2);D(l,"src",R),r(t,e)},$$slots:{default:!0,aside:(t,o)=>{var e=B(),s=I(e);F(s,{links:[["LeetCode","https://leetcode.com/problems/same-tree/"]]}),q(e),r(t,e)}}});var y=a(g,2);p(y,{level:"2",children:(t,o)=>{i();var e=n("BFS");r(t,e)},$$slots:{default:!0}});var k=a(y,2);u(k,{children:(t,o)=>{var e=O(),s=f(e);v(s,{children:(h,m)=>{i();var d=n(`This implementation of isSameTree takes a level-order (breadth-first) approach using two
			queues to compare the trees level by level. Each queue maintains the nodes for one tree, and
			the algorithm processes nodes in parallel from both trees. The outer while loop continues as
			long as both queues have nodes to process, while the inner for loop handles each level of the
			trees by processing the current level's worth of nodes (tracked by node1LevelLength). For each
			pair of nodes dequeued, it performs the familiar three-way comparison: both null nodes are
			skipped, mismatched null states indicate different structures, and different values indicate
			non-identical trees. After each successful node comparison, the left and right children of
			both nodes are enqueued for later processing. This level-by-level traversal ensures that nodes
			at the same positions in both trees are compared in a predictable order, moving from top to
			bottom and left to right. The approach has the same O(n) time complexity as the other versions
			but provides a different traversal pattern that might be more suitable for certain
			applications, particularly when level-order processing is desired.`);r(h,d)},$$slots:{default:!0}});var l=a(s,2);$(l,{snippet:"posts/three-versions-of-leetcode-same-tree/bfs.ts"}),r(t,e)},$$slots:{default:!0}});var w=a(k,2);p(w,{level:"2",children:(t,o)=>{i();var e=n("DFS Iterative");r(t,e)},$$slots:{default:!0}});var T=a(w,2);u(T,{children:(t,o)=>{var e=E(),s=f(e);v(s,{children:(h,m)=>{i();var d=n(`It uses an iterative approach with a stack instead of recursion. It maintains a stack of node
			pairs to be compared, initially containing the root nodes of both trees. In each iteration, it
			pops a pair of nodes from the stack and performs the same three key comparisons as the
			recursive version: if both nodes are null, it continues to the next pair; if exactly one node
			is null, the trees differ in structure (returns false); and if the values don't match, the
			trees are different (returns false). The key difference is that instead of making recursive
			calls, it explicitly pushes the left and right child pairs onto the stack for future
			comparison. The stack manages the traversal order, effectively mimicking the call stack that
			would be created in the recursive version. The function returns true only if all node pairs
			have been processed without finding any mismatches, meaning the trees are identical. This
			iterative approach can be more space-efficient than recursion for very deep trees, as it won't
			create a deep call stack.`);r(h,d)},$$slots:{default:!0}});var l=a(s,2);$(l,{snippet:"posts/three-versions-of-leetcode-same-tree/dfs_iterative.ts"}),r(t,e)},$$slots:{default:!0}});var P=a(T,2);p(P,{level:"2",children:(t,o)=>{i();var e=n("DFS Recursive");r(t,e)},$$slots:{default:!0}});var C=a(P,2);u(C,{children:(t,o)=>{var e=G(),s=f(e);v(s,{children:(h,m)=>{i();var d=n(`It uses a recursive approach that checks three base cases: first, if both nodes are null, the
			trees are identical at this point (returns true); second, if exactly one node is null while
			the other isn't, the trees have different structures (returns false); and third, if the
			current nodes' values don't match, the trees are different (returns false). If all these
			checks pass, the function recursively compares the left and right subtrees of both nodes,
			using the AND operator (&&) to ensure both subtrees match. This depth-first traversal
			continues until either a mismatch is found or all nodes have been verified to match,
			effectively comparing the entire structure and values of both trees in O(n) time, where n is
			the number of nodes in the tree.`);r(h,d)},$$slots:{default:!0}});var l=a(s,2);$(l,{snippet:"posts/three-versions-of-leetcode-same-tree/dfs_recursive.ts"}),r(t,e)},$$slots:{default:!0}}),r(L,_)},$$slots:{default:!0}})}export{V as component};
