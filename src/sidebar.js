function Sidebar(){
    var dom=document.getElementById('root');
    var sidebar=document.createElement('div');
    sidebar.innerHTML='sidebar';
    dom.appendChild(sidebar);
}

export default Sidebar;