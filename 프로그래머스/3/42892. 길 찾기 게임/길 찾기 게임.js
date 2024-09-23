class TreeNode {
    constructor(data) {
        this.data = data; 
        this.left = null; 
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null; 
    }

    
    insert(data) {
        const newNode = new TreeNode(data);
        if (!this.root) this.root = newNode; 
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data[0] < node.data[0]) {
            if (node.left === null) {
                node.left = newNode; 
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    preOrder(node, result = []) {
        if (node) {
            result.push(node.data[2]);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    postOrder(node, result = []) {
        if (node) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.data[2]);
        }
        return result;
    }
}

function solution(nodeinfo) {
    nodeinfo.forEach((v, i) => v.push(i + 1));
    nodeinfo.sort((a, b) => b[1] - a[1]);
    
    const tree = new BinaryTree();
    nodeinfo.forEach(node => {
        tree.insert(node);
    })
    
    return [tree.preOrder(tree.root), tree.postOrder(tree.root)];
}
