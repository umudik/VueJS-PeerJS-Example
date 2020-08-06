<template>
    <div>
        <b-card>
            <b-card>
                {{ "hello"}}
            </b-card>
            <b-card-text>
                {{`${video.username}-${video.id}`}}
            </b-card-text>
            <b-button variant="success" @click='send()'>Tıkla</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'VideoScreen',
    props: ['video'],
    methods:{
        send:function(){
            console.log('hi')
            this.$emit('hi')
        }
    }
}
</script>


<style scoped>

</style>
