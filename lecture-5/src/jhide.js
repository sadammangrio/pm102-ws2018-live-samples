class Query {
    constructor(nodes) {
        this.nodes = nodes
    }

    hide() {
        for (let node of  this.nodes) {
            node.hidden = true
        }
    }

    show() {
        for (let node of  this.nodes) {
            node.hidden = false
        }
    }
}

function $(selector) {
    if (selector.startsWith('.')) {
        return new Query(
            document.getElementsByClassName(selector.slice(1))
        )
    } else if(selector.startsWith('#')) {
        return new Query([document.getElementById(selector.slice(1))])
    } else {
        console.error('no valid selector')
    }
}

global.$ =  $