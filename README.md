# knove

## 確認が必要なこと

- office の法人プランを利用する場合、Azure AD テナントが存在するのか、またそれを触ることができるのか

## まずは、単純な機能を作ってみる

- ログイン機能
  azure ad を利用
- 一覧
  サイドバー
  右下にプラスボタンを表示し、それをタップすると小さいモーダルを表示させる

- 検索
- 投稿
  最初は質問のみ
- 編集

## 将来的に追加

- いいね機能
- タグ
- ナレッジの投稿（投稿のタイプを分ける）
- 絞り込み
  タグでの絞り込み<br>
  ナレッジ、質問での絞り込み
- ソート
  新着、いいねが多い順
- ディレクトリ構成で管理（親の投稿、子の投稿を紐づけられるようにする）

## 認証機能について

- **案 1 Azure AD を利用** <br>

  - ターゲットは Microsoft 365 を法人契約している会社のみになってしまう？
  - もしくは、こちらでテナントを用意して・・・

- **案 2 Azure AD B2C を利用** <br>
  - こちらの案が有力かも
  - B2C を利用する場合、B2C テナントは企業ごとに作成する
  - 認証は Microsoft アカウントでログインできるようにする（そうすることで、365 の法人プランを利用している企業はより便利に利用することができる？）
  - signup 機能はつけない
  - b2c を利用するのは、microsoft 365 の契約をされていない企業向けのため。

## Azure AD 認証

参考資料

- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react
- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/scenario-spa-app-registration
- https://docs.microsoft.com/ja-jp/azure/active-directory/develop/scenario-spa-app-registration#redirect-uri-msaljs-20-with-auth-code-flow
