function Content(){
    var dom=document.getElementById('root');
    var content=document.createElement('div');
    content.innerHTML='content';
    dom.appendChild(content);
}

export default Content;