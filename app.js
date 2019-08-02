console.log(localStorage);
let data = [];

// 2回目に読み込むとき。
if (localStorage.getItem('task')){
  data = JSON.parse(localStorage.getItem('task'));
}
// ストレージにデータがあったがデータの中に上書きされる。
// ーーーーーーー

// クリックイベント
document.getElementById('add').addEventListener('click',
  function(){
    // 預ける
    data.push(document.getElementById('task').value);
    // creatDOMの中のものをまとめて書いた奴。
    creatDOM(document.getElementById('task').value);
    localStorage.setItem('task', JSON.stringify(data));
  }
);
// 取り出す
// dataに格納されたHTMLを描画する
for (const value of data) {
  creatDOM(value);
}

// 引数、値が変わるか変わらないかをみる。（　）の中に入れるもの親タグは一緒。
// HTMLを追加する関数。
function creatDOM( value ){
  // liタグを作成
  let list = document.createElement('li');
  // リストタグないにvalueを格納
  list.textContent = value;
  // listの子要素として追加
  document.getElementById('list').appendChild(list);
}