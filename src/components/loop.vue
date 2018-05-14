<template>
  <div class="loop">
    <div class="table-wrap">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>名称</th>
          <th>单价</th>
          <th>数量</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.num}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="wrap">
      <div>
        <h4>迭代对象~通过对象属性迭代</h4>
        <ul>
          <li v-for="value in items">{{value}}</li>
        </ul>
      </div>
      <div>
        <h4>迭代对象~提供第二个参数</h4>
        <ul>
          <li v-for="(value, key) in items">{{key}}:{{value}}</li>
        </ul>
      </div>
      <div>
        <h4>迭代对象~提供第三个参数为索引</h4>
        <ul>
          <li v-for="(value, key, index) in items">{{index}}.{{key}}:{{value}}</li>
        </ul>
      </div>
      <div>
        <h4>遍历1~10的整数</h4>
        <ul>
          <li v-for="n in 10">{{n}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {name: 'apple', price: 5.00, num: 10},
          {name: 'banana', price: 3.00, num: 8}
        ],
        items: {
          name: 'apple',
          price: 5.00,
          num: 10
        }
      }
    }
  }
</script>

<style scoped>
  .loop {
    margin-top: 50px;
    text-align: center;
  }

  .table-wrap {
    width: 60%;
    margin: 0 auto;
  }

  .table-hover {
    width: 100%;
    border: 1px solid #ddd;
    border-bottom: none;
  }

  .table-hover tr {
    line-height: 34px;
  }

  .table-hover tr th, .table-hover tr td {
    border-bottom: 1px solid #ddd;
  }

  .wrap {
    display: flex;
  }

  .wrap div {
    flex: 1;
  }

  .wrap div h4 {
    text-align: center;
  }

  .wrap div ul {
    width: 50%;
    margin: 0 auto;
    padding: 0;
  }

  .wrap div ul li {
    text-align: left;
  }
</style>
