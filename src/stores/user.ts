import { defineStore } from 'pinia'
import { ref, computed} from 'vue'

export const useUserStore = defineStore('user', () => {
    //state 数据
    const name = ref('张三')
    const role = ref('管理员')
    //getter计算属性
    const displayName = computed(() => `${name.value} (${role.value})`)
    //action修改数据方法
    function setUser(newName: string, newRole: string) {
        name.value = newName
        role.value = newRole
    }
    function resetUser() {
        name.value = '张三'
        role.value = '管理员'
    }
    return { name, role, displayName, setUser, resetUser }
})