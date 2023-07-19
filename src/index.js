import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const d = document;
const rootElement = d.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/*
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

> StrictMode とは？
コンポーネントのバグを検知したり、予期せぬ処理などを警告してくれるツールのこと。

> StrictMode を使うとできること
・安全でないライフサイクルの特定
・レガシーな文字列 ref API の使用に対する警告
・非推奨な findDOMNode の使用に対する警告
・意図しない副作用の検出
・レガシーなコンテクスト API の検出
・state の再利用性を保証する

> 一度の実行で２回レンダリングされる理由
StrictMode では、意図しない副作用の検出のために、レンダリングが２回実行される仕様になっているから。
StrictMode で監視されているコンポーネントは、１回の呼び出しで、マウント　→　アンマウント　→　マウント　と言う流れで実行される。
これによって、初回のマウント時には検出されなかった副作用が検出できるようになる。

> 参考サイト
https://blog-mayo.com/2022/10/1073/
*/
