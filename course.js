//ボタンを押したらスクロール位置400に移動する処理
let actionButton = document.getElementById('o');
actionButton.onclick = () => o.scrollTop = 400;

$(function(){
    //#で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function(){
        var speed = 200;
        //アンカーの値取得
        var href = $(this).attr("href");
        //移動先を取得
        var target = $(href == '#' || href == "" ? 'html' : href);
        //移動先を数値で取得
        var position = target.offset().top;
        //スムーズスクロール
        $('bod,html').animate({scrollTop:position}, speed, 'swing');
        return false;

    });


      // スクロールのオフセット値
  var offsetY = -10;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^=#]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });

  
});