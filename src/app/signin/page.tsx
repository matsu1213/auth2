"use client";
// サインイン用のボタンコンポーネント
// signIn()を実行すると、/api/auth/signin にリクエストを送信し、認証画面へ飛ぶ
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <>
        <div>
            <button
            onClick={() => signIn("passkey", { redirectTo: "/dashboard" })}
            type="button">
            signin
            </button>
        </div>
    </>
  );
};

export default SignIn;