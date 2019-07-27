// 在页面加载完成后自动执行 addItem 函数
window.onload = addItem;

// 创建测试用的data数据
let data = [
  {title: "todo A", project: "project A", key: 1},
  {title: "todo B", project: "project B", key: 2},
  {title: "todo C", project: "project C", key: 3}
];

// 初始化添加 item 项目
function addItem() {
  let ulnode = document.getElementById('itemList');

  for(let i = 0; i < data.length; i ++) {

    // 创建所有需要用到的元素节点和文本节点
    let divTool = document.createElement('div');
    let imgDelete = document.createElement('img');
    let imgUpdate = document.createElement('img');
    let divUnFinish = document.createElement('div');
    let textUnFinish = document.createTextNode('点击完成');
    let h6node = document.createElement('h6');
    let h6Text = document.createTextNode(data[i].title);
    let pnode = document.createElement('p');
    let pText = document.createTextNode(data[i].project);
    let linode = document.createElement('li');

    //  为元素添加相应对属性
    divTool.className = "tools";
    imgDelete.setAttribute("src", "./resources/images/delete.png");
    imgDelete.className = "del";
    imgUpdate.setAttribute("src", "./resources/images/update.png");
    imgUpdate.className = "up";
    divTool.appendChild(imgDelete);
    divTool.appendChild(imgUpdate);

    // 将文本节点添加到对应到元素节点
    divUnFinish.appendChild(textUnFinish);
    divUnFinish.className = 'isFinish';

    h6node.appendChild(h6Text);
    pnode.appendChild(pText);
    linode.className = 'item';
    linode.appendChild(h6node);
    linode.appendChild(pnode);
    linode.appendChild(divTool);
    linode.appendChild(divUnFinish);

    // 将所有的item添加到html
    ulnode.appendChild(linode);
  }
}

// 显示 item 添加弹出框
const btnAdd = document.getElementById('btn_add');
const itemAdd = document.getElementById('item_add');
btnAdd.onclick = function() {
  btnAdd.className = "show";
  itemAdd.className = "";
};

// 关闭 item 添加弹出框
const btn = document.getElementById('btn');
btn.onclick = function() {
  btnAdd.className = "";
  itemAdd.className = "show";
}

// 添加 item 项目
const createItem = document.getElementById('create');
createItem.onclick = function() {
  const title = document.getElementById('title').value;
  const project = document.getElementById('project').value;
  let keyArray = data.map(function(item){
    return item.key;
  });
  let key = Math.max(...keyArray) + 1;
  
  // 将新创建的 item 添加到 html
  let ulnode = document.getElementById('itemList');
  
  // 创建所有需要用到的元素节点和文本节点
  let divTool = document.createElement('div');
  let imgDelete = document.createElement('img');
  let imgUpdate = document.createElement('img');
  let divUnFinish = document.createElement('div');
  let textUnFinish = document.createTextNode('点击完成');
  let h6node = document.createElement('h6');
  let h6Text = document.createTextNode(title);
  let pnode = document.createElement('p');
  let pText = document.createTextNode(project);
  let linode = document.createElement('li');

  //  为元素添加相应对属性
  divTool.className = "tools";
  imgDelete.setAttribute("src", "./resources/images/delete.png");
  imgDelete.className = "del";
  imgUpdate.setAttribute("src", "./resources/images/update.png");
  imgUpdate.className = "up";
  divTool.appendChild(imgDelete);
  divTool.appendChild(imgUpdate);

  // 将文本节点添加到对应到元素节点
  divUnFinish.appendChild(textUnFinish);
  divUnFinish.className = 'isFinish';
  
  h6node.appendChild(h6Text);
  pnode.appendChild(pText);
  linode.className = 'item';
  linode.appendChild(h6node);
  linode.appendChild(pnode);
  linode.appendChild(divTool);
  linode.appendChild(divUnFinish);

  // 将所有的item添加到html
  ulnode.appendChild(linode);
  
  // 重置 input 输入框到 value 为空
  document.getElementById('title').value = "";
  document.getElementById('project').value = "";
}

// 删除选中的 item 项目
const ulList = document.getElementById('itemList');
ulList.addEventListener('click', function() {
  if (window.event.target.className === "del") {
    window.event.target.parentNode.parentNode.parentNode.removeChild(window.event.target.parentNode.parentNode);
  }
});

// 修改选中的 item 项目
const updateItem = document.getElementById('item_update');
const close = document.getElementById('btn_close');
ulList.addEventListener('click', function() {
  const target = window.event.target;

  //  将修改框显示出来
  if (target.className === "up") {
    updateItem.className = "";
  }

  // 获取到 input 
  const upTitle = document.getElementById('upTitle');
  const upProject = document.getElementById('upProject');

  // 获取 item 项目中 title project 对应的节点
  const title = target.parentNode.parentNode.childNodes[0];
  const project = target.parentNode.parentNode.childNodes[1];

  // 将获取到到 item 对应到值放入 input 的 value 值中
  upTitle.value = title.childNodes[0].nodeValue;
  upProject.value = project.childNodes[0].nodeValue;


  // 将新修改的值对应同步反映到 item 项目中
  close.onclick = function() {
    title.childNodes[0].nodeValue = upTitle.value;
    project.childNodes[0].nodeValue = upProject.value;
    updateItem.className = "show";
  }
});

// 点击 ‘点击完成’ 切换提示信息
ulList.addEventListener('click', function() {
  const target = window.event.target;
  if(target.className === "isFinish") {
    target.className = "isFinish finished";
    target.childNodes[0].nodeValue = "已完成"
  }
});


