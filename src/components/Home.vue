<script setup>
    import useUserPost from '../composable/PostApi'
    import { reactive, onMounted, } from 'vue';
    const {postData, error, getAllPosts} = useUserPost();
    onMounted(getAllPosts)
</script>

<template>
    <nav class="h-[80px] w-full shadow-lg">
        <div class="max-w-[1200px] m-auto flex items-center justify-between">
            <h1 class="text-3xl p-5 items-center text-gray-400 cursor-pointer">News Feed</h1>
            <div>
            <RouterLink :to="{name:'user'}">
            </RouterLink>
            </div>
        </div>
    </nav>
    <RouterLink :to="{name:'user'}" class="flex my-[50px] items-center justify-center">
        <button class="text-2xl text-gray-300 cursor-pointer tracking-wide rounded bg-gray-700 py-2 px-5">Login to Post</button>
    </RouterLink>

    <section class="max-w-[900px] border m-auto my-2 p-2 rounded-lg text-slate-400 hover:bg-neutral-200 hover:text-gray-600 hover:ease-in-out transition-all" v-for="{id, body, title} in postData" :key="posts?.id">
            <h1 class="lg:text-2xl md:text-2xl my-6 items-center sm:w-full sm:text-xl">{{body}}</h1>
    </section>
</template>
<style scoped>
nav{
    background: rgba( 255, 255, 255, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>