    <script setup>
    import useUserPost from '../composable/PostApi'
    import { reactive, onMounted, } from 'vue';
    const {postData, error, getAllPosts} = useUserPost();
    onMounted(getAllPosts)

    const formData = reactive({
    postValue:''
    });

    const handlePostForm = ()=>{
    alert(formData.postValue)
    formData.postValue = ''
    }

</script>

<template>
 <nav class="h-[80px] w-full shadow-lg fixed top-0 bg-transparent">
    <div class="max-w-[1200px] m-auto flex items-center justify-between">
            <RouterLink :to="{name:'home'}">
                <h1 class="text-3xl p-5 items-center text-gray-400 cursor-pointer">News Feed</h1>
            </RouterLink>
            <div>
                <div>
                    <h1 class="text-3xl p-5 items-center text-gray-500 cursor-pointer">User</h1>          
                </div>
            </div>
        </div>
    </nav>
    <form @submit.prevent="handlePostForm" class="mt-[100px] flex items-center justify-evenly max-w-[900px] m-auto sm:flex flex-col">
        <textarea type="text" v-model.trim="formData.postValue" required  class="mt-1 p-4 text-2xl resize-none bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-.5 mr-3 md:w-[700px] sm:w-[400px] mb-10" rows="3">
        </textarea>
        <button type="submit" class="text-2xl text-gray-300 cursor-pointer tracking-wide rounded bg-gray-700 py-2 px-5">Post</button>
    </form>


    <section class="max-w-[900px] border m-auto my-2 p-2 rounded-lg text-slate-400 hover:bg-neutral-200 hover:text-gray-600 hover:ease-in-out transition-all" v-for="{id, body, title} in postData" :key="posts?.id">
            <h1 class="lg:text-2xl md:text-2xl my-6 items-center sm:w-full sm:text-xl">{{body}}</h1>
    </section>
</template>


<style scoped>
/* textarea{
resize: none;
} */
nav{
    background: rgba( 255, 255, 255, 0.4 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>