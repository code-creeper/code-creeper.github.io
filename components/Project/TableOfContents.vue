<script setup lang="ts">
export interface TocItem {
  id: string;
  label: string;
  children?: TocItem[];
}

const props = defineProps<{
  items: TocItem[];
  activeSections: string[];
}>();
</script>

<template>
  <ul class="table-of-content">
    <template v-for="item in items" :key="item.id">
      <li>
        <a :href="`#${item.id}`" :class="{ 'text-white': activeSections.includes(item.id) }">
          {{ item.label }}
        </a>
        <!-- Recursively render nested children -->
        <TableOfContents
          v-if="item.children?.length"
          :items="item.children"
          :active-sections="activeSections"
        />
      </li>
    </template>
  </ul>
</template>
