const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value ='';

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // li生成
    const li = document.createElement('li');
    li.className = 'list-box';
    // div生成
    const div = document.createElement('div');
    div.className = 'list-row';
    
    //  pタグ生成
    const p = document.createElement('p');
    p.innerText = text;
  
    // button(完了)タグの作成
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
      // 押された完了ボタンの親の親タグ(li)を未完了リストから削除
      deleteFromIncompleteList(div.parentNode);
  
      // 完了リストに追加する要素
      // TODO内容テキストを取得
      const text = div.firstElementChild.innerText;
  
      // div以下を初期化
      div.textContent = null;
      
      // liタグ生成
      const li = document.createElement('li');
      li.className = 'list-box';
      // pタグ生成
      const p = document.createElement('p')
      p.innerText = text;
      // buttonタグ生成
      const backButton = document.createElement('button');
      backButton.innerText  = '戻す';
      backButton.addEventListener('click', () => {
        // 押された戻すボタンの親の親タグ(li)を完了リストから削除
        const deleteTarget = div.parentNode;
        document.getElementById('complete-list').removeChild(deleteTarget);
  
        // テキスト取得
        const text = div.firstElementChild.innerText;
        createIncompleteList(text);
        
        // div以下の初期化
        div.textContent = null;
  
      });
  
      // divタグの子要素に各要素を設定
      li.appendChild(div);
      div.appendChild(p);
      div.appendChild(backButton);
  
      // 完了リストに追加
      document.getElementById('complete-list').appendChild(li);
    });
  
    // button(削除)タグの作成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
      // 押された削除ボタンの親の親タグ(li)を未完了リストから削除
      deleteFromIncompleteList(div.parentNode);
    });
  
    // liタグの子要素に各要素を設定
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    
    // 未完了リストに追加
    document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-button').addEventListener('click', () => onClickAdd());