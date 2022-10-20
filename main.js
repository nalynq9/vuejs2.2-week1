const app = Vue.createApp({
    data() {
        return {
            message: "Hello Vuejs 3",
            name:"Mark Zuckaberg",
            image:'./assets/images/iphone-12-red.png',
            description:'Apple A14 Bionic',
            url:'http://www.apple.com',
            inStock:true,
            inventory:0,
        }
    },
}).mount("#app")
