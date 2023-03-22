

// <div id='box'>
//   <input id='abc' class='zzz xxx vvv' type='text'>
// </div

//위를 풀어쓰면 아래처럼 되있다

let box, input;
box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};

console.log(input);