<template>
    <div class="grid lg:grid-cols-3 gap-6 px-4 lg:px-16">
        <div v-for="(content, index) in contents" :key="index" class="py-10 shadow-md rounded flex flex-col items-center justify-center gap-4">
            <img :src="content.image" alt="customer image">
            <h1 class="font-bold text-black text-lg mt-6">{{ content.name }}</h1>
            <p class="font-bold" style="color:#52B95E">{{ content.location }}</p>
            <p class="light mt-6 px-4 text-center">{{ content.description }}</p>
        </div>
    </div>
</template>

<script>
import image from "@/assets/Images/Testimonials/Ellipse 16.png"
export default {
    data(){
        return {
            contents: [
                {
                name: 'Isaac Hayden',
                location: 'Lagos, Nigeria',
                description:
                    'I love this system, I will use this medium to learn a hire for Agric experts and investing time to get Awesome works. I have always looked for a good and reliable platform to save, this is a great opportunity!!!',
                image: image
                },
                {
                name: 'Isaac Hayden',
                location: 'Lagos, Nigeria',
                description:
                    'I love this system, I will use this medium to learn a hire for Agric experts and investing time to get Awesome works. I have always looked for a good and reliable platform to save, this is a great opportunity!!!',
                image: image
                },
                {
                name: 'Isaac Hayden',
                location: 'Lagos, Nigeria',
                description:
                    'I love this system, I will use this medium to learn a hire for Agric experts and investing time to get Awesome works. I have always looked for a good and reliable platform to save, this is a great opportunity!!!',
                image: image
                },
                
            ]
        }
    }

}
</script>

<style scoped>
img{
    width: 40px;
    height: 40px;
}

</style>