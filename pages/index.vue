<template>
    <div class="container">
        <button @click="addUser()">Adds</button>
    </div>
</template>

<script>
import {db} from '~/firebase/index'

export default {
	methods: {
		addUser () {

			const userKey = db.ref().child('users').push().key 

			let updates = {}
			updates[`/users/${userKey}`] = {
				name: "Reem Amr",
				age: 30
			}

			return db.ref().update(updates)
		}
	}
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
