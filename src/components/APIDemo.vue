<template>
  <div class="demo api">
    <h2>API</h2>
    <table>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr v-for="(item,attribute) in describe" :key="attribute">
        <td>{{ item.attribute }}</td>
        <td>{{ item.explain }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.defaultValue }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
type Describe = [{
  attribute: String,
  explain: String,
  type: String,
  defaultValue: String
}]
export default {
  props: {
    describe: {
      type: Object as PropType<Describe>,
      required: true
    },
  },
  setup(props) {
    const {attribute, explain, type, defaultValue} = props.describe;
    return {attribute, explain, type, defaultValue};
  }
};
</script>

<style lang="scss" scoped>
table {
  overflow-x: auto;
  border-collapse: collapse;
  letter-spacing: 1px;
}

table, th, tr, td {
  border-bottom: 1px solid #E5E5EA;
  padding: 16px;
  text-align: center;
}
</style>
