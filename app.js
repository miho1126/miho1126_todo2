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
    // task代入
    const task = document.getElementById('task');

    // タスクの列を配列dataに追加
    data.push(task.value);

    // タスク追加
    creatDOM(task.value);

    // dataをローカルストレージに保存
    dataUpdated();

    // taskのvalueを初期化
    task.value = "";
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

  // ボタンタグ追加
  let button = document.createElement('button');
  button.textContent = '削除';
  list.appendChild(button);

// 削除ボタン
button.addEventListener('click',remove)

  // listの子要素として追加
  document.getElementById('list').appendChild(list);
}

// 削除ボタん
function remove(){
  //削除ボタンを消すのがremove
  this.parentNode.remove();
  // 削除の前にあるaaaaaaを消すためにその文字を見つける。data.indexOf(this.parentNode.textContent);を下のカッコ内に入れる。
  // データをspliceで配列を削除する。項目の中から一致するものを探し出す方法。数字のマイナスは後ろから、マイナスなければ前から２個目をとる。
  data.splice(data.indexOf(this.parentNode.textContent.slice( 0, -2)),1);
  // データを再度保存
  dataUpdated();
}

function dataUpdated(){
  localStorage.setItem('task',JSON.stringify(data));
}