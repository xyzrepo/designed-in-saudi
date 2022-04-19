<template>
    <label
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        for="user_avatar">Upload file</label>
    <input
        id="user_avatar"
        class="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:border-transparent focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        type="file" />
    <div
        id="user_avatar_help"
        class="mt-1 text-sm text-gray-500 dark:text-gray-300">
        A profile picture is useful to confirm your are logged into your account
    </div>
</template>
