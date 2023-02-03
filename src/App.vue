<script setup lang="ts">
interface IMenu {
  txt: string
  children?: IMenu[]
}

const props = withDefaults(
  defineProps<{  menu?: IMenu | IMenu[] }>(),
  {
    menu: () => ({
      txt: '菜单1-1',
    }),
  },
)
</script>

<template>
  {{ props.menu }}
</template>
