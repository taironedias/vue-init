<template>
    <div>
        <h2>Lista de Posts</h2>

        <PostsListaIten v-for="item in posts" :key="item.id" :post="item">
            <slot :meuPost="item"></slot>
        </PostsListaIten>

    </div>
</template>

<script>

import PostsListaIten from './PostsListaIten';

export default {
    components: {
        PostsListaIten
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>