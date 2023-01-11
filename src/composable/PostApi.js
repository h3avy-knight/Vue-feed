import { ref } from "vue";
import axios from "axios";

const useUserPost = () => {
  const postData = ref([]);
  const error = ref(null);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const getAllPosts = async () => {
    postData.value = [];
    error.value = null;
    try {
      const res = await axios(url).then(
        (res) => (postData.value = res.data.slice(0, 10))
      );
    } catch (err) {
      error.value = err.message;
    }
  };

  return { postData, error, getAllPosts };
};

export default useUserPost;
