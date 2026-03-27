export default {
  ds: [
    { id: 1, ten: "thuc1", cat: 0 },
    { id: 2, ten: "thuc2", cat: 1 },
    { id: 3, ten: "thuc3", cat: 1 }
  ],
  sayHello() {
    alert("hello");
  },
  Cong(a, b) {
    return a + b;
  },
  walk() {
  },
  lds() {
    return this.ds;
  }
}
/*

import MyLib from '@/MyLib';
export default {
  name: 'ChangePass',
  mounted(){
    MyLib.sayHello();
    let c=MyLib.Cong(1,1);
    alert(c);
  },
  methods:{
  }
}




*/