<template>
    <div class="w-full flex flex-col p-5 gap-7 h-600">
        <h1 class="self-center">Reader</h1>
        <div class="flex flex-col gap-3">
            <p>Username</p>
            <input class="h-40 px-10 rounded border-none" type="email" placeholder="e.g.username@example.com">
        </div>
        <div class="flex flex-col gap-3">
            <p>Password</p>
            <input type="password" class="h-40 px-10 rounded border-none" placeholder="Enter your password">
        </div>
        <div class="flex justify-between">
            <div class="flex gap-1">
                <input type="checkbox">
                <p>Remember me</p>
            </div>
            <a href="" class="color-red">Forgot Password</a>
        </div>
        <button class="h-50 rounded border-none bg-cyan">Log In</button>
        <div class="flex self-center gap-1">
            <p>Don't have an account?</p>
            <a href="" class="color-blue">Sign Up</a>
        </div>

    </div>
</template>