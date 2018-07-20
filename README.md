# vue-connect
## 主な使い方

以下のようなコンテナーコンポーネントをVueでも簡単に作れるようにしました
https://redux.js.org/basics/example-todo-list#container-components
それ以外でも使いやすいように、あくまでもmappedComponentの立ち位置にいます

## インストール方法

npm

```
$ npm install vue-connect
```

yarn

```
$ yarn add vue-connect
```

## 使い方

```
import HelloWorld from "@/components/HelloWorld";
import connect from "vue-connect";

const mappedState = {
  msg: "hello from mappedState"
};

const mappedAction = {
  submit() {
    this.$emit("hello");
  }
};

export default connect(
  mappedState,
  mappedAction
)(HelloWorld);
```

詳しくはこのリポジトリのサンプルを見てください

## 説明
connect関数に好きな数だけobject(map)を渡します
objectのキーは接続対象のpropsである必要があります
フォーマットは以下のとおりです

```js
{
  propsName: value
}
```

この形式を渡すと、関数が戻り値として帰ってきます
その関数の第一引数に以下のいずれかの値を渡す必要があります

* Vue.extendで生成したクラス
* コンポーネントオプション
* カスタムコンポーネント名

そうすると、propsに対してマッピングしただけのラッパーコンポーネントのオプションを生成して返します。
